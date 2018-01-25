---
layout: post
lang: en
title: "JSON serialization in Dart strong mode"
image: images/yoga
categories:
  - Flutter
tags:
  - Flutter
  - Dart
  - JSON
  - Serialization
---

A common task when building application nowadays consists of communicating with a distant server through REST APIs. These APIs often support JSON as a data format for communication through HTTP protocol. I found the task of deserializing data not so obvious in Dart strong mode (used by [Flutter](https://flutter.io/)), so I decided to present you how we can achieve this in a few steps.

## Converting a JSON string to a map

Creating a `Map` object from a JSON content is pretty straightforward and integrated to the SDK with the `dart:convert` package.

```dart
import 'dart:convert';

final json = '{ "hello" : "world" }';
final map = JSON.decode(json);
final hello = map["hello"]; 
print(hello); // "world""
```

## Option 1 : converting a map to an object with json_serializable

Since in strong mode we can't rely on mirrors to analyze objects at runtime, we will use code generation with the help of the [json_serializable](https://pub.dartlang.org/packages/json_serializable) package.

### 1°) Add dependencies

First, you must declare the dependencies in your `pubspec.yaml` file:

```yaml
dependencies:
  # ...
  json_annotation:

dev_dependencies:
  # ...
  build_runner:
  json_serializable:
```

### 2°) Create you model class

Now we have to describe our data model in a library. For example, for a `dart/model.dart` file, declared as a `model` library :

```json
{ 
	"firstname" : "John", 
	"lastname" : "Doe", 
	"company" : 
	{ 
		"name": "Awesome Inc." 
	} 
}
```

```dart
library example;

import 'package:json_annotation/json_annotation.dart';

part 'model.g.dart';

@JsonSerializable()
class Customer extends Object with _$PersonSerializerMixin {
  final String firstname;
  final String lastname;

  @JsonKey(nullable: false)
  Company company;

  Person(this.firstname, this.lastname, this. company);

  factory Customer.fromJson(Map<String, dynamic> json) => _$CustomerFromJson(json);
}
```

This will not compile, and it is perfectly normal since the serialization part hasn't been generated yet!


### 3°) Configure the built step

You must create a `tool/build.dart` file in your project. This will be the program executed to generate serialization code.

```dart
import 'dart:async';

import 'package:build_runner/build_runner.dart';
import 'package:json_serializable/src/json_part_builder.dart';
import 'package:source_gen/source_gen.dart';

Future main(List<String> args) async {
  await build([
    new BuildAction(
        jsonPartBuilder(),
        '<YOUR PROJECT ID>',
        inputs: const ['lib/*.dart'])
  ], deleteFilesByDefault: true);
}
```

### 4°) Generate the code

To generate the `*.g.dart` files, run the `dart tool/build.dart` command.

### 5°) Use it

To deserialize your JSON from a json string, just use the `<Model>.fromJson(<json>)` constructor to instantiate you object from you decoded JSON.

```dart
final json = JSON.decode('{ "firstname" : "John", "lastname" : "Doe", "company" : { "name": "Awesome Inc." } }');
Customer customer = new Customer.fromJson(map);
```

## Option 2 : converting a map to an object with built_value

You can use a second package called [built_value](https://pub.dartlang.org/packages/built_value) for more advanced serialization. It will not only deserialize objects from JSON, but gives you other formats and functionalities like immutability, validation, `hashCode`, `equals`, `toString` 

### 1°) Add dependencies

First, you must declare the dependencies in your `pubspec.yaml` file:

```yaml
dependencies:
  # ...
  built_value:

dev_dependencies:
  # ...
  build:
  build_runner:
  source_gen:
  built_value_generator:
```

The `source_gen`, `build_runner `, `build` are needed for adding code generation  steps to the process. 

### 2°) Create your model class

Now we have to describe our data model in a library. For example, for a `dart/model.dart` file, declared as a `model` library :

```json
{ 
	"firstname" : "John", 
	"lastname" : "Doe", 
	"company" : 
	{ 
		"name": "Awesome Inc." 
	} 
}
```

```dart
library model; // name aligned with filename

import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'model.g.dart'; // The imported generate code (<name>.g.dart)

abstract class Customer implements Built<Customer, CustomerBuilder> {

  // Various fields
  String get firstname;
  String get lastname;
  Company get company; // This is a nested Built<..,..>
	
  // Boilerplate code that is needed by generated part
  Customer._();
  factory Customer([updates(CustomerBuilder b)]) = _$Customer;
  static Serializer<Customer> get serializer => _$customerSerializer;

}

abstract class Company implements Built<Company, CompanyBuilder> {

  // Various fields
  String get name;

  // Boilerplate code that is needed by generated part
  Company._();
  factory Company([updates(CompanyBuilder b)]) = _$Company;
  static Serializer<Company> get serializer => _$companySerializer;
}
```

### 3°) Create you serializers

You also need to declare a `serializer.dart` library.

```dart
library serializers;

import 'package:built_collection/built_collection.dart';
import 'package:built_value/serializer.dart';
import 'model.dart';

part 'serializers.g.dart';

@SerializersFor(const [
  Customer,
  Company,
])

final Serializers serializers = _$serializers;
```

This will not compile, and it is perfectly normal since the serialization part hasn't been generated yet!

### 4°) Configure the built step

You must create a `tool/build.dart` file in your project. This will be the program executed to generate serialization code.

```dart
import 'dart:async';

import 'package:build_runner/build_runner.dart';
import 'package:built_value_generator/built_value_generator.dart';
import 'package:source_gen/source_gen.dart';

Future main(List<String> args) async {
  await build([
    new BuildAction(
        new PartBuilder([
          new BuiltValueGenerator(),
        ]),
        '<YOUR PROJECT ID>',
        inputs: const ['lib/*.dart'])
  ], deleteFilesByDefault: true);
}
```

### 5°) Generate the code

To generate the `*.g.dart` files, run the `dart tool/build.dart` command.

### 6°) Use it

To deserialize your JSON from your string, we need to plug the `StandardJsonPlugin` to serializers first. Use the `standardSerializers.deserializeWith` method to instantiate you object from you decoded JSON.

```dart
import 'package:<YOUR PROJECT ID>/model.dart';
import 'package:<YOUR PROJECT ID>/serializers.dart';
import 'package:built_value/standard_json_plugin.dart';

final standardSerializers = (serializers.toBuilder()..addPlugin(new StandardJsonPlugin())).build();

final json = JSON.decode('{ "firstname" : "John", "lastname" : "Doe", "company" : { "name": "Awesome Inc." } }');
Customer customer = standardSerializers.deserializeWith(Customer.serializer, json);
```

## Simpler configuration with Dart 2

If your platform is compatible with Dart 2 (not yet available with Flutter), you can take advantage of a most recent version of the [built_runner](https://pub.dartlang.org/packages/build_runner) package that provides a way to trigger build steps without the hassle of having to add a dart build program.

```dart
pub run build_runner <watch|build>
```
## Conclusion

The whole process could seem heavy compared to reflection based solutions, but it is a real benefit for performances. If you adopt the option 2, you will also benefit of data validation, hash codes and other functionalities that go far beyond serialization (though it is not always needed).

As suggested on [built_value](https://github.com/google/built_value.dart) documentation, you may want to add a code snippet to your editor for a quicker type declaration.

You can also create a `watch.dart` file to add continuous generation (every time the source file changes).

Look at the documentation articles for more advanced features (polymorphism, enums, ...).


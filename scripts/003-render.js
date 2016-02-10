var l18n = new L18n("fr")

/* Rendering */

Handlebars.registerHelper('l18n', function(key) { return l18n.translate(key); });

Handlebars.registerHelper('levelValue', function(value) {
      return value > 0 ? "filled" : "outline";
});

Handlebars.registerHelper('levelName', function(values) {
      
      var value = 0
      for(var v in values) { value += values[v];  }
      switch(value)
      {
      case 4: return l18n.translate("skilllevel4");
      case 3: return l18n.translate("skilllevel3");
      case 2: return l18n.translate("skilllevel2");
      case 1: return l18n.translate("skilllevel1");
      default: return l18n.translate("skilllevel0");
      } 
      return value > 0 ? "filled" : "outline";
});

var source   = document.getElementById("app-template");
var template = Handlebars.compile(source.innerHTML);
var html    = template(context);
var div = document.createElement('div');
div.innerHTML = html;
var node = document.getElementById("app");
node.appendChild(div);
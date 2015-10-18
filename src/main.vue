<style lang="sass?outputStyle=expanded">

  $color-accent: #2075f5;
  $color-white: #ffffff;
  $color-grey-light: #f3f3f3;
  $color-grey-semilight: #c0c5cb;
  $color-grey-dark: #26262c;

  $font-open: 'Open Sans', sans-serif;
  $font-source: 'Fira Mono', sans-serif;

  $portrait-size: 150px;

  $margin-small: 10px;
  $margin-normal: 20px;
  $margin-large: 50px;

  @mixin box-shadow($params) {
    -webkit-box-shadow : $params;
       -moz-box-shadow : $params;
            box-shadow : $params;
  }

  body
  {
    text-align: center;
    font-family: $font-open;
    background: $color-grey-light;
    color: $color-grey-dark;
  }

  .section {
    width: 100%;
    min-height: 100px;
    padding: $margin-normal;

    .icon{
      display: block;
      font-size: 1.6em;
    }

    h1 {
      margin-top: 0px;
      font-size: 0.75em;
      font-weight: 400;
    }

    p {
      margin: 0px;
      font-size: 0.65em;
    }

    a{
        margin: 0px;
        font-size: 0.65em;
        color: $color-grey-semilight;
        display: block;
        text-decoration: none;
    }

    a:hover{
      color: $color-white;
      text-decoration: underline;
    }
  }

  .section-accent {
    @extend .section;
    background-color: $color-accent;
    color: $color-white;
  }

  .section-dark {
    @extend .section;
    background-color: $color-grey-dark;
    color: $color-white;

    p
    {
      color: $color-grey-semilight;
    }
  }

  .section-light {
    @extend .section;
    background-color: $color-grey-semilight;
  }

  .header
  {
    .portrait
    {
      @include box-shadow( #{ 0 0 15px #fff , inset 0 0 2px #fff } );

      width: $portrait-size;
      height: $portrait-size;
      background-image: url(./img/portrait.png);
      margin: auto;
      margin-top: $margin-large;
      border-radius: ($portrait-size / 2);
    }

    .icon
    {
      color: $color-grey-semilight;
      margin-bottom: $margin-large;
    }

    h1
    {
      font-weight: 700;
      text-align: center;
      font-size: 1.3em;
      margin-top: $margin-large;
      margin-bottom: 0px;
      padding: 0px;
    }

    h2
    {
      font-family: $font-source;
      font-weight: 400;
      color: $color-accent;
      text-align: center;
      font-size: 0.8em;
      margin-top: 3px;
      margin-bottom: $margin-large;
      padding: 0px;
    }
  }

</style>
<template>
  <div class="header section">
      <div class="portrait"></div>
      <h1>ALOIS DENIEL</h1>
      <h2>Developer</h2>
      <i class="icon icons8-angle-down"></i>
  </div>

  <section-about info="{{about}}"></section-about>

  <section-skills></section-skills>

  <section-jobs></section-jobs>

  <section-studies></section-studies>

  <section-opensource></section-opensource>

  <section-hobbies></section-hobbies>

  <section-contact items="{{contact}}"></section-contact>

</template>

<script>

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

module.exports = {
  data: {
    contact: [
      { link: 'mailto:alois.deniel@outlook.com', title: 'email'},
      { link: 'https://twitter.com/aloisdeniel', title: 'twitter'},
      { link: 'https://github.com/aloisdeniel', title: 'github'}


    ],
    about: [
        getAge("1988/06/02") + ' year old',
        'live in Rennes, France',
        'work for Orange Business Services'
      ]
  }
};
</script>

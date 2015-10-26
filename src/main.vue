<template>
  <div class="header section">
      <div class="portrait animated fadeIn"></div>
      <h1 class="animated fadeIn">{{ header.name }}</h1>
      <h2 class="animated fadeIn">{{ header.profile }}</h2>
      <i class="icon main icons8-iphone animated zoomIn"></i>
      <i class="icon icons8-angle-down wow rubberBand"></i>
  </div>

  <section-about info="{{about}}"></section-about>

  <section-skills medium="{{ skills.medium }}" major="{{ skills.major }}" minor="{{ skills.minor }}"></section-skills>

  <section-jobs events="{{jobs}}"></section-jobs>

  <section-studies events="{{studies}}"></section-studies>

  <section-opensource></section-opensource>

  <section-hobbies></section-hobbies>

  <section-contact items="{{contact}}"></section-contact>

</template>

<script>
var wow = require('./js/wow-1.1.0/wow.min.js')

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
  ready: function() {
    new wow.WOW().init();
  },
  data: {
    header: {
      name: "Aloïs Deniel",
      profile: "Mobile developer"
    },
    contact: [
      { link: 'mailto:alois.deniel@outlook.com', icon: 'mail'},
      { link: 'https://twitter.com/aloisdeniel', icon: 'twitter'},
      { link: 'https://github.com/aloisdeniel', icon: 'github'}
    ],
    studies: [
      {
        name: 'ESIR',
        date: 'mars 2015',
        duration: '6 months',
        title: 'Diplôme d\'ingénieur',
        subtitle: 'Genie Informatique',
        description: 'soon'
      },
      {
        name: 'Université de Rennes I',
        date: 'janvier 2014',
        duration: '3 months',
        title: 'Licence',
        subtitle: 'Mathématique/Physique/Informatique/Electronique',
        description: 'soon'
      },
      {
        name: 'Lycée Notre Dame du Mur',
        date: 'janvier 2014',
        duration: '3 months',
        title: 'Baccalauréat',
        subtitle: 'Scientifique',
        description: 'soon'
      }
    ],
    jobs: [
      {
        name: 'Orange Business Services',
        date: 'mars 2015',
        duration: '6 months',
        title: 'Ingénieur expert / référent technique',
        subtitle: 'Xamarin & Windows Universal Platform',
        description: 'soon'
      },
      {
        name: 'Capgemini',
        date: 'janvier 2014',
        duration: '3 months',
        title: 'Stagiaire',
        subtitle: 'Etude des bases de données NoSQL',
        description: 'soon'
      }
    ],
    about: [
        getAge("1988/06/02") + ' year old',
        'live in Rennes, France',
        'work for Orange Business Services'
      ],
    skills: {
      major: [ { name: "C#" , type: "L" }, { name: "Xamarin", type: "F" }, { name: "Windows UAP", type: "F" }, { name: "Visual Studio", type: "T" }],
      medium: [ { name: "nodejs", type: "F" }],
      minor: [ { name: "Vue.js", type: "F" }]
    }
  }
};
</script>

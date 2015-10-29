<template>
  <div class="header section">
      <div class="portrait animated fadeIn"></div>
      <h1 class="animated fadeIn">{{ header.name }}</h1>
      <h2 class="animated fadeIn">{{ header.profile }}</h2>
      <i class="icon main icons8-iphone animated zoomIn"></i>
      <div class="langs">
        <a href="#eng" @click="load('eng')">ENG</a> | <a href="#fr" @click="load('fr')">FR</a>
      </div>
      <i class="icon icons8-angle-down wow rubberBand"></i>
  </div>

  <section-about :title="about.title" :info="about.info"></section-about>

  <section-skills :medium="skills.medium" :major="skills.major" :minor="skills.minor"></section-skills>

  <section-jobs :title="jobs.title" :events="jobs.events"></section-jobs>

  <section-studies :title="studies.title" :events="studies.events"></section-studies>

  <section-opensource :title="opensource.title" :more="opensource.more" :projects="opensource.projects"></section-opensource>

  <section-hobbies :title="hobbies.title" :items="hobbies.items"></section-hobbies>

  <section-contact :items="contact"></section-contact>

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
  ready: function(){
    this.load("eng");
  },
  methods: {
    load: function(lang){
      console.log("lang:"+lang);

      var vm = this;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        console.log(">>>"+vm)
          if (xhr.readyState == 4) {
              vm.update(JSON.parse(xhr.responseText));
          }
      }
      xhr.open('GET', '/data/'+lang+'.json', true);
      xhr.send(null);
    },
    update: function(model) {
      this.header = model.header;
      this.about = model.about;
      this.skills = model.skills;
      this.jobs = model.jobs;
      this.studies = model.studies;
      this.opensource = model.opensource;
      this.hobbies = model.hobbies;
      this.contact = model.contact;

      //getAge("1988/06/02") + ' year old',
    }
  },
  data: {
    header:{
      name:null,
      profile:null
    },
    about : {
      title: null,
      info: {}
    },
    skills: {
      medium: [],
      major: [],
      minor: []
    },
    jobs: {
      title: null,
      events: []
    },
    studies: {
      title: null,
      events: []
    },
    opensource: {
      more: null,
      title: null,
      projects: []
    },
    hobbies: {
      title: null,
      items: []
    },
    contact: []
  }
};
</script>

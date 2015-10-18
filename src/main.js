var normalize = require('normalize.css/normalize.css')
var icons = require('windows-10-icons/font/styles.min.css')
var Vue = require('vue')
var appOptions = require('./main.vue')

var components = [
  'section-about',
  'section-contact',
  'section-header',
  'section-hobbies',
  'section-jobs',
  'section-opensource',
  'section-skills',
  'section-studies'
];

components.forEach(function(c) {
  Vue.component(c, require('./components/'+c+'.vue'));
});

var app = new Vue(appOptions).$mount('#app')

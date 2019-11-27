import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

angular.module('app', [
  ngMaterial,
  ngMessages,
  uiRouter,

  Common,
  Components,
])
.config(($locationProvider) => {
  "ngInject";
  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true).hashPrefix('!');
})
.config(($mdThemingProvider) => {
  "ngInject";
  $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('orange')
    .dark();
})
.component('app', AppComponent);


(()=>{
  setTimeout(() => {
    angular.bootstrap(document.getElementsByTagName('html'), ['app']);
  }, 300); // fake loading
})()

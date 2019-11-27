import 'normalize.css';

import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular
  .module('app', [
    ngMaterial,
    ngMessages,
    uiRouter,

    Common,
    Components,
  ])
  .config(($locationProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(($mdThemingProvider) => {
    'ngInject';

    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .accentPalette('orange')
      .dark();
  })
  .component('app', AppComponent);

(() => {
  setTimeout(() => {
    angular.bootstrap(document.getElementsByTagName('html'), ['app']);
  }, 300); // fake loading
})();

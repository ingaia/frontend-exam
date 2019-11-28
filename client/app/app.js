import 'normalize.css';

import angular from 'angular';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import ngYt from 'angular-youtube-api-factory'; // eslint-disable-line no-unused-vars

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular
  .module('app', [
    ngMaterial,
    ngMessages,
    uiRouter,
    'jtt_youtube',

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
  .config(($sceDelegateProvider) => {
    'ngInject';

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      '*://www.youtube.com/**',
    ]);
  })
  .component('app', AppComponent);

(() => {
  setTimeout(() => {
    angular.bootstrap(document.getElementsByTagName('html'), ['app']);
  }, 300); // fake loading
})();

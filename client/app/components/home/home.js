import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

export default angular.module('home', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home'
    });
})
.component('home', homeComponent)
.name;


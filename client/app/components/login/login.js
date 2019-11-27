import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

export default angular.module('guest.login', [
  uiRouter,
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('guest.login', {
        url: '/',
        component: 'login',
      });
  })
  .component('login', loginComponent)

  .name;

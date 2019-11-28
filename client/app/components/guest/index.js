import angular from 'angular';
import uiRouter from 'angular-ui-router';
import guestComponent from './guest.component';

export default angular.module('guest', [
  uiRouter,
])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('guest', {
        abstract: true,
        component: 'guest',
      });
  })
  .component('guest', guestComponent)

  .name;

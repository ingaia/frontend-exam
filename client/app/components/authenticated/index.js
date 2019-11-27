import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authenticatedComponent from './authenticated.component';

export default angular.module('authenticated', [
  uiRouter,
])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('authenticated', {
        // abstract: true,
        url: '/main',
        component: 'authenticated'
      });
  })
  .component('authenticated', authenticatedComponent)

  .name;

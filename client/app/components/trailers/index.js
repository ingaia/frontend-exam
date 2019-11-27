import angular from 'angular';
import uiRouter from 'angular-ui-router';
import trailersComponent from './trailers.component';

export default angular.module('authenticated.trailers', [
  uiRouter,
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('authenticated.trailers', {
        url: '/trailers',
        // abstract: true,
        component: 'trailers',
      });
  })
  .component('trailers', trailersComponent)

  .name;

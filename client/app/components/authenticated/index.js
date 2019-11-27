import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import authenticatedComponent from './authenticated.component';

export default angular.module('authenticated', [
  uiRouter,
])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('authenticated', {
        abstract: true,
        component: 'authenticated',
        resolve: {
          isLogged: ($q, User, $state) => {
            const defer = $q.defer();
            const request = User.getMe();
            request.then(() => {
              defer.resolve();
            }, () => {
              defer.reject();
              $state.go('guest.login');
            });
            return defer.promise;
          },
        },
      });
  })
  .component('authenticated', authenticatedComponent)

  .name;

import angular from 'angular';
import restangular from 'restangular';

export default angular.module('module.api', [
  restangular,
])
  .factory('RestangularYT', (Restangular) => {
    'ngInject';

    return Restangular.withConfig((RestangularConfigurer) => {
      RestangularConfigurer.setBaseUrl('https://www.googleapis.com/youtube/');
      RestangularConfigurer.setDefaultHeaders({
        Accept: 'application/json',
      });
    });
  })
  .name;

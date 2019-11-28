import angular from 'angular';
import UserFactory from './user.factory';

export default angular
  .module('user', [])
  .factory('User', UserFactory)
  .name;

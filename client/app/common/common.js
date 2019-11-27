import angular from 'angular';
import User from './user/user';

export default angular
  .module('common', [
    User,
  ])
  .name;

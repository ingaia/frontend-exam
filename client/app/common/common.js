import angular from 'angular';
import User from './user/user';
import Api from './api';
import Constants from './constants';

export default angular
  .module('common', [
    User,
    Api,
    Constants,
  ])
  .name;

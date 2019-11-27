import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';

export default angular
  .module('common', [
    Navbar,
    User,
  ])
  .name;

import angular from 'angular';
import Home from './home/home';
import About from './about/about';

import Guest from './guest';
import Login from './login';

import Authenticated from './authenticated';

let componentModule = angular.module('app.components', [
  Home,
  About,

  Guest,
  Login,

  Authenticated,
])

.name;

export default componentModule;

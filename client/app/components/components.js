import angular from 'angular';
import Home from './home/home';

import Guest from './guest';
import Login from './login';

import Authenticated from './authenticated';
import Trailers from './trailers';

export default angular
  .module('components', [
    Home,

    Guest,
    Login,

    Authenticated,
    Trailers,
  ])
  .name;

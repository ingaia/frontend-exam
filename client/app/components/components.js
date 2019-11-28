import angular from 'angular';

import Guest from './guest';
import Login from './login/login';

import Authenticated from './authenticated';
import Trailers from './trailers';

export default angular
  .module('components', [
    Guest,
    Login,

    Authenticated,
    Trailers,
  ])
  .name;

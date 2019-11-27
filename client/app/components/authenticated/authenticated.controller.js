import logo from './../../../../assets/logo_dark.png';

class AuthenticatedController {
  constructor() {
    this.name = 'authenticated';
  }

  $onInit() {
    this.logo = logo;
  }
}

export default AuthenticatedController;

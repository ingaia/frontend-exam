import logo from './../../../../assets/logo_dark.png';

class GuestController {
  constructor() {
    this.name = 'guest';
  }

  $onInit() {
    this.logo = logo;
  }
}

export default GuestController;

class LoginController {
  constructor($state) {
    'ngInject';

    this.$state = $state;
    this.model = { email: 'sadfj@cijij.com', password: '1234' };
  }

  $onInit() {

  }

  onSubmit() {
    if (this.form.$valid) {
      this.$state.go('authenticated.trailers');
    }
  }
}

export default LoginController;

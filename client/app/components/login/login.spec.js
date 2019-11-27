import LoginModule from './login';

describe('Login', () => {
  let $rootScope;
  // let $state;
  // let $location;
  let $componentController;
  let $compile;
  // let $httpBackend;

  beforeEach(window.module(LoginModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    // $state = $injector.get('$state');
    // $httpBackend = $injector.get('$httpBackend');
    // $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  // describe('Module', () => {
  //   // top-level specs: i.e., routes, injection, naming
  //   it('default component should be login', () => {
  //     $location.url('/');
  //     $rootScope.$digest();
  //     $httpBackend.flush();
  //     console.log($state.current);
  //     expect($state.current.component).to.eq('login');
  //   });
  // });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('login', {
        $scope: $rootScope.$new(),
      });
    });

    it('has a model property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('model');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope;
    let template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<login></login>')(scope);
      scope.$apply();
    });

    it('has form in template', () => {
      expect(template.find('form').html()).to.not.undefined;
    });

    it('has submit in template', () => {
      expect(template.find('md-button').html()).to.eq('LOGIN');
    });
  });
});

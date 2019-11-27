import NavbarModule from './navbar';

describe('Navbar', () => {
  let $rootScope;
  let $componentController;
  let $compile;

  beforeEach(window.module(NavbarModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('navbar', {
        $scope: $rootScope.$new(),
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope;
    let template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<navbar></navbar>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').find('a').html()).to.eq('navbar');
    });
  });
});

class TrailersController {
  constructor() {
    'ngInject';

    this.trailers = [];
  }

  $onInit() {
    this.trailers = [
      { src: './assets/screenshots/screenshot1.jpg', title: 'Lorem Ipsum' },
      { src: './assets/screenshots/screenshot2.jpg', title: 'Ipsum Lorem' },
      { src: './assets/screenshots/screenshot3.jpg', title: 'John Doe' },
      { src: './assets/screenshots/screenshot1.jpg', title: 'Lorem Ipsum' },
      { src: './assets/screenshots/screenshot2.jpg', title: 'Ipsum Lorem' },
      { src: './assets/screenshots/screenshot3.jpg', title: 'John Doe' },
      { src: './assets/screenshots/screenshot1.jpg', title: 'Lorem Ipsum' },
      { src: './assets/screenshots/screenshot2.jpg', title: 'Ipsum Lorem' },
      { src: './assets/screenshots/screenshot3.jpg', title: 'John Doe' },
      { src: './assets/screenshots/screenshot1.jpg', title: 'Lorem Ipsum' },
      { src: './assets/screenshots/screenshot2.jpg', title: 'Ipsum Lorem' },
      { src: './assets/screenshots/screenshot3.jpg', title: 'John Doe' },
      { src: './assets/screenshots/screenshot1.jpg', title: 'Lorem Ipsum' },
      { src: './assets/screenshots/screenshot2.jpg', title: 'Ipsum Lorem' },
      { src: './assets/screenshots/screenshot3.jpg', title: 'John Doe' },
    ];
  }
}

export default TrailersController;

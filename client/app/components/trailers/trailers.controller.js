import angular from 'angular';
import template from './template.html';

function DialogController($scope, $mdDialog, video) {
  'ngInject';

  $scope.video = video;
  $scope.hide = () => {
    $mdDialog.hide();
  };

  $scope.cancel = () => {
    $mdDialog.cancel();
  };

  $scope.answer = (answer) => {
    $mdDialog.hide(answer);
  };

  $scope.getIframeSrc = videoId => `https://www.youtube.com/embed/${videoId}`;
}

class TrailersController {
  constructor(RestangularYT, $mdDialog, YT_API_KEY) {
    'ngInject';

    this.trailers = [];
    this.RestangularYT = RestangularYT;
    this.$mdDialog = $mdDialog;

    this.params = {
      playlistId: 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF',
      part: 'snippet',
      key: YT_API_KEY,
      maxResults: 6,
    };
  }

  $onInit() {
    this.fetchVideos();
  }

  fetchVideos() {
    this.RestangularYT.all('v3').customGET('playlistItems', this.params).then((data) => {
      this.trailers = [...this.trailers, ...data.plain().items];
      this.params.pageToken = data.plain().nextPageToken;
    });
  }

  openVideo(ev, video) {
    this.$mdDialog.show({
      controller: DialogController,
      template,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: false,
      locals: {
        video,
      },
    }).then(() => {}, () => {});
  }
}

export default TrailersController;

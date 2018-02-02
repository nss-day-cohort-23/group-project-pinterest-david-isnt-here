'use strict';

angular.module('PinterestApp')

  .controller('NavBarCtrl', ['$scope', '$location', function ($scope, $location, AuthFactory) {

    $scope.isActive = function (path) {

      var currentPath = $location.path().split('/')[1];

      if (currentPath.indexOf('?') !== -1) {

        currentPath = currentPath.split('?')[0];
      }
      return currentPath === path.split('/')[1];

    };
    $scope.logout = () => {
      AuthFactory.logout()
        .then(() => {
          $location.path("/login");
        });
    };

  }]);
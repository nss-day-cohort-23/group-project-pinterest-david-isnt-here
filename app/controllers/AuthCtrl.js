"use strict";

angular.module("PinterestApp").controller("AuthCtrl", function ($scope, AuthFactory) {
  $scope.auth = {};

  $scope.register = () => {
    AuthFactory.registerWithEmail($scope.auth)
      .then(user => $scope.login(user));
  };

  $scope.login = () => {
    AuthFactory.login($scope.auth)
      .then(user => console.log(user));
  };

  $scope.logout = () => {
    AuthFactory.logout()
      .then(() => $scope.auth = {});
  };
});

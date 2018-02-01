"use strict";

angular.module("PinterestApp").controller("AuthCtrl", function ($scope, AuthFactory, $window, $location) {
  $scope.auth = {};

  AuthFactory.getUser()
    .then(user => {
      // $location.path("/");
    }).catch(err => {});

  $scope.register = () => {
    AuthFactory.register($scope.auth)
      .then(user => $scope.login(user));
  };

  $scope.login = () => {
    AuthFactory.login($scope.auth)
      .then(response => {
        let user = { "uid": response.uid };
        // console.log(user);
        AuthFactory.postUser(user);
      });
  };

  $scope.logout = () => {
    AuthFactory.logout()
      .then(() => {
        $scope.auth = {};
      });
  };
});

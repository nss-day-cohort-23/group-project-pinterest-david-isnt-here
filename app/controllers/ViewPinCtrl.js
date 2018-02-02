"use strict";

angular.module("PinterestApp").controller("ViewPinCtrl", function ($scope, $routeParams, PinFactory, AuthFactory, $location) {
    AuthFactory.getUser()
      .then(user => {
        $scope.pid = $routeParams.pid;
        PinFactory.getOnePin($scope.pid)
          .then((data) => {
            $scope.pin = data;
            $scope.title = $scope.pin.title;
          });

      })
      .catch(err => {
        $location.path("/login");
      });
  });
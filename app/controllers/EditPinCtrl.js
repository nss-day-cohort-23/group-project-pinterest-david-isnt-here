"use strict";

angular.module("PinterestApp")
.controller("EditPinCtrl", function($scope, PinFactory, $location, $window, $routeParams, AuthFactory) {
  AuthFactory.getUser()
    .then(user => {
      $scope.pid = $routeParams.pid;
      PinFactory.getOnePin($scope.pid).then(pin => {
        $scope.pin = pin;
      });
    })
    .catch(err => {
      $location.path("/login");
    });
      
    $scope.savePinToFB = () => {
      PinFactory.editPin($scope.pin)
      .then((data) => {
        $window.location.href =`#!/board/${data.boardid}/pin/${data.id}`;
        // TODO: make this locatoin.url????
      });
    };
});
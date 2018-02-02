"use strict";

angular.module("PinterestApp")
.controller("EditPinCtrl", function($scope, $routeParams, $location, PinFactory, AuthFactory){

  AuthFactory.getUser()
  .then(user => {
    $scope.pid = $routeParams.pid;
    PinFactory.getOnePin($scope.pid).then(pin => $scope.pin = pin);
    })
  .catch(err => $location.path("/login"));

  $scope.savePinToFB = () => PinFactory.editPin($scope.pin)
    .then(data => $location.path(`/board/${data.boardid}/pin/${$scope.pid}`));

  $scope.delete = pinid => {
    let deletedPin = $scope.pin;
    PinFactory.deletePin(pinid)
    .then(() => $location.path(`/board/${deletedPin.boardid}`));
  };

});

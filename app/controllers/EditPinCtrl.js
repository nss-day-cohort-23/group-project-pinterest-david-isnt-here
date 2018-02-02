"use strict";

angular.module("PinterestApp")
.controller("EditPinCtrl", function($scope, $routeParams, $location, PinFactory, AuthFactory){

  AuthFactory.getUser()
  .then(user => {
    $scope.pid = $routeParams.pid;
    PinFactory.getOnePin($scope.pid).then(pin => $scope.pin = pin);
    })
  .catch(err => $location.path("/login"));

  $scope.savePinToFB = () => PinFactory.editPin($scope.newPin)
    .then(data => $location.url(`#!/board/${data.boardid}/pin/${data.id}`));

  $scope.delete = pinid => {
    let deletedPin = $scope.newPin;
    PinFactory.deletePin(pinid)
    .then(() => $location.url(`/board/${deletedPin.boardid}`));
  };

});

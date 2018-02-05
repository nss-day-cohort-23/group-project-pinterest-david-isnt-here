"use strict";

angular.module("PinterestApp")
.controller("NewPinCtrl", function($scope, $routeParams, $location, PinFactory, AuthFactory){

  $scope.pin = {};
  $scope.pin.title = "";
  $scope.pin.url = "";
  $scope.pin.boardid = $routeParams.bid;

// adds the current users uid and the boardid (from routeParams)
// onto the newPin object before posting
  $scope.savePinToFB = () => {
    AuthFactory.getUser().then(user => {
      $scope.pin.uid = user.uid;
      return PinFactory.addPin($scope.pin);
    })
    .then(pinResponse => $location.path(`/board/${$routeParams.bid}`));
  };
});

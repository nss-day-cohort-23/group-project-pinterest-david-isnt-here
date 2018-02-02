"use strict";

angular.module("PinterestApp")
.controller("NewPinCtrl", function($scope, $routeParams, $location, PinFactory, AuthFactory){

  $scope.pin = {};
  $scope.pin.title = "";
  $scope.pin.url = "";

// adds the current users uid and the boardid (from routeParams)
// onto the newPin object before posting
  $scope.savePinToFB = () => {
    AuthFactory.getUser().then(user => {
      $scope.pin.uid = user.uid;
      $scope.pin.boardid = $routeParams.bid;
      return PinFactory.addPin($scope.pin);
    })
    .then(pinResponse => $location.path(`/board/${$routeParams.bid}`));
  };
});

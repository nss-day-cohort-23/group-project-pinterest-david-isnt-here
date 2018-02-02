"use strict";

angular.module("PinterestApp")
.controller("ViewPinCtrl", function($scope, $routeParams, $location, AuthFactory, PinFactory){
  AuthFactory.getUser()
  .then(user => {
    $scope.pid = $routeParams.pid;
    return PinFactory.getOnePin($scope.pid);
  })
  .then(data => {
    $scope.pin = data;
    $scope.title = $scope.pin.title;
  })
  .catch(err => $location.path("/login"));

  $scope.delete = pinid => {
    PinFactory.deletePin(pinid)
    .then(() => $location.url(`/board/${$scope.pin.boardid}`));
  };
});

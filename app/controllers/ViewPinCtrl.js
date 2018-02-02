"use strict";

angular.module("PinterestApp")
.controller("ViewPinCtrl", function($scope, $routeParams, $location, PinFactory){

  PinFactory.getOnePin()
  .then((data) => {
    $scope.pin = data;
    $scope.title = $scope.pin.title;
    $scope.pin.id = $routeParams.pid;
  });

  $scope.delete = pinid => {
    PinFactory.deletePin(pinid)
    .then(() => $location.url(`/board/${$scope.pin.boardid}`));
  };



});

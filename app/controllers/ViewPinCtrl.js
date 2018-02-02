"use strict";

angular.module("PinterestApp")
.controller("ViewPinCtrl", function($scope, $routeParams, PinFactory){

  $scope.pid = $routeParams.pid;
  PinFactory.getOnePin($scope.pid)
  .then((data) => {
    $scope.pin = data;
    $scope.title = $scope.pin.title;
  });

});
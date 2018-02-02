"use strict";

angular.module("PinterestApp")
.controller("ViewBoardCtrl", function($scope, $routeParams, PinFactory){
  $scope.route = $routeParams.bid;
  // uses routeParams to get the boardid and search for pins using that boardid
  PinFactory.getAllPins()
  .then ((pinData) => {
      $scope.pins = pinData;
  });

 });
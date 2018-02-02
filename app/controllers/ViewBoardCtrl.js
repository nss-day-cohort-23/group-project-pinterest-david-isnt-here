"use strict";

angular.module("PinterestApp")
.controller("ViewBoardCtrl", function($scope, PinFactory, $routeParams){
  // uses routeParams to get the boardid and search for pins using that boardid
  PinFactory.getAllPins()
  .then ((pinData) => {
      $scope.pins = pinData;
  });
  // TODO: find less janky solution
  $scope.boardid = $routeParams.bid;
 });
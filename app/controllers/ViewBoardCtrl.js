"use strict";

angular.module("PinterestApp")
.controller("ViewBoardCtrl", function($scope, BoardFactory, $routeParams, PinFactory){
  $scope.route = $routeParams.bid;
  // uses routeParams to get the boardid and search for pins using that boardid
  PinFactory.getAllPins()
  .then ((pinData) => {
      console.log('pinData',pinData);
      
      $scope.pins = pinData;
  });

 });
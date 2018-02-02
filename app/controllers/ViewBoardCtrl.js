"use strict";

angular.module("PinterestApp")
.controller("ViewBoardCtrl", function($scope, BoardFactory, $routeParams, PinFactory){
  $scope.route = $routeParams.bid;
  // uses routeParams to get the boardid and search for pins using that boardid
  PinFactory.getAllPins()
  .then ((pinData) => {
      let keys = Object.keys(pinData.data);
      keys.forEach(key => pinData.data[key].id = key);
      $scope.pins = pinData.data;
  });

 });
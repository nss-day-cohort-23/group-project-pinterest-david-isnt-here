"use strict";

angular.module("PinterestApp")
.controller("NewPinCtrl", function($scope, $q, $http, $routeParams, PinFactory){

  // PinFactory.addPin()
  // .then((pinResponse)=>{
  //   console.log('pinResponsepin',pinResponse);
  // });

  $scope.newPin.title = "";
  $scope.newPin.url = "";



});
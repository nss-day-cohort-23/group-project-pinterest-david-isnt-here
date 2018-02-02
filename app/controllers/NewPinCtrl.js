"use strict";

angular.module("PinterestApp")
.controller("NewPinCtrl", function($scope, $routeParams, PinFactory){

  $scope.newPin = {};
  $scope.newPin.title = "";
  $scope.newPin.url = "";

  // adds the current users uid and the boardid (from routeParams) 
  // onto the newPin object before posting
  $scope.savePinToFB = () =>{
    $scope.newPin.uid = firebase.auth().currentUser.uid;
    $scope.newPin.boardid = $routeParams.bid;
    PinFactory.addPin($scope.newPin)
    .then((pinResponse)=>{
        // console.log('pinResponsepin',pinResponse);
        // TODO: make page redirect back to the board
    });
  };
});
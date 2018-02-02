"use strict";

angular.module("PinterestApp")
.controller("NewPinCtrl", function($scope, $routeParams, PinFactory, AuthFactory, $location){

  $scope.newPin = {};
  $scope.newPin.title = "";
  $scope.newPin.url = "";

  // adds the current users uid and the boardid (from routeParams) 
  // onto the newPin object before posting
  $scope.savePinToFB = () =>{
    AuthFactory.getUser().then(user => {
      $scope.newPin.ud = user.uid;
      $scope.newPin.boardid = $routeParams.bid;
      return PinFactory.addPin($scope.newPin);
    })
      .then((pinResponse)=>{
        $location.path(`/board/${$routeParams.bid}`);
      });
  };
});
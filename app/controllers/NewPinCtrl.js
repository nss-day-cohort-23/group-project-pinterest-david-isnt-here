"use strict";

angular.module("PinterestApp")
.controller("NewPinCtrl", function($scope, $routeParams, PinFactory, AuthFactory, $location){

  $scope.pin = {};
  $scope.pin.title = "";
  $scope.pin.url = "";

  // adds the current users uid and the boardid (from routeParams) 
  // onto the newPin object before posting
  $scope.savePinToFB = () =>{
    AuthFactory.getUser().then(user => {
      $scope.pin.ud = user.uid;
      $scope.pin.boardid = $routeParams.bid;
      return PinFactory.addPin($scope.pin);
    })
      .then((pinResponse)=>{
        $location.path(`/board/${$routeParams.bid}`);
      });
  };
});
"use strict";

angular.module("PinterestApp")
.controller("EditPinCtrl", function($scope, $routeParams, PinFactory, $location){

  
  PinFactory.getOnePin().then(oldPin => {
    $scope.newPin = oldPin;
    $scope.title = `Editing "${oldPin.title}"`;
    console.log('newPin in getOnePin',$scope.newPin);
  });
  
  $scope.savePinToFB = () => {
    // console.log('oldPin in savePinToFB function: ',oldPin);
    console.log("newPinin savePinToFB function: ", $scope.newPin);
    PinFactory.editPin($scope.newPin)
    .then(({data}) => {
      console.log('successful edit! in save function',data);
      // $location.url(`/board/${$routeParams.bid}/pins/${$routeParams.pid}`);
    });
  };

  

});
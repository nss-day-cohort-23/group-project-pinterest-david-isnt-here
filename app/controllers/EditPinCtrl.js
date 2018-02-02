"use strict";

angular.module("PinterestApp")
.controller("EditPinCtrl", function($scope, $routeParams, PinFactory, $location, $window){

  
  PinFactory.getOnePin().then(oldPin => {
    $scope.newPin = oldPin;
    $scope.title = `Editing "${oldPin.title}"`;
  });
  
  $scope.savePinToFB = () => {
    PinFactory.editPin($scope.newPin)
    .then((data) => {
      console.log('data',data);
      $window.location.href =`#!/board/${data.boardid}/pin/${data.id}`;
    });
  };

  

});
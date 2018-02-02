"use strict";

angular.module("PinterestApp")
.controller("EditPinCtrl", function($scope, $routeParams, PinFactory, $location){

  
  PinFactory.getOnePin().then(oldPin => {
    $scope.newPin = oldPin;
    $scope.title = `Editing ${oldPin.title}`;
  });
  
  $scope.savePinToFB = () => {
    console.log("todoItem", $scope.todoItem);
    PinFactory.editPin($scope.todoItem, $routeParams.id)
    .then(data => {
      $location.url(`/items/deets/${$routeParams.id}`);
    });
  };

});
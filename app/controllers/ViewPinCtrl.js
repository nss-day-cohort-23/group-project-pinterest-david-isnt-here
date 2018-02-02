"use strict";

angular.module("PinterestApp")
.controller("ViewPinCtrl", function($scope, $routeParams, PinFactory){



  PinFactory.getOnePin()
  .then(({data}) => {
    console.log('thisPin',data);
    $scope.pin = data;
    $scope.title = `${$scope.pin.title}`;
    console.log('pin',$scope.thisPinToDisplay); 
  });



});
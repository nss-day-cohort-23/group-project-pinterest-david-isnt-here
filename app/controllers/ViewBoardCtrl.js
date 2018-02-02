"use strict";

angular.module("PinterestApp")
.controller("ViewBoardCtrl", function($scope, BoardFactory, $routeParams, PinFactory){

  // TODO: a fucntion that will get all the pins for 
  // a secific board, usuing that boards BoardId



  PinFactory.getPinData()
  .then ((pinData) => {
      console.log("pin data: ", pinData);
      let keys = Object.keys(pinData.data);
      keys.forEach(key => pinData.data[key].id = key);
      $scope.pins = pinData.data;
      console.log('pins',$scope.pins);
      console.log('routseparams',$routeParams);
      // $scope.boardArray = Object.entries(boardData.data);

      // return PinFactory.getPinData();
  });
  // .then((pinData) => {
  //     console.log("pin data?", pinData);
  //     $scope.pinArray = Object.entries(pinData.data);
      
  // });


 });
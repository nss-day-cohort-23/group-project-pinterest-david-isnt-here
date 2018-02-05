"use strict";

angular.module("PinterestApp")
.controller("ViewBoardCtrl", function($scope, $routeParams, $location, PinFactory, AuthFactory){
  // TODO: find less janky solution
  $scope.boardid = $routeParams.bid;

  AuthFactory.getUser()
  .then(user => PinFactory.getAllPins($scope.boardid))
  .then(pinData => $scope.pins = pinData)
  .then(dataArray =>PinFactory.getBoardName(dataArray))
  .then((theBoard)=> $scope.boardTitle = theBoard.title)
  .catch(err => $location.path("/login"));

  //Deletes specifc pins, reprints pins after getting all pins again from DB.
  $scope.delete = pinid => {
    PinFactory.deletePin(pinid)
    .then(() => PinFactory.getAllPins($scope.boardid))
    .then(pinData => $scope.pins = pinData);
  };
});

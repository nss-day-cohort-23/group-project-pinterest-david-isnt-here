"use strict";

angular.module("PinterestApp")
  .controller("ViewBoardCtrl", function ($scope, PinFactory, $routeParams, $location, AuthFactory) {
    // TODO: find less janky solution
    $scope.boardid = $routeParams.bid;
    AuthFactory.getUser()
      .then(user => {
        PinFactory.getAllPins($scope.boardid)
          .then((pinData) => {
            $scope.pins = pinData;
          });
      })
      // if no user
      .catch(err => {
        $location.path("/login");
      });
  });
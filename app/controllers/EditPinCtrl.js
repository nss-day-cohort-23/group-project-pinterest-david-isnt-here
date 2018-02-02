"use strict";

angular.module("PinterestApp")
.controller("EditPinCtrl", function($scope, PinFactory, $location, $window){


  PinFactory.getOnePin().then(oldPin => {
    $scope.newPin = oldPin;
    $scope.title = `Editing "${oldPin.title}"`;
  });

  $scope.savePinToFB = () => {
    PinFactory.editPin($scope.newPin)
    .then(data => $location.url(`#!/board/${data.boardid}/pin/${data.id}`));
  };

  $scope.delete = pinid => {
    let deletedPin = $scope.newPin;
    PinFactory.deletePin(pinid)
    .then(() => $location.url(`/board/${deletedPin.boardid}`));
  };

});

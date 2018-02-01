"use strict";

angular.module("PinterestApp").controller("AuthCtrl", function($scope, AuthFactory){
  $scope.auth = {};

  $scope.registerUser = () => {
    AuthFactory.registerWithEmail($scope.auth)
    .then(userInfoFromFB => $scope.logMeIn(userInfoFromFB));
  };

  $scope.logMeIn = () => {
    AuthFactory.login($scope.auth)
    .then(userInfoAfterLogin => console.log("You're logged in", userInfoAfterLogin));
  };


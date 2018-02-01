"use strict";

angular.module("PinterestApp").controller("AuthCtrl", function($scope, AuthFactory){
  $scope.auth = {};

  $scope.registerUser = function(userInfo) {
    AuthFactory.registerWithEmail(userInfo)
    .then(function(userInfoFromFB) {
      console.log(userInfoFromFB);
      // log user in here, by passing userInfoFromFB into login method
    });
  };



});
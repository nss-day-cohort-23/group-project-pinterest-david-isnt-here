"use strict";

angular.module("PinterestApp").controller("AuthCtrl", function($scope, AuthFactory){
  $scope.auth = {};

  $scope.registerUser = function() {
    AuthFactory.registerWithEmail($scope.auth)
    .then(function(userInfoFromFB) {
      console.log(userInfoFromFB);
      // log user in here, by passing userInfoFromFB into login method
    });
  };

  $scope.logMeIn = function(){
    AuthFactory.login($scope.auth)
    .then(function(userInfoAfterLogin){
        console.log('didLogin',userInfoAfterLogin);
        $scope.login = {};
        $scope.register = {};
        // $location.url("/songs/list");
      });
    };


});
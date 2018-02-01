"use strict";

angular.module("PinterestApp", ["ngRoute"])
.constant("FBUrl", "pinteresting-53274.firebaseapp.com")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/loginRegister.html',
      controller: 'AuthCtrl'
    })
    .otherwise('/auth');
}])
.run(function(FBCreds) {
  firebase.initializeApp(FBCreds);
});

// routes and configs go here, chained onto the module definition
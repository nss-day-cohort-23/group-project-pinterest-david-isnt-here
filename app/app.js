"use strict";

angular.module("PinterestApp", ["ngRoute"])
.constant("FBUrl", "pinteresting-53274.firebaseapp.com")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongListCtrl'
    })
    .when('/songs/new', {
      templateUrl: 'partials/song-form.html',
      controller: 'SongFormCtrl'
    })
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .otherwise('/auth');
}])
.run(function(FBCreds) {
  firebase.initializeApp(FBCreds);
});

// routes and configs go here, chained onto the module definition
"use strict";

angular.module("PinterestApp", ["ngRoute"])
.constant("FBUrl", "pinteresting-53274.firebaseapp.com")

.config($routeProvider => {
    $routeProvider

    // routes and configs go here, chained onto the module definition
    
    .when("/login", {
        templateUrl: "partials/loginRegister.html",
        controller: "AuthCtrl"
    })
    .when ("/", {
        templateUrl: "partials/viewAllBoards.html",
        controller: "ViewAllBoardsCtrl"
    })
    .when("/board/new", {
        templateUrl: "partials/addBoard.html",
        controller: "NewBoardCtrl"
    })
    .when ("/board/id", {
        templateUrl: "partials/viewBoard.html",
        controller: "ViewBoardCtrl"
    })
    .when("/board/id/edit", {
        templateUrl: "partials/editBoard.html",
        controller: "EditBoardCtrl"
    })
    .when ("/board/id/pin/id/new", {
        templateUrl: "partials/addPin.html",
        controller: "NewPinCtrl"
    })
    .when ("/board/id/pin/id", {
        templateUrl: "partials/viewPin.html",
        controller: "ViewPinCtrl"
    })
    .when ("/board/id/pin/id/edi", {
        templateUrl: "editPin.html",
        controller: "EditPinCtrl"
    })
    .otherwise("/login");
    
})
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



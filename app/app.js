"use strict";

angular.module("PinterestApp", ["ngRoute"])

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
    .when ("/board/:bid", {
        templateUrl: "partials/viewBoard.html",
        controller: "ViewBoardCtrl"
    })
    .when("/board/:bid/edit", {
        templateUrl: "partials/editBoard.html",
        controller: "EditBoardCtrl"
    })
    .when ("/board/:bid/pin/:pid/new", {
        templateUrl: "partials/addPin.html",
        controller: "NewPinCtrl"
    })
    .when ("/board/:bid/pin/:pid", {
        templateUrl: "partials/viewPin.html",
        controller: "ViewPinCtrl"
    })
    .when ("/board/:bid/pin/:pid/edit", {
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



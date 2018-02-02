"use strict";

angular.module("PinterestApp", ["ngRoute"])

.config($routeProvider => {
    $routeProvider

    // routes and configs go here, chained onto the module definition
    
    .when ("/board/:bid/pin/:pid", {
        templateUrl: "partials/viewPin.html",
        controller: "ViewPinCtrl"
    })
    .when("/login", {
        templateUrl: "partials/loginRegister.html",
        controller: "AuthCtrl"
    })
    .when ("/", {
        templateUrl: "partials/viewAllBoards.html",
        controller: "ViewAllBoardsCtrl"
    })
    .when("/board/new", {
        templateUrl: "partials/editAddBoard.html",
        controller: "NewBoardCtrl"
    })
    .when ("/board/:bid", {
        templateUrl: "partials/viewBoard.html",
        controller: "ViewBoardCtrl"
    })
    .when("/board/:bid/edit", {
        templateUrl: "partials/editAddBoard.html",
        controller: "EditBoardCtrl"
    })
    .when ("/board/:bid/pin/new", {
        templateUrl: "partials/editAddPin.html",
        controller: "NewPinCtrl"
    })
    .when ("/board/:bid/pin/:pid/edit", {
        templateUrl: "editAddPin.html",
        controller: "EditPinCtrl"
    })
    .otherwise("/login");
    
})

.run(function(FBCreds) {
  firebase.initializeApp(FBCreds);
});



"use strict";

angular.module("PinterestApp")
.controller("ViewAllBoardsCtrl", function($scope, BoardFactory){

    BoardFactory.getBoardData()
        .then((boardData) => {
            $scope.boards = boardData;
            console.log("is this the data?????", boardData);
        });
});
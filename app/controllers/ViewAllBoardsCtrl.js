"use strict";

angular.module("PinterestApp").controller("ViewAllBoardsCtrl", function($scope, BoardFactory){

    BoardFactory.getBoardData()
        .then((boardData) => {
            let keys = Object.keys(boardData.data);
            keys.forEach(key => boardData.data[key].id = key);
            $scope.boards = boardData.data;
            console.log("is this the data?", boardData);
            //  console.log("object", Object.entries(boardData.data));

        });
});
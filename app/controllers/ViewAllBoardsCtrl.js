"use strict";

angular.module("PinterestApp")
.controller("ViewAllBoardsCtrl", function($scope, BoardFactory) {

  BoardFactory.getAllBoards()
  .then(boardData => $scope.boards = boardData);

  $scope.delete = boardid => {
    BoardFactory.deleteBoard(boardid)
    .then(() => BoardFactory.getAllBoards())
    .then(boardData => $scope.boards = boardData);
  };
});

"use strict";

angular.module("PinterestApp")
.controller("ViewAllBoardsCtrl", function($scope, $location, AuthFactory, BoardFactory) {
  AuthFactory.getUser()
    .then(user => BoardFactory.getAllBoards()
    .then(boardData => $scope.boards = boardData))
    .catch(err => $location.path('/login'));

  $scope.delete = boardid => {
    BoardFactory.deleteBoard(boardid)
    .then(() => BoardFactory.getAllBoards())
    .then(boardData => $scope.boards = boardData);
  };
});

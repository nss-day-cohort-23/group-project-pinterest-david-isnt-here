"use strict";

angular.module("PinterestApp")
.controller("ViewAllBoardsCtrl", function($scope, $location, AuthFactory, BoardFactory) {
  AuthFactory.getUser()
  .then(user => BoardFactory.getAllBoards(user.uid))
  .then(boardData => $scope.boards = boardData)
  .catch(err => $location.path('/login'));

  $scope.delete = boardid => {
    BoardFactory.deleteBoard(boardid)
    .then(() => BoardFactory.getAllBoards(firebase.auth().currentUser.uid))
    .then(boardData => $scope.boards = boardData);
  };
});

"use strict";

angular.module("PinterestApp")
  .controller("ViewAllBoardsCtrl", function ($scope, BoardFactory, $routeParams, AuthFactory) {
    AuthFactory.getUser()
      .then(user => {
        BoardFactory.getAllBoards(user.uid)
          .then((boardData) => {
            $scope.boards = boardData;
          });
      });
  });
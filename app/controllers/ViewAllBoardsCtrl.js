"use strict";

angular.module("PinterestApp")
  .controller("ViewAllBoardsCtrl", function ($scope, BoardFactory, AuthFactory, $location) {
    AuthFactory.getUser()
      .then(user => {
        BoardFactory.getAllBoards(user.uid)
          .then((boardData) => {
            $scope.boards = boardData;
          });
      })
      .catch(err => {
        $location.path("/login");
      });
  });
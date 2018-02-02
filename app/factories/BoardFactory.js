"use strict";

angular.module("PinterestApp").factory("BoardFactory", function ($q, $http, FBCreds, AuthFactory, $routeParams) {

  let getAllBoards = () => {
    return $q(function (resolve, reject) {
      AuthFactory.getUser().then(user => {
        $http.get(`${FBCreds.DBurl}/boards.json?orderBy="uid"&equalTo="${user.uid}"`)
          .then(({ data }) => {
            let keys = Object.keys(data);
            keys.forEach(key => data[key].id = key);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };

  let addBoard = (board) => {
    return $q(function (resolve, reject) {
      $http.post(`${FBCreds.DBurl}/boards.json`, JSON.stringify(board))
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let deleteBoard = (boardid) => {
    return $q(function (resolve, reject) {
      $http.delete(`${FBCreds.DBurl}/boards/${boardid}.json`)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let editBoard = (boardid, data) => {
    return $q(function (resolve, reject) {
      $http.patch(`${FBCreds.DBurl}/boards/${boardid}.json`)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return { getAllBoards, addBoard, deleteBoard, editBoard };
});
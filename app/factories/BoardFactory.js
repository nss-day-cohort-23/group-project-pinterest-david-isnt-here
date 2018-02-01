"use strict";

angular.module("PinterestApp").factory("BoardFactory", function ($q, $http, FBCreds) {

  // TODO: filter by uid
  let getBoardData = () => {
    return $q(function (resolve, reject) {
      $http.get(`${FBCreds.DBurl}/boards.json`)
        .then(
        (data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let addBoard = (board) => {
    return $q(function (resolve, reject) {
      $http.post(`${FBCreds.DBurl}/boards.json`, JSON.stringify(board))
        .then(
        (data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let deleteBoard = (key) => {
    return $q(function (resolve, reject) {
      $http.delete(`${FBCreds.DBurl}/boards/${key}.json`)
        .then(
        (data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let editBoard = (key, data) => {
    return $q(function (resolve, reject) {
      $http.patch(`${FBCreds.DBurl}/boards/${key}.json`)
        .then(
        (data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return { getBoardData, addBoard, deleteBoard, editBoard };
});
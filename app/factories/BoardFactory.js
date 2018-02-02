"use strict";

angular.module("PinterestApp").factory("BoardFactory", function ($q, $http, FBCreds) {

  // TODO: filter by uid
  let getBoardData = () => {
    return $q(function (resolve, reject) {
      $http.get(`${FBCreds.DBurl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
        .then(({data}) => {
          let keys = Object.keys(data);
          keys.forEach(key => data[key].id = key);
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
  return { getBoardData, addBoard, deleteBoard, editBoard };
});
"use strict";

angular.module("PinterestApp").factory("BoardFactory", function($q, $http, FBCreds){

    let getBoardData = () => {
        return $q(function(resolve, reject){
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
        return $q(function(resolve, reject){
            $http.post(`${FBCreds.DBurl}/boards.json`, JSON.stringify(board))
            .then (
                (data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let deleteBoard = () => {
        return $q(function(resolve, reject){
            $http.delete(`${FBCreds.DBurl}/boards.json`)
            .then (
                (data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let editBoard = () => {
        return $q(function(resolve, reject){
            $http.put(`${FBCreds.DBurl}/boards.json`)
            .then (
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
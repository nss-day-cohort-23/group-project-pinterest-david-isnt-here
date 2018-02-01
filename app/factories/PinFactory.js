"use strict";

angular.module("PinterestApp").factory("PinFactory", function ($q, $http, FBCreds) {

    let getPinData = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBCreds}pins.json`)
                .then(
                (data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let addPin = (pin) => {
        return $q(function (resolve, reject) {
            $http.post(`${FBCreds}pins.json`, JSON.stringify(pin))
                .then(
                (data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let deletePin = () => {
        return $q(function (resolve, reject) {
            $http.delete(`${FBCreds}pins.json`)
                .then(
                (data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let editPin = () => {
        return $q(function (resolve, reject) {
            $http.put(`${FBCreds}pins.json`)
                .then(
                (data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    return { getPinData, addPin, deletePin, editPin };
});
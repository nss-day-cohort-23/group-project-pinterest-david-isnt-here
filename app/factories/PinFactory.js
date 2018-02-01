"use strict";

angular.module("PinterestApp").factory("PinFactory", function ($q, $http, FBCreds) {

  // TODO: filter by uid
  let getPinData = () => {
    return $q(function (resolve, reject) {
      $http.get(`${FBCreds.DBurl}/pins.json`)
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
      $http.post(`${FBCreds.DBurl}/pins.json`, JSON.stringify(pin))
        .then(
        (data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let deletePin = (key) => {
    return $q(function (resolve, reject) {
      $http.delete(`${FBCreds.DBurl}/pins/${key}.json`)
        .then(
        (data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let editPin = (key, data) => {
    return $q(function (resolve, reject) {
      $http.patch(`${FBCreds.DBurl}/pins/${key}.json`)
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
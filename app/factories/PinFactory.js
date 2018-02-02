"use strict";

angular.module("PinterestApp").factory("PinFactory", function ($q, $http, FBCreds, $routeParams) {

  // filters the pins based on the boardid from routeparams
  let getAllPins = () => {
    return $q(function (resolve, reject) {
      $http.get(`${FBCreds.DBurl}/pins.json?orderBy="boardid"&equalTo="${$routeParams.bid}"`)
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

  let getOnePin = () => {
    return $q(function (resolve, reject) {
      $http.get(`${FBCreds.DBurl}/pins/${$routeParams.pid}.json`)
        .then((pinData) => {
          console.log('pinData in PinFactory',pinData);
          pinData.id = $routeParams.pid;
          resolve(pinData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let addPin = (newPin) => {
    return $q(function (resolve, reject) {
      $http.post(`${FBCreds.DBurl}/pins.json`, JSON.stringify(newPin))
        .then((newPinDataResponse) => {
          resolve(newPinDataResponse);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let deletePin = (pinId) => {
    return $q(function (resolve, reject) {
      $http.delete(`${FBCreds.DBurl}/pins/${pinId}.json`)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let editPin = (pinId, data) => {
    return $q(function (resolve, reject) {
      $http.patch(`${FBCreds.DBurl}/pins/${pinId}.json`)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return { getAllPins, addPin, deletePin, editPin, getOnePin };
});
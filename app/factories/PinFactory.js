"use strict";

angular.module("PinterestApp").factory("PinFactory", function ($q, $http, FBCreds) {

  let getAllPins = (bid) => {
    return $q(function (resolve, reject) {
      $http.get(`${FBCreds.DBurl}/pins.json?orderBy="boardid"&equalTo="${bid}"`)
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

  let getOnePin = (pid) => {
    return $q(function (resolve, reject) {
      $http.get(`${FBCreds.DBurl}/pins/${pid}.json`)
        .then(({data}) => {
          data.id = pid;
          resolve(data);
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

  let editPin = (pinObject) => {
    return $q(function (resolve, reject) {
      $http.patch(`${FBCreds.DBurl}/pins/${pinObject.id}.json`, JSON.stringify(pinObject))
        .then(({data}) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  let deleteBoardPins = bid => {
    return $q((resolve, reject) => {
      getAllPins(bid)
        .then(response => {
          let pinKeys = Object.keys(response);
          let deletePromises = pinKeys.map(key => {
            return deletePin(key);
          });
          Promise.all()
            .then(response => {
              resolve("all deleted");
            })
            .catch(err => resolve(err));
        })
        .catch(err => console.log());
    });
  };

  return { getAllPins, addPin, deletePin, editPin, getOnePin, deleteBoardPins };
});
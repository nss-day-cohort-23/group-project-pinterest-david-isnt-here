"use strict";

angular.module("PinterestApp").factory("AuthFactory", function ($q, $http, $rootScope, FBCreds) {
  let currentUserData = null;

  //Firebase: Return email, UID for user that is currently logged in.
  let getUser = () => {
    return $q((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject("No user");
        }
      });
    });
  };

  // Kills browser cookie with firebase credentials
  let logout = () => {
    return firebase.auth().signOut();
  };

  //Firebase: Use input credentials to authenticate user.
  let login = (credentials) => {
    return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
  };

  //Firebase: Register a new user with email and password
  let register = (user) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  };

  return { getUser, logout, register, login };

});

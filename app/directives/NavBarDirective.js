'use strict';

angular.module('PinterestApp')

.directive('davidIsntHere', function () {
   return {
     restrict: 'E',
     templateUrl: 'partials/NavBar.html',
    controller: 'NavBarCtrl',
   };
});
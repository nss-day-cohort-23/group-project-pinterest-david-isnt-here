'use strict';

angular.module('PinterestApp')

.directive('davidIsntHere', function () {
   return {
     restrict: 'E',
     templateUrl: 'app/navbar/navbar.html',
    controller: 'NavBarCtrl',
   };
});
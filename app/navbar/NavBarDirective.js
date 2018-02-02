'use strict';

angular.module('PinterestApp')

.directive('simpleNavbar', function () {
   return {
     restrict: 'E',
     templateUrl: 'app/navbar/navbar.html',
    controller: 'NavBarCtrl',
   };
});
'use strict'

angular.module('magazine.button.directive', [])
    .directive('magazineButton',
function(){
   return {
       restrict: 'E',
       replace: false,
       templateUrl: 'button/button.tpl.html',
       scope: {
           label: '@'
       },
       controller: 'ButtonCtrl',
       controllerAs: 'buttonCtrl',
       bindToController: true
   }
});
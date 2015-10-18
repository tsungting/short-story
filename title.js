'use strict'

angular.module('magazine.title', [
    'magazine.title.controller'
]);

angular.module('magazine.title.controller', [])
.controller('titleController', function(){
        var vm = this;
        var focusElement = '';

        vm.mouseOver = function(elementName){
            focusElement = elementName;
        };

        vm.mouseLeave = function(){
            focusElement = '';
        }

        vm.getVisibility = function(elementName){
            if (focusElement === elementName || focusElement === ''){
                return 'visible';
            }
            return 'hidden';
        }
    });
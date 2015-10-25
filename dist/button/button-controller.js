'use strict'

angular.module('magazine.button.controller', [])
.controller('ButtonCtrl', function($scope, $element){
    var vm = this;
    var arrowClass = '';
        function _getLabelArray(){
            return vm.label.split(' ');
        }

        function _getAllButLastWord(){
            var label = _getLabelArray();
            var allButLastWord = label.filter(function(word, index){
                return index < label.length - 1;
            }).join(' ');
            return allButLastWord;
        }

        vm.getNormalText = function (){
            return _getAllButLastWord();
        };

        vm.getHighlightText = function(){
            var labelArray = _getLabelArray();
            return labelArray[labelArray.length - 1];
        };

        vm.clicked = function(){
            arrowClass = 'activate';
        }

        vm.getArrowClass = function(){
            return arrowClass;
        }
    });
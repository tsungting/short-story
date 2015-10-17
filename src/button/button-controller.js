'use strict'

angular.module('magazine.button.controller', [])
.controller('ButtonCtrl', function(){
    var vm = this;

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
    });
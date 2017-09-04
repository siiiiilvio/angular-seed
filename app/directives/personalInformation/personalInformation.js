'use strict';

let personalInformationDirective = angular.module('directives.personalInformation', [])

personalInformationDirective.directive('personalInformation', [function(){
  return {
    restrict: 'EA',
    templateUrl: 'directives/personalInformation/personalInformation.html',
    controller: function($scope) {
      //console.log(silvioData);
    }
  };
}]);

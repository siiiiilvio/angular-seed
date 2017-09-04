'use strict';

let personalInformationDirective = angular.module('directives.personalInformation', [])

personalInformationDirective.directive('personalInformation', [function(){
  return {
    restrict: 'EA',
    templateUrl: 'directives/personalInformation/personalInformation.html',
    scope: { data: '=' },
    controller: function($scope) {
      console.log($scope);
      // logs $scope --> tu peux voir la propriété data dans la liste
      console.log($scope.data)
      // logs undefined --> wtf?
    }
  };
}]);

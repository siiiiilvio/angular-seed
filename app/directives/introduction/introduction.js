'use strict';

angular.module('directives.introduction', [])
  .directive('introduction', [function(){
    return {
      restrict: 'EA',
      templateUrl: 'directives/introduction/introduction.html'
    };
}]);

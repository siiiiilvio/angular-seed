'use strict';

let personalInformationDirective = angular.module('directives.personalInformation', [])

personalInformationDirective.directive('personalInformation', ['$log', function ($log) {
    return {
        restrict: 'EA',
        templateUrl: 'directives/personalInformation/personalInformation.html',

        scope: {
            personData: '='
        }

    };
}]);

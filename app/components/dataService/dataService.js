'use strict';

let dataServiceComponent = angular.module('components.dataService', [])

dataServiceComponent.controller('DataServiceController', ['$scope', '$http', function($scope, $http) {
  $http.get('data/silvio.json').success(function(data){
    $scope.data = data;
  });
}]);

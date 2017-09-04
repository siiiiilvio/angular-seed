'use strict';

let dataServiceComponent = angular.module('components.dataService', [])

dataServiceComponent.controller('DataServiceController', ['$scope', '$http','$log', function($scope, $http, $log) {
  var controller = this;
  $http.get('data/silvio.json').success(function(data){
    controller.silvioData = data;
    $log.info(data);
  });
}]);

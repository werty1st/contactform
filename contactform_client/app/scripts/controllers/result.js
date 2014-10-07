'use strict';

/**
 * @ngdoc function
 * @name contactform2App.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the contactform2App
 */
angular.module('contactform2App')
  .controller('ResultCtrl', function ($scope, mail) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.result = mail.getResult();
    $scope.id = mail.getId();

    if($scope.result){
    	$scope.note = "Vielen Dank.";
    } else {
    	$scope.note = "Entschuldigung";    	
    }
 

  });

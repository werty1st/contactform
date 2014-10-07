'use strict';

/**
 * @ngdoc function
 * @name contactform2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactform2App
 */
angular.module('contactform2App')
  .controller('MainCtrl',function ($scope, $window, mail) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.form = {"emailSent":false};
	

    $scope.sendMail = function sendMail(){
    	if ($scope.form.$invalid){
    		mail.setResult(false);
    	} else {
    		console.log($scope.user.name, $scope.user.email, $scope.user.message);
    		$scope.form.emailSent = true;
    		mail.setResult(true);
    		mail.setId("#IDXFZEHDKFIF");
    		$scope.greeter = "Vielen Dank.";
    		$window.location.href = '#/result';
    	}
    }
  });


//mailservice
//post message to couchdb
//nodescript monitor couchdb new mail
//mark mail sent on timestamp
//check mail.log if mail delivered
//clean old mails
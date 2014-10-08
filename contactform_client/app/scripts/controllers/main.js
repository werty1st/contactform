'use strict';

/**
 * @ngdoc function
 * @name contactform2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactform2App
 */
angular.module('contactform2App')
    .controller('MainCtrl',function ($scope, $window, mailService, $timeout) {
    
        $scope.user = {};
        //$scope.form = {"emailSent":false};
        $scope.form = {};
        $scope.form.sending = false;
    	



        $scope.sendMail = function sendMail(){
            console.log("clicked");

            if ($scope.form.sending || $scope.form.$invalid) return;

            $scope.form.sending = true;

            mailService.sendMail($scope.user)
                .success(function(data){
                    //$scope.form.sending = false;
                    console.log("success: ", data);
                    $scope.form.sending = false;                    
                })
                .error(function(data){
                    //$scope.form.sending = false;
                    console.log("error: ", data);
                    $scope.form.sending = false;                    
                });


        }
    });


//mailservice
//post message to couchdb
//nodescript monitor couchdb new mail
//mark mail sent on timestamp
//check mail.log if mail delivered
//clean old mails
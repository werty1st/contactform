'use strict';

/**
 * @ngdoc service
 * @name contactform2App.myService
 * @description
 * # myService
 * Service in the contactform2App.
 */
angular.module('contactform2App')
	.service('mailService', function($http) {
   
	    var myMailService = {};

	    myMailService.sendMail = function sendMail (msgO) {
	    	return $http.post("/m/post",msgO);
	    };

	    return myMailService;
	});

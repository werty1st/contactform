'use strict';

/**
 * @ngdoc overview
 * @name contactform2App
 * @description
 * # contactform2App
 *
 * Main module of the application.
 */
angular
  .module('contactform2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).factory('mail', function() {
    var result = false;
    var id = "";
    var myMailService = {};

    myMailService.setResult = function(msg) {
        result = msg;
    };
    myMailService.setId = function(msg) {
        id = msg;
    };

    myMailService.getId = function() {
        return id;
    };

    myMailService.getResult = function() {
        return result;
    };

    return myMailService;
});

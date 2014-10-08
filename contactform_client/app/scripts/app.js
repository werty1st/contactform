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
  });

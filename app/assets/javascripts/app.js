(function(){

  'use strict';

  angular
    .module('app', ['ui.router', 'templates', 'Devise', 'ngResource', 'ngMessages', 'infinite-scroll', 'ngFileUpload', 'angular.filter', 'ui.bootstrap'])
    .run(['Auth', function(Auth){
      Auth.currentUser()
    }])
}())

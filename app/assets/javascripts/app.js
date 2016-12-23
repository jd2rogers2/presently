(function(){

  'use strict';

  angular
    .module('app', ['templates', 'ui.router', 'Devise', 'ngResource', 'ngMessages', 'infinite-scroll', 'ngFileUpload', 'angular.filter', 'ui.bootstrap'])
    .run(['Auth', function(Auth){
      Auth.currentUser()
    }])
}())

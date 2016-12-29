(function(){

  'use strict';

  angular
    .module('app', ['ui.router', 'templates', 'Devise', 'ngResource', 'ngMessages', 'infinite-scroll', 'ngFileUpload'])
    .run(['Auth', function(Auth){
      Auth.currentUser()
    }])
}())

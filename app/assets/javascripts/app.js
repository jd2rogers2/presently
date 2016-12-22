(function(){

  'use strict';

  angular
    .module('app', ['ui.router', 'Devise', 'templates', 'ngResource', 'ngMessages', 'infinite-scroll', 'ngFileUpload'])
    .run(['Auth', function(Auth){
      Auth.currentUser()
    }])
}())

(function(){

  'use strict';

  angular
    .module('app', ['ui.router', 'Devise', 'templates', 'ngResource'])
    .run(['Auth', function(Auth){
      Auth.currentUser()
    }])

}())
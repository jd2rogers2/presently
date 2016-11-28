(function(){

  'use strict';

  angular
    .module('app', ['ui.router', 'Devise', 'templates', 'ngResource', 'ngMessages'])
    .run(['Auth', function(Auth){
      Auth.currentUser()
    }])

}())
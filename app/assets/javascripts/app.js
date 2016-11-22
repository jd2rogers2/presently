(function(){

  'use strict';

  angular
    .module('app', ['ui.router', 'ngCookies', 'Devise', 'templates', 'ngResource'])
    .run(['Auth', function(Auth){
      Auth.currentUser().then(function(user){
        console.log(user);
        console.log(Auth._currentUser);
      })
    }])

}())
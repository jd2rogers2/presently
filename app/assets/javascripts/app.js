(function(){

  'use strict';

  angular
    .module('app', ['ui.router', 'Devise', 'templates', 'ngResource', 'ngMessages', 'infinite-scroll', 'ng-file-upload'])
    .run(['Auth', function(Auth){
      Auth.currentUser()
    }])
}())
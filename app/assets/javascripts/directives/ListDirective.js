(function(){
  'use strict';

  function listDirective(){
    return {
      templateUrl: 'views/ListTemplate.html',
      controller: function(){
        this.passvalue; this.list = this.passvalue;
      },
      controllerAs: 'listDirCtrl',
      bindToController: {
        passvalue: '='
      }
    }
  }

  angular
    .module('app')
    .directive('list', listDirective)
}())
(function(){
  'use strict';

  function ItemController(){
    var itemCtrl = this;
  }

  // ItemController.$inject = ['$scope']

  angular
    .module('app')
    .controller('ItemController', ItemController)

}())
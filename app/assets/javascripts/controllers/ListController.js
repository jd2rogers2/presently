(function(){

  'use strict';

  function ListController(list){
    var listCtrl = this;
    listCtrl.list = list;
  }

  ListController.$inject = ['$scope']

  angular
    .module('app')
    .controller('ListController', ListController)

}())
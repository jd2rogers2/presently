(function(){

  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider.state('login', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'HomeController as homeCtrl'
      })

      $stateProvider
        .state('userFriends', {
          url: '/users/:id/friends',
          templateUrl: 'views/friends.html',
          controller: 'UserController as userCtrl',
          resolve: {
            user: function(UserService, $stateParams){
              return UserService.getUser($stateParams.id).then(function(data){
                return data.data;
              })
            }
          }
        })
        .state('userPurchases', {
          url: '/users/:id/purchases',
          templateUrl: 'views/purchases.html',
          controller: 'UserController as userCtrl',
          resolve: {
            user: function(UserService, $stateParams){
              return UserService.getUser($stateParams.id).then(function(data){
                return data.data;
              })
            }
          }
        })
        .state('userCalendar', {
          url: '/users/:id/calendar',
          templateUrl: 'views/calendar.html',
          controller: 'UserController as userCtrl',
          resolve: {
            user: function(UserService, $stateParams){
              return UserService.getUser($stateParams.id).then(function(data){
                return data.data;
              })
            }
          }
        })
        .state('userProfile', {
          url: '/users/:id/profile',
          templateUrl: 'views/profile.html',
          controller: 'UserController as userCtrl',
          resolve: {
            user: function(UserService, $stateParams){
              return UserService.getUser($stateParams.id).then(function(data){
                return data.data;
              })
            }
          }
        })

        $stateProvider
          .state('item', {
            url: '/items/:id',
            templateUrl: 'views/item.html',
            controller: 'ItemController as itemCtrl',
            resolve: {
              item: function(ItemService, $stateParams){
                return ItemService.getItem($stateParams.id).then(function(data){
                  // debugger;
                  return data.data;
                })
              }
            }
          })

        $stateProvider
          .state('list', {
            url: '/lists/:id',
            templateUrl: 'views/list.html',
            controller: 'ListController as listCtrl',
            resolve: {
              list: function(ListService, $stateParams){
                debugger;
                return ListService.getList($stateParams.id).then(function(data){
                  return data.data;
                })
              }
            }
          })

      $urlRouterProvider.otherwise('/')
    })

}())
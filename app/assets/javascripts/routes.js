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
            user: function(UserFactory, $stateParams){
              return UserFactory.get({id: $stateParams.id}, function(data){
                return data;
              });
            }
          }
        })
        .state('userPurchases', {
          url: '/users/:id/purchases',
          templateUrl: 'views/purchases.html',
          controller: 'UserController as userCtrl',
          resolve: {
            user: function(UserFactory, $stateParams){
              return UserFactory.get({id: $stateParams.id}, function(data){
                return data;
              })
            }
          }
        })
        .state('userCalendar', {
          url: '/users/:id/calendar',
          templateUrl: 'views/calendar.html',
          controller: 'UserController as userCtrl',
          resolve: {
            user: function(UserFactory, $stateParams){
              return UserFactory.get({id: $stateParams.id}, function(data){
                return data;
              })
            }
          }
        })
        .state('userProfile', {
          url: '/users/:id/profile',
          templateUrl: 'views/profile.html',
          controller: 'UserController as userCtrl',
          resolve: {
            user: function(UserFactory, $stateParams){
              return UserFactory.get({id: $stateParams.id}, function(data){
                return data;
              })
            }
          }
        })
        .state('userList', {
          url: '/users/:id/list',
          templateUrl: 'views/list.html',
          controller: 'UserController as userCtrl',
          resolve: {
            user: function(UserFactory, $stateParams){
              UserFactory.get({id: $stateParams.id}, function(data){
                return data;
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
              item: function(ItemFactory, $stateParams){
                return ItemFactory.get({id: $stateParams.id}, function(data){
                  return data;
                })
              }
            }
          })

      $urlRouterProvider.otherwise('/')
    })

}())
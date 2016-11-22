(function(){

  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'views/login.html',
          controller: 'LoginController as loginCtrl',
          onEnter: function($state, Auth){
            if (Auth._currentUser){
              Auth.currentUser().then(function(data){
                $state.go('userList', {id: data.id})
              })
            }
          }
        })

      $stateProvider
        .state('userFriends', {
          url: '/users/:id/friends',
          templateUrl: 'views/friends.html',
          controller: 'UserController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login');
            }
          }
        })
        .state('userPurchases', {
          url: '/users/:id/purchases',
          templateUrl: 'views/purchases.html',
          controller: 'UserController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })
        .state('userCalendar', {
          url: '/users/:id/calendar',
          templateUrl: 'views/calendar.html',
          controller: 'UserController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })
        .state('userProfile', {
          url: '/users/:id/profile',
          templateUrl: 'views/profile.html',
          controller: 'UserController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })
        .state('userList', {
          url: '/users/:id/list',
          templateUrl: 'views/list.html',
          controller: 'UserController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })

        $stateProvider
          .state('itemShow', {
            url: '/items/:id',
            templateUrl: 'views/items/show.html',
            controller: 'ItemController as itemCtrl',
            onEnter: function($state, Auth){
              if (!Auth._currentUser){
                $state.go('login')
              }
            }
          })
          .state('itemEdit', {
            url: '/items/:id/edit',
            templateUrl: 'views/items/edit.html',
            controller: 'ItemController as itemCtrl',
            onEnter: function($state, Auth){
              if (!Auth._currentUser){
                $state.go('login')
              }
            }
          })

      $urlRouterProvider.otherwise('/')
    })

}())
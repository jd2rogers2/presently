(function(){

  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'views/login.html',
          controller: 'loginController as loginCtrl',
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
          controller: 'userController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login');
            }
          }
        })
        .state('userPurchases', {
          url: '/users/:id/purchases',
          templateUrl: 'views/purchases.html',
          controller: 'userController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })
        .state('userCalendar', {
          url: '/users/:id/calendar',
          templateUrl: 'views/calendar.html',
          controller: 'userController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })
        .state('userProfile', {
          url: '/users/:id/profile',
          templateUrl: 'views/profile.html',
          controller: 'userController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })
        .state('userList', {
          url: '/users/:id/list',
          templateUrl: 'views/list.html',
          controller: 'userController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })

        $stateProvider
          .state('itemEdit', {
            url: '/items/:id/edit',
            templateUrl: 'views/items/edit.html',
            controller: 'itemController as itemCtrl',
            onEnter: function($state, Auth){
              if (!Auth._currentUser){
                $state.go('login')
              }
            }
          })
          .state('itemShow', {
            url: '/items/:id',
            templateUrl: 'views/items/show.html',
            controller: 'itemController as itemCtrl',
            onEnter: function($state, Auth){
              if (!Auth._currentUser){
                $state.go('login')
              }
            }
          })

      $urlRouterProvider.otherwise('/')
    })

}())
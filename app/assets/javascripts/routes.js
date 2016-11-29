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
                $state.go('list', {id: data.id})
              })
            }
          }
        })

      $stateProvider
        .state('userPurchases', {
          url: '/users/:id/purchases',
          templateUrl: 'views/purchases.html',
          controller: 'purchaseController as purchaseCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })
        .state('userEvents', {
          url: '/users/:id/events',
          templateUrl: 'views/events.html',
          controller: 'eventController as eventCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })
        .state('userProfile', {
          url: '/users/:id',
          templateUrl: 'views/profile.html',
          controller: 'userController as userCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login')
            }
          }
        })

      $stateProvider
        .state('userFriends', {
          url: '/users/:id/friends',
          templateUrl: 'views/friends.html',
          controller: 'friendshipController as friendshipCtrl',
          onEnter: function($state, Auth){
            if (!Auth._currentUser){
              $state.go('login');
            }
          }
        })

      $stateProvider
        .state('list', {
          url: '/list/:id',
          templateUrl: 'views/list.html',
          controller: 'listController as listCtrl',
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
(function(){
  'use strict';

  function alreadyFriendFilter(){
    return function(array, user){
      var final_answer = false;
      array.forEach(function(friend){
        if (friend.id == user.id) {
          final_answer = true;
        }
      })
      return final_answer;
    }
  }

  angular
    .module('app')
    .filter('alreadyFriendFilter', alreadyFriendFilter);
}())
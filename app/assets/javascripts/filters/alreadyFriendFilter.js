(function(){
  'use strict';

  function alreadyFriendFilter(){
    return function(currentUser, user){
      var array = currentUser.friends
      var final_answer = false;
      array.forEach(function(friend){
        if (user.id == friend.id) {
          final_answer = true;
        } else if (user.id == currentUser.id) {
          // cannot friend yourself
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
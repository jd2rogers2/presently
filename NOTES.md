----- current -----
+ event page (friend's bdays/events, holidays)
+ can upload pics for items and users
+ error messages
+ edit profile functionality
+ add notes and price attrs to items
+ ngMessages
+ get rid of all uses of $scope?

+ error messages upon bad login in LoginController.js
+ users on destroy deletes list and items
+ users have to accept friend request. Friendships table has status column
+ may need to load @list in friendships#create if added from a different user's profile, or just don't allow that?

from item_controller.rb
        # rendering list for when item is purchased on another user's page
        # and from item edit page autoredirect back to list
        # unpurchase button from purcahses page is redirecting
        # to your list because we could only render list if we passed 
        # a key in params and made an if statement here


----- errors -----
+ logout on navbar.html only working on second click??
+ adding/editing items works but only shows upon refresh


----- potential features -----
+ items have rank (what you want most)
+ delete item? what if it's already purchased, not deleting can also stink for user
+ check out ngMessages
+ user can upload their picture
  http://alessandrosantamaria.blogspot.com/2015/11/file-upload-in-angularjs-with-ng-file.html


----- questions -----
+ line 6 app controller.rb, skip needed/wanted?
+ .db file gone
+ .run in app.js, how does this work?
+ why activate vs resolve?
  refactor after graduation to use resolves?


----- differences with model app -----
# in applicationController.rb  
  def default_serializer_options
    {root: false}
  end 
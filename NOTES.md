----- current -----
+ add button friend for other users
+ purchases page
+ calendar page

+ error messages upon bad login in LoginController.js
+ edit profile functionality
  <button>edit profile</button>
+ users on destroy deletes list and items
+ add notes and price attrs to items
+ users have to accept friend request. Friendships table has status column


----- errors -----
+ logout on navbar.html only working on second click??
+ adding/editing items works but only shows upon refresh


----- potential features -----
+ items have rank (what you want most)
+ delete item? what if it's already purchased, not deleting can also stink for user
+ check out ngMessages
+ user can upload their picture
  http://alessandrosantamaria.blogspot.com/2015/11/file-upload-in-angularjs-with-ng-file.html
+ google calendar
+ oAuth


----- questions -----
+ line 6 app controller.rb, skip needed/wanted?
+ .db file gone
+ .run in app.js, how does this work?
+ why activate vs resolve?


----- differences with model app -----
# in applicationController.rb  
  def default_serializer_options
    {root: false}
  end 
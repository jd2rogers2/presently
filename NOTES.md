----- current -----
*** item create form not showing up
*** edit items in list page or something like that
====================================================
+ can upload pics for items and users
  http://alessandrosantamaria.blogspot.com/2015/11/file-upload-in-angularjs-with-ng-file.html
+ edit profile functionality
+ get rid of all uses of $scope?
+ view/edit events?

+ users on destroy deletes list and items
+ may need to load @list in friendships#create if added from a different user's profile, or just don't allow that?

+ from item_controller.rb
        # rendering list for when item is purchased on another user's page
        # and from item edit page autoredirect back to list
        # unpurchase button from purcahses page is redirecting
        # to your list because we could only render list if we passed 
        # a key in params and made an if statement here


----- issues -----
+ adding/editing/purchasing items, friending works but only shows upon refresh. `$state.go($state.current etc.)` not working
+ loginController.register() not passing aboutme and bday to new users


----- potential features -----
+ items have rank (what you want most)
+ delete item? what if it's already purchased, not deleting can also stink for user
+ make recurring events automatic


----- questions -----
+ line 6 app controller.rb, skip needed/wanted?
+ .run in app.js, how does this work?
+ why activate vs resolve?
  refactor after graduation to use resolves?


----- differences with model app -----
# in applicationController.rb  
  def default_serializer_options
    {root: false}
  end 
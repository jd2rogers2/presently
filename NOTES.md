----- current -----
+ testing
back button on item view always goes to item's list
not good when you're viewing someone else's list
do we even need if's in ctrl.rbs? check all ctrl.js
orderby in all repeats?
+ delete events
+ can upload pics for items and users
  http://alessandrosantamaria.blogspot.com/2015/11/file-upload-in-angularjs-with-ng-file.html
+ edit profile functionality

+ from item_controller.rb
        # rendering list for when item is purchased on another user's page
        # and from item edit page autoredirect back to list
        # unpurchase button from purcahses page is redirecting
        # to your list because we could only render list if we passed 
        # a key in params and made an if statement here


----- issues -----


----- potential features -----
+ items have rank (what you want most)
+ delete item? what if it's already purchased, not deleting can also stink for user
+ make recurring events automatic
+ google calendar api
+ delete your account
  users on destroy deletes list and items



----- questions -----
+ line 6 app controller.rb, skip needed/wanted?
+ .run in app.js, how does this work?
+ why activate vs resolve?
  because updating dom on factory response?
+ i'll be working on this/other apps to try to get hired
  what kind of app would get me hired?
  examples?
  requirements? (i.e. features of the app)
+ unpurchase button acting really weird on purchases view


----- differences with model app -----
# in applicationController.rb  
  def default_serializer_options
    {root: false}
  end 
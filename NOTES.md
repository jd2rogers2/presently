----- current -----
+ $state.go($state.current, {}, {reload: true}); 
  use for refreshing page upon item create on list.html
+ error messages upon bad login in LoginController.js
+ edit profile functionality
  <button>edit profile</button>


----- errors -----




----- potential features -----
+ check out ngMessages
+ change all routes with :id to :username or :name?
+ user can upload their picture
  http://alessandrosantamaria.blogspot.com/2015/11/file-upload-in-angularjs-with-ng-file.html
+ google calendar
+ oAuth


----- questions -----
+ line 6 app controller.rb, skip needed/wanted?
+ .db file gone


----- differences with model app -----
# in applicationController.rb
  def angular
    render 'layouts/application'
  end
  
  def default_serializer_options
    {root: false}
  end 
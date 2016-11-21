Rails.application.routes.draw do
  devise_for :users
  
  namespace :api, defaults: {format: :json} do 
    namespace :v1 do
      resources :lists, only: [:create, :show, :destroy, :index]
      resources :items, only: [:create, :show, :destroy, :index, :update]
      resources :friendships, only: [:create, :show, :destroy, :index]
      resources :users, only: [:show, :index]
    end
  end

  root to: 'application#index'
end
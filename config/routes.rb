Rails.application.routes.draw do
  devise_for :users
  # resources :users, only: [:create, :show, :destroy, :index, :update]
  resources :lists, only: [:create, :show, :destroy, :index, :update]
  resources :items, only: [:create, :show, :destroy, :index, :update]
  resources :friendships, only: [:create, :show, :destroy, :index]
  resources :users, only: [:show, :update]
end
module Api
  module V1
    class FriendshipsController < ApplicationController
      before_action :authenticate_user!, only: [:create, :update, :destroy]
      
      def create
        @friendship = Friendship.create(friendship_params)
        render json: @friendship
      end

      def show
        set_friendship
        render json: @friendship
      end

      def index
        @friendships = Friendship.all
        render json: @friendships
      end

      def destroy
        set_friendship
        @friendship.destroy
        @friendships = Friendship.all
        render json: @friendships
      end

      private
      def set_friendship
        @item = Friendship.find_by(id: params[:id])
      end

      def friendship_params
        params.require(:friendships).permit(:id, :user_id, :friend_id)
      end
    end
  end
end

module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!, only: [:index]

      def show
        set_user
        render json: @user
      end

      def index
        @users = User.all
        render json: @users
      end

      def update
        set_user
        @user.update(user_params)
        render json: @user
      end

      private
      def set_user
        @user = User.find_by(id: params[:id])
      end

      def user_params
        params.require(:users).permit(:id, :username, :password, :bday, :aboutme, :image, :email)
      end
    end
  end
end
module Api
  module V1
    class ListsController < ApplicationController
      before_action :authenticate_user!, only: [:create, :update, :destroy]

      def create
        @list = List.create(list_params)
        render json: @list
      end

      def update
        set_list
        @list.update(list_params)
        render json: @list
      end

      def show
        set_list
        render json: @list.to_json(include: [:user, items: {include: :purchaser}])
      end

      def index
        @lists = List.all
        render json: @lists
      end

      def destroy
        set_list
        @list.destroy
        @lists = List.all
        render json: @lists
      end

      private
      def set_list
        @list = List.find_by(id: params[:id])
      end

      def list_params
        params.require(:lists).permit(:id, :user_id)
      end
    end
  end
end
module Api
  module V1
    class ItemsController < ApplicationController
      before_action :authenticate_user!, only: [:create, :update, :destroy]

      def create
        @item = Item.create(item_params)
        @list = List.find_by(id: @item.list_id)
        # redirect_to list_path(@item.list_id)
        render json: @list
      end

      def update
        set_item
        @item.update(item_params)
        @list = List.find_by(id: @item.list_id)
        # rendering list for when item is purchased on another user's page
        # and from item edit page autoredirect back to list
        # unpurchase button from purcahses page is redirecting
        # to your list because we could only render list if we passed 
        # a key in params and made an if statement here
        # redirect_to item_path(@item)
        render json: @list
      end

      def show
        set_item
        render json: @item.to_json(include: [:purchaser, list: {include: :user}])
      end

      def index
        @items = Item.all
        render json: @items
      end

      def destroy
        set_item
        @list = List.find_by(id: @item.list_id)
        @item.destroy
        render json: @list
      end

      private
      def set_item
        @item = Item.find_by(id: params[:id])
      end

      def item_params
        params.require(:items).permit(:id, :name, :url, :purchaser_id, :list_id, :notes, :price)
      end
    end
  end
end
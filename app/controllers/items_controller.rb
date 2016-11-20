class ItemsController < ApplicationController
  # before_action :authenticate_user!, only: [:create, :update, :destroy]
  skip_before_filter  :verify_authenticity_token

  def create
    @item = Item.create(item_params)
    binding.pry
    redirect_to list_path(@item.list_id)
  end

  def update
    set_item
    @item.update(item_params)
    redirect_to item_path(@item)
  end

  def show
    set_item
    respond_to do |format|
      format.json {render json: @item}
    end
  end

  def index
    @items = Item.all
    respond_to do |format|
      format.json {render json: @items}
    end
  end

  def destroy
    set_item
    @item.destroy
    redirect_to items_path
  end

  private
  def set_item
    @item = Item.find_by(id: params[:id])
  end

  def item_params
    params.require(:items).permit(:id, :name, :url, :purchaser_id, :list_id)
  end
end

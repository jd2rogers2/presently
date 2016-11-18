class ListsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def create
    @list = List.create(list_params)
    redirect_to list_path(@list)
  end

  def update
    set_list
    redirect_to list_path(@list)
  end

  def show
    set_list
    respond_to do |format|
      format.json {render json: @list}
    end
  end

  def index
    @lists = List.all
    respond_to do |format|
      format.json {render json: @lists}
    end
  end

  def destroy
    set_list
    @list.destroy
    redirect_to lists_path
  end

  private
  def set_list
    @list = List.find_by(id: params[:id])
  end

  def list_params
    params.require(:lists).permit(:id, :user_id)
  end
end

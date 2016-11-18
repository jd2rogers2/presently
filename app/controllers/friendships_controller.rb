class FriendshipsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
  
  def create
    @friendship = Friendship.create(friendship_params)
    redirect_to friendship_path(@friendship)
  end

  def show
    set_friendship
    respond_to do |format|
      format.json {render json: @friendship}
    end
  end

  def index
    @friendships = Friendship.all
    respond_to do |format|
      format.json {render json: @friendships}
    end
  end

  def destroy
    set_friendship
    @friendship.destroy
    redirect_to friendships_path
  end

  private
  def set_friendship
    @item = Friendship.find_by(id: params[:id])
  end

  def friendship_params
    params.require(:friendships).permit(:id, :user_id, :friend_id)
  end
end

class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:update, :destroy]

  def update
    set_user
    redirect_to user_path(@user)
  end

  def show
    set_user
    respond_to do |format|
      format.json {render json: {user: @user}}
    end
  end

  def index
    @users = User.all
    respond_to do |format|
      format.json {render json: {users: @users}}
    end
  end

  private
  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:users).permit(:id, :username, :password, :bday, :aboutme)
  end
end

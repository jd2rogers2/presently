class UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    redirect_to user_path(@user)
  end

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

  def destroy
    set_user
    @user.destroy
    redirect_to users_path
  end

  private
  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:users).permit(:id, :username, :password, :bday, :aboutme)
  end
end

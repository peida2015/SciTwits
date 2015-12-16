class UsersController < ApplicationController
  def new

  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "users/show.html.erb"
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_url
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

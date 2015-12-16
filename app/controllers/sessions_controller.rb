class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      login(user)
      render "static_pages/root"
    else
      flash[:errors] = ["Username/Password is not correct"]
      redirect_to new_sessions_url
    end
  end

  def destroy
    logout
    redirect_to new_sessions_url
  end

end

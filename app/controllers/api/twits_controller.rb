class Api::TwitsController < ApplicationController
  def index
    @twits = Project.find(params[:project_id]).twits.includes(:user)
    render :index
  end

  def create
    # debugger
    params[:twit].delete_if {|key,_| !["body", "project_id"].include?(key)}
    @twit = current_user.twits.new(twit_params)
    if @twit.save
      render :show
    # else
    #   render :json @twit.errors
    end
  end

  def show
    @twit = Twit.find(params[:id])
    render :show
  end

  def destroy
    @twit = Twit.find(params[:id])
    @twit.destroy
    @twits = Project.find(@twit.project_id).twits
    render :index
  end

  private
  def twit_params
    params.require(:twit).permit(:body, :project_id)
  end
end

class Api::FollowsController < ApplicationController
  before_action only: :create do
    @follow = Follow.find_by_Ids(follow_params)
    render :show unless @follow.nil?
  end


  def index
    @follows = Follow.all
    render :index
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    # else
    #   render :json @follow.errors
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    @follows = Follow.all
    render :index
  end

  private
  def follow_params
    params.require(:follow).permit(:project_id, :user_id)
  end
end

class Api::MediaController < ApplicationController

  def create
    @medium = Medium.new(medium_params)
    if @medium.save
      render :show
    else
      render :json @medium.errors
    end
  end

  def destroy
    @medium = find(params[:id])
    render :show
  end

  private
  def medium_params
    params.require(:medium).permit(:url, :type, :project_id)
  end
end

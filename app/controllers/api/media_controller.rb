class Api::MediaController < ApplicationController

  def index
    @media = Project.find(params[:project_id]).media
    render :index
  end

  def create
    # debugger
    params[:medium].delete_if {|key,_| !["link", "medium_type", "project_id"].include?(key)}
    @medium = Medium.new(medium_params)
    if @medium.save
      render :show
    else
      render json: {errors: @medium.errors}
    end
  end

  def show
    @medium = Medium.find(params[:id])
    render :show
  end

  def destroy
    @medium = Medium.find(params[:id])
    render :show
  end

  private
  def medium_params
    params.require(:medium).permit(:link, :medium_type, :project_id)
  end
end

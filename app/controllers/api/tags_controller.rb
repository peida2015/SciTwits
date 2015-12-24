class Api::TagsController < ApplicationController
  before_action only: :create do
    @tag = Tag.find_by_name(params[:tag][:name].downcase)
    render :show unless @tag.nil?
  end

  def index
    @tags = Tag.all
    render :index
  end

  def create
    # debugger
    # params[:tag].delete_if {|key,_| !["body", "project_id"].include?(key)}
    tag_params[:name].downcase!
    # debugger
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    # else
    #   render :json @tag.errors
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    @tags = Tag.all
    render :index
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end

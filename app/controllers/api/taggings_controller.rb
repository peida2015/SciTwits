class Api::TaggingsController < ApplicationController
    before_action only: :create do
      @tagging = Tagging.find_by_Ids(tagging_params)
      render :show unless @tagging.nil?
    end


    def index
      @taggings = Tagging.all
      render :index
    end

    def create
      # debugger
      # params[:tagging].delete_if {|key,_| !["body", "project_id"].include?(key)}

      @tagging = Tagging.new(tagging_params)
      if @tagging.save
        render :show
      # else
      #   render :json @tagging.errors
      end
    end

    def destroy
      @tagging = Tagging.find(params[:id])
      @tagging.destroy
      @taggings = Tagging.all
      render :index
    end

    private
    def tagging_params
      params.require(:tagging).permit(:project_id, :tag_id)
    end

end

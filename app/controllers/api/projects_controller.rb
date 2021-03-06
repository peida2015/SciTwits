class Api::ProjectsController < ApplicationController
  before_action :set_project, only: [:update, :destroy, :show]

  # GET /projects
  # GET /projects.json
  def index
    if params[:user_id]
      @projects = User.find(params[:user_id]).followed_projects.includes(:owner)
    elsif params[:tag_id]
      @projects = Tag.find(params[:tag_id]).projects.includes(:owner)
    else
      @projects = @projects = Project.all.includes(:owner)
    end

    render :index
  end

  def show
    render :show
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = current_user.projects.new(project_params)
    if @project.save
      render :show
    else
      render json: { errors: @project.errors }
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    if @project.update(project_params)
      render :show, status: :ok
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    @projects = Project.all
    render :index
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:title, :description, :owner_id, :field_id, :significance, :subfield)
    end
end

class Tagging < ActiveRecord::Base
  validates :project_id, :tag_id, presence: true
  validates :project_id, uniqueness: {scope: :tag_id}

  belongs_to :tag
  belongs_to :project

  def Tagging.find_by_Ids(params)
    tagging = Tagging.where(project_id: params[:project_id],
              tag_id: params[:tag_id])
    tagging.empty? ? nil : tagging
  end
end

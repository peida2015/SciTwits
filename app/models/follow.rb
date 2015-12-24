class Follow < ActiveRecord::Base
  validates :project_id, :user_id, presence: true
  validates :project_id, uniqueness: {scope: :user_id}

  belongs_to :project
  belongs_to :user

  def Follow.find_by_Ids(params)
    follow = Follow.where(project_id: params[:project_id],
              user_id: params[:user_id])
    follow.empty? ? nil : follow.first
  end
end

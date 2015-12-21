class Medium < ActiveRecord::Base
  validates :link, :medium_type, :project_id, presence: true
  belongs_to :project
end

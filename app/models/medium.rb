class Medium < ActiveRecord::Base
  validates :link, :type, :project_id, presence: true
  belongs_to :project
end

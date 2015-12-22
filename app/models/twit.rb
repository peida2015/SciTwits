class Twit < ActiveRecord::Base
  validates :body, :project_id, :user_id, presence: true
  validates :body, length: { maximum: 150 }

  belongs_to :project
  belongs_to :user
end

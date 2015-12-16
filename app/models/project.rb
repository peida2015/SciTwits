class Project < ActiveRecord::Base
  validates :title, :description, :field_id, :owner_id, :significance, presence: true
  validates :significance, length: { maximum: 1000 }
  belongs_to :user
  
end

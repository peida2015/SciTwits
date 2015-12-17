class Project < ActiveRecord::Base
  validates :title, :description, :owner_id, presence: true
  validates :significance, length: { maximum: 1000 }

  belongs_to :owner,
      class_name: "User",
      primary_key: :id,
      foreign_key: :owner_id

end

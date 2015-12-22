class Project < ActiveRecord::Base
  validates :title, :description, :owner_id, presence: true
  validates :significance, length: { maximum: 1000 }

  has_many :media, dependent: :destroy
  has_many :twits, dependent: :destroy
  belongs_to :owner,
      class_name: "User",
      primary_key: :id,
      foreign_key: :owner_id

end

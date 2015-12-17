class User < ActiveRecord::Base
  attr_reader :password
  validates :password_digest, :username, :session_token, presence: true
  validates :password, length: { minimum: 7, allow_nil: true }
  validates :session_token, uniqueness:true
  validates :username, uniqueness: true

  has_many :projects

  after_initialize :ensure_token

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?

    user.is_password?(password) ? user : nil
  end

  def reset_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end

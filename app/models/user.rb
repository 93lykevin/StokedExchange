class User < ApplicationRecord
    # SPIRE
    validates :username, presence: {message: 'error'}, uniqueness: true
    validates :password_digest, presence: { message: 'Password can\'t be blank'}
    validates :first_name, presence: {message: 'error'};
    validates :last_name, presence: {message: 'error'}
    validates :email, presence: {message: 'error'}
    validates :password, length: {minimum: 1, allow_nil: true, message: 'error'}
    validates :session_token, presence: true, uniqueness: true

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :following_lists,
    foreign_key: :user_id,
    class_name: :FollowingList

    has_many :product_listings,
    foreign_key: :seller_id,
    class_name: :ProductListing

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
        nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end

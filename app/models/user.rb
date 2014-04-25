class User < ActiveRecord::Base
  attr_accessible :name, :oauth_expires_at, :oauth_token,
    :oauth_refresh_token, :provider, :uid
end

require 'google/omniauth'

OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider OmniAuth::Strategies::Google, '674771599264.apps.googleusercontent.com',
    '7eCGkk5N3A1JaKr4iidK-EBJ',
    scope: [
      'email',
      'profile',
      'https://www.googleapis.com/auth/plus.me',
      'https://www.googleapis.com/auth/plus.stream.write'
    ],
    skip_info: false
end

OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '674771599264.apps.googleusercontent.com',
    '7eCGkk5N3A1JaKr4iidK-EBJ',
    { scope: 'plus.stream.read, plus.stream.write',
      client_options:
        { ssl: { ca_file: Rails.root.join("cacert.pem").to_s } } }
end

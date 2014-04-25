require 'google/api_client/client_secrets'

CLIENT_SECRETS = Google::APIClient::ClientSecrets.load(Rails.root.join('config'))

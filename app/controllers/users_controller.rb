require 'google/api_client'

class UsersController < ApplicationController
  before_filter :load_user, only: :show

  def index
  end

  def create
    client = Google::APIClient.new(application_name: 'Demo App', application_version: '1.0')
    client.authorization.client_id = CLIENT_SECRETS.client_id
    client.authorization.client_secret = CLIENT_SECRETS.client_secret
    client.authorization.code = params[:code]
    client.authorization.redirect_uri = "postmessage"

    user_data = client.authorization.fetch_access_token!

    @user = User.new.tap do |user|
      user.oauth_token = user_data['access_token']
      user.oauth_refresh_token = user_data['refresh_token']
      user.save!
    end

    redirect_to users_path, notice: 'User saved'
  end

  def show
    client = Google::APIClient.new(application_name: 'Ruby Google+ sample',
                              application_version: '1.0.0')
    plus_api = client.discovered_api('plus', 'v1')

    authorization = CLIENT_SECRETS.to_authorization
    authorization.update_token!(access_token: @user.oauth_token,
      refresh_token: @user.oauth_refresh_token)

    results = client.execute(
      api_method: plus_api.people.get,
      parameters: {'userId' => 'me'},
      authorization: authorization
    )

    @data = results.data
  end

  def load_user
    @user = User.find(params[:id])
  end
end

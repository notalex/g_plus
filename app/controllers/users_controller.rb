class UsersController < ApplicationController
  before_filter :load_user, only: :show

  def index
  end

  def create
    @user = User.new.tap do |user|
      user.oauth_token = env['omniauth.auth']['credentials']['access_token']
      user.oauth_refresh_token = env['omniauth.auth']['credentials']['refresh_token']
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

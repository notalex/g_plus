GPlus::Application.routes.draw do
  root to: 'users#index'

  resources :users, except: [:create]
  post 'get_refresh_token' => 'users#get_refresh_token'

  get 'auth/:provider/callback' => 'users#create'
end

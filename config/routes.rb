GPlus::Application.routes.draw do
  root to: 'users#index'

  resources :users, except: [:create]

  get 'auth/:provider/callback' => 'users#create'
end

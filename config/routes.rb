Rails.application.routes.draw do
  resources :favorites
  resources :foods

  post '/login', to: 'auth#create'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "auth#destroy"

  
  # Defines the root path route ("/")
  # root "articles#index"
end

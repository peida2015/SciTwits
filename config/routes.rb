Rails.application.routes.draw do
  namespace :api, default: { format: :json} do
    resources :projects, only:[:create, :index, :destroy, :update]
  end

  resource :sessions, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]
  root to: 'users#new'
end

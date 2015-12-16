Rails.application.routes.draw do
  namespace :api, defaults: { format: :json} do
    resources :projects, only:[:create, :index, :destroy, :update, :show]
  end

  resource :sessions, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]
  root to: 'users#new'
end

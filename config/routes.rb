Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index] 
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :bookings, only: [:index, :update, :create, :destroy, :show]
    resources :reviews, only: [:show, :create, :update, :destroy] 
  end

end

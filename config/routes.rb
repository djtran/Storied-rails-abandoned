Rails.application.routes.draw do

  resources :big_picture
<<<<<<< HEAD
  # get     #index - list of all big pictures
  # get     #new - form for create object
  # post    #create - actual request
  # get     #show(id) - show object?
  # get     #edit(id) - form to edit object
  # put     #update(id) - actual request
  # delete  #destroy(id)- delete specific

  get 'app/index'

  get 'graph/index'

=======
    get '/big_picture/new', to: 'big_picture#create'

>>>>>>> preliminary controller, create not routed
  root 'app#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

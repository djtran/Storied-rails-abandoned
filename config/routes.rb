Rails.application.routes.draw do

  resources :big_picture
  # get     #index - list of all big pictures
  # get     #new - form for create object
  # post    #create - actual request
  # get     #show(id) - show object?
  # get     #edit(id) - form to edit object
  # put     #update(id) - actual request
  # delete  #destroy(id)- delete specific

  # POST to /logs and the logger will write timestamped output to a logfile.
  map.logs "logs", :controller => 'logger', :action => 'create', :conditions => {:method => :post}

  get 'app/index'
  get 'graph/index'
  root 'app#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

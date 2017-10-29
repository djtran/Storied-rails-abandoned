Rails.application.routes.draw do
  get 'app/index'

  get 'big_picture/read'

  get 'big_picture/update'

  get 'big_picture/delete'

  get 'big_picture/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

class BigPictureController < ApplicationController

  def index
    @index = BigPicture.all
  end


  def new
    @big_picture = BigPicture.new
  end


  def create
    if @big_picture = BigPicture.create(big_picture_params)
      redirect to @big_picture
    else
      render 'new'
    end
  end


  def show
    @big_picture = BigPicture.find(params[:id])
  end


  def edit
    @big_picture = BigPicture.find(params[:id])
  end


  def update
    @big_picture = BigPicture.find(params[:id])

    if @big_picture.update(big_picture_params)
      redirect_to @big_picture
    else
      render 'edit'
    end
  end


  def destroy
    @big_picture = BigPicture.find(params[:id])
    @big_picture.destroy

    redirect_to big_picture_path
  end

  private
    def big_picture_params
      params.require(:big_picture).permit(:name, :description, :flavor, :location, :time, :culture)
    end
end

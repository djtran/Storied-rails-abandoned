class BigPicturesController < ApplicationController
  before_action :set_big_picture, only: [:show, :edit, :update, :destroy]

  # GET /big_pictures
  # GET /big_pictures.json
  def index
    @big_pictures = BigPicture.all
  end

  # GET /big_pictures/1
  # GET /big_pictures/1.json
  def show
  end

  # GET /big_pictures/new
  def new
    @big_picture = BigPicture.new
  end

  # GET /big_pictures/1/edit
  def edit
  end

  # POST /big_pictures
  # POST /big_pictures.json
  def create
    @big_picture = BigPicture.new(big_picture_params)

    respond_to do |format|
      if @big_picture.save
        format.html { redirect_to @big_picture, notice: 'Big picture was successfully created.' }
        format.json { render :show, status: :created, location: @big_picture }
      else
        format.html { render :new }
        format.json { render json: @big_picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /big_pictures/1
  # PATCH/PUT /big_pictures/1.json
  def update
    respond_to do |format|
      if @big_picture.update(big_picture_params)
        format.html { redirect_to @big_picture, notice: 'Big picture was successfully updated.' }
        format.json { render :show, status: :ok, location: @big_picture }
      else
        format.html { render :edit }
        format.json { render json: @big_picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /big_pictures/1
  # DELETE /big_pictures/1.json
  def destroy
    @big_picture.destroy
    respond_to do |format|
      format.html { redirect_to big_pictures_url, notice: 'Big picture was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_big_picture
      @big_picture = BigPicture.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def big_picture_params
      params.require(:big_picture).permit(:uuid, :name, :description, :flavor, :location, :time, :culture, :edges)
    end
end

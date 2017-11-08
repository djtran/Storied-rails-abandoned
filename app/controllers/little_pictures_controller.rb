class LittlePicturesController < ApplicationController
  before_action :set_little_picture, only: [:show, :edit, :update, :destroy]

  # GET /little_pictures
  # GET /little_pictures.json
  def index
    @little_pictures = LittlePicture.all
  end

  # GET /little_pictures/1
  # GET /little_pictures/1.json
  def show
  end

  # GET /little_pictures/new
  def new
    @little_picture = LittlePicture.new
  end

  # GET /little_pictures/1/edit
  def edit
  end

  # POST /little_pictures
  # POST /little_pictures.json
  def create
    @little_picture = LittlePicture.new(little_picture_params)

    respond_to do |format|
      if @little_picture.save
        format.html { redirect_to @little_picture, notice: 'Little picture was successfully created.' }
        format.json { render :show, status: :created, location: @little_picture }
      else
        format.html { render :new }
        format.json { render json: @little_picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /little_pictures/1
  # PATCH/PUT /little_pictures/1.json
  def update
    respond_to do |format|
      if @little_picture.update(little_picture_params)
        format.html { redirect_to @little_picture, notice: 'Little picture was successfully updated.' }
        format.json { render :show, status: :ok, location: @little_picture }
      else
        format.html { render :edit }
        format.json { render json: @little_picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /little_pictures/1
  # DELETE /little_pictures/1.json
  def destroy
    @little_picture.destroy
    respond_to do |format|
      format.html { redirect_to little_pictures_url, notice: 'Little picture was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_little_picture
      @little_picture = LittlePicture.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def little_picture_params
      params.require(:little_picture).permit(:description, :flavor, :name, :tags, :uuid)
    end
end

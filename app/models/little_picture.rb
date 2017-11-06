class LittlePicture < ApplicationRecord

  # attributes
  belongs_to :big_picture

  # boilerplate getters & setters
  attr_accessor :description
  attr_accessor :flavor
  attr_accessor :name
  attr_accessor :tags
  attr_accessor :uuid


  def initialize

    @description = 'Description'
    @flavor = '--His trail rallies a jellyfish yet burns far hotter than the fiercest sack – Nephikitty'
    @name = 'Name'
    @tags = 'fun chaotic-evil steampunk'
    @uuid = 'So unique!'

  end
end

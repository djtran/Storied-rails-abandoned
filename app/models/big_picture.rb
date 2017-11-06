class BigPicture < ApplicationRecord

  # attributes
  has_many :little_pictures


  # boilerplate getters & setters
  attr_accessor :culture
  attr_accessor :description
  attr_accessor :edges
  attr_accessor :flavor
  attr_accessor :location
  attr_accessor :name
  attr_accessor :time
  attr_accessor :uuid


  def initialize

    @culture = 'Predominantly dominated by Djinns'
    @description = 'Description'
    @edges = '{}'
    @flavor = '--His trail rallies a jellyfish yet burns far hotter than the fiercest sack – Nephikitty'
    @location = 'The Forgotten Realms'
    @name = 'Name'
    @time = '-7800 DR'
    @uuid = 'So unique!'

  end

end

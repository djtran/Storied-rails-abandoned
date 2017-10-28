class Picture < ApplicationRecord

  # boilerplate getters & setters
  attr_accessor :name
  attr_accessor :description
  attr_accessor :flavor

  def initialize
    @name = 'Name'
    @description = 'Description'
    @flavor = '--His trail rallies a jellyfish yet burns far hotter than the fiercest sack – Nephikitty'
  end
end
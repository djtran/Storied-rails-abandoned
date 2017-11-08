class LittlePicture < ApplicationRecord

  # attributes
  belongs_to :big_picture


  def initialize
  after_initialize :set_defaults, unless: :persisted?
  def set_defaults
    if description.nil?
      self.description = 'Description'
    end

    if flavor.nil?
      self.flavor = '--His trail rallies a jellyfish yet burns far hotter than the fiercest sack – Nephikitty'
    end

    if name.nil?
      self.name = 'Name'
    end

    if tags.nil?
      self.tags = 'fun chaotic-evil steampunk'
    end

    if uuid.nil?
      self.uuid = 'So unique!'
    end
    

  end
end

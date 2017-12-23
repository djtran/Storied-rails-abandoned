class BigPicture < ApplicationRecord

  # attributes
  has_many :little_pictures

  after_initialize :set_defaults, unless: :persisted?
  def set_defaults
    if culture.nil?
      self.culture ='Predominantly dominated by Djinns'
    end

    if description.nil?
      self.description = 'Description'
    end

    if edges.nil?
      self.edges = '{}'
    end

    if flavor.nil?
      self.flavor = '--His trail rallies a jellyfish yet burns far hotter than the fiercest sack – Nephikitty'
    end

    if location.nil?
      self.location = 'The Forgotten Realms'
    end

    if name.nil?
      self.name = 'Name'
    end

    if time.nil?
      self.time = '-7800 DR'
    end

    if uuid.nil?
      self.uuid = 'So unique!'
    end

  end
end

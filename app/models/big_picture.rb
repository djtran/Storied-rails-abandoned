class BigPicture < Picture

  attr_accessor :location
  attr_accessor :time
  attr_accessor :culture
  attr_accessor :links

  def initialize
    @location = 'The Forgotten Realms'
    @time = '-7800 DR'
    @culture = 'Predominantly dominated by Djinn'
    @links = '{}'
  end
end

class PagesController < ApplicationController
	def about
		@title = 'About Us';
		@content = 'This is the about page';
	end
	def graphs
		@title = 'Adventure';
		@content = 'Mapping out the journey';
	end
end

json.extract! spot, :id, :host_id, :title, :description, :price, :location, :country, :rating, :latitude, :longitude

json.photoUrls spot.photos.map { |file| url_for(file) }
class Api::SpotsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
        
        @spots = Spot.all
        render :index
    end

    def show
        @spot = Spot.find(params[:id])
        render :show
    end

    # def spot_params
    #     params.require(:spot).permit(:host_id, :title, :description, :price, :location, :country, :rating, :latitude, :longitude)
    # end
end
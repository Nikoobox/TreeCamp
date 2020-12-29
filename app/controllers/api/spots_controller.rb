class Api::SpotsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
         @spots = Spot.all.includes(:area)
        render :index
    end

    def show
        @spot = Spot.includes(:area, :essential, :amenity, :detail, :activity).find(params[:id])
        render :show
    end

    def update
        @spot = Spot.find(params[:id])
         if @spot.update_attributes(spot_params)
            render :show
        else 
            render json: @spot.errors.full_messages, status: 401
        end 
    end

    def spot_params
        params.require(:spot).permit(:host_id, :title, :description, :price, :location, :country, :rating, :latitude, :longitude)
    end
end
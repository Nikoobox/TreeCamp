class Api::BookingsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
        @bookings = current_user.bookings
        render :index
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 401
        end
    end

    def update
        @booking = Booking.find(params[:id])
         if @booking.update_attributes(booking_params)
            render :show
        else 
            render json: @booking.errors.full_messages, status: 401
        end 
    end

    def destroy
        @booking = Booking.find(params[:id])
        if @booking.destroy
            render :show
        else
            render json: @booking.errors.full_messages, status: 404
        end
    end

    def booking_params
        params.require(:booking).permit(:spot_id, :visitor_id, :num_visitors, :checkin_date, :checkout_date, :total_cost)
    end
end
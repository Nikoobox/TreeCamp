class Api::BookingsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
        @bookings = Booking.all
        render :index
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render :show
        else
            flash[:errors] = @poem.errors.full_messages
            render :new 
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        if @booking.destroy
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def booking_params
        params.require(:booking).permit(:spot_id, :visitor_id, :num_vositors, :checkin_date, :checkout_date, :total_cost)
    end
end
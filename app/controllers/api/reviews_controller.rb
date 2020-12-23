class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(spot_id: params[:spot_id])
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        # debugger
        @review = Review.new(review_params)
        # debugger
        if @review.save
            # debugger
            render :show
            # debugger
        else
            # debugger
            render json: @review.errors.full_messages, status: 401
            # debugger
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

    def review_params
        params.require(:review).permit(:spot_id, :author_id, :title, :body, :rating)
    end
end
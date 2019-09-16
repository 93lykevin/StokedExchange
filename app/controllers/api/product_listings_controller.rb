class Api::ProductListingsController < ApplicationController
    include ProductListingsHelper

    def index
        @product_listings = ProductListing.all
        render 'api/products/index'
    end

    def show
        @product_listing = ProductListing.find(params[:id])
        render 'api/products/show'
    end

    def create
        @product_listing = current_user.product_listings.new(product_listing_params);
        if @product_listing_params.save
            render 'api/products/show'
        else
            render json: ['Cannot create new product listing'], status: 422
        end
    end

    def update
        @product_listing = current_user.product_listing.find(params[:id])
        if @product_listing.update(product_listing_params)
            render 'api/products/show'
        else
            render json: ['Cannot update product listing'], status: 422
        end
    end

    def destroy
        @product_listing = ProductListing.find(params[:id])
        
        if @product_listing.destroy
            render 'api/products/show'
        else
            render json: ['Cannot delete product listing'], status: 422
        end
    end
    
    private
    def product_listing_params
        params.require(:product_listing).permit(:product_id, :seller_id, :selling_price, :condition, :size)
    end
end

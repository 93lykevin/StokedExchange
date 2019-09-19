# require_relative '../helpers/api/product_listings_helpers'
class Api::ProductListingsController < ApplicationController
    # include ProductListingsHelper
    
    before_action :require_login, only: [:index, :create, :update, :destroy]
    
    def index
        @product_listings = ProductListing.all
        render 'api/product_listings/index'
    end

    def show
        @product_listing = ProductListing.find(params[:id])
        render 'api/product_listings/show'
    end

    def create
        @product_listing = current_user.product_listings.new(product_listing_params);   
        if @product_listing.save!
            # @product = Product.find(product_listing.product_id)
            # render 'api/products/show/'
            render 'api/product_listings/show/'
        else
            render json: ['Cannot create new product listing'], status: 422
        end
    end

    def update
        @product_listing = current_user.product_listing.find(params[:id])
        if @product_listing.update(product_listing_params)
            render 'api/product_listings/show'
        else
            render json: ['Cannot update product listing'], status: 422
        end
    end

    def destroy
        @product_listing = current_user.product_listing.find(params[:id])
        if @product_listing.destroy
            render 'api/product_listings/show'
        else
            render json: ['Cannot delete product listing'], status: 422
        end
    end
    
    def product_listing_params
        params.require(:product_listing).permit(:seller_id, :product_id, :price, :condition, :size)
    end
end

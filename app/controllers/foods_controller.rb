class FoodsController < ApplicationController

    
    def index
        render json: Food.all, except: [:created_at, :updated_at]
    end

    def show 
        food = Food.find(params[:id])
        render json: food
    end 
  
    def create
        food = Food.create(food_params)
        render json: food
    end

    def update
        food = Food.find(params[:id]).update(food_params)
        render json: food
    end 

    def destroy 
        food = Food.find(params[:id])
        Food.destroy
        render json: {"Deleted": "deleted"}
    end 
    
    private
    
    def food_params
        params.require(:food).permit(:title, :category, :description, :image_url)
    end
end

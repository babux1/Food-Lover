class FavoritesController < ApplicationController

    def index
        render json: Favorite.all
    end

    def show 
        favorite = Favorite.find(params[:id])
        render json: favorite
    end 

    def create
        favorite = Favorite.create(user_id: params["user_id"], food_id: params["food_id"])
        render json: favorite.to_json({include: [:food]}) 
    end

    def update
        favorite = Favorite.find(params[:id])
        favorite.update(favorite_params)
        render json: favorite
      end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        render json: {"Deleted": "deleted", favorite: favorite}
    end

    private

    def favorite_params
        params.require(:favorite).permit(:user_id, :food_id, :content)
    end
end

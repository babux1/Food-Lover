class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users.to_json({include: [:favorites => {:include => [:food]}], except: [:created_at, :updated_at]})
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No current user", status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
    
        session[:user_id] = user.id
        render json: user, status: :created
       
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end

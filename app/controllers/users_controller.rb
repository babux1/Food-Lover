class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users.to_json({include: [:favorites => {:include => [:food]}], except: [:created_at, :updated_at]})
    end

    def show
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
    
        session[:user_id] = user.id
        render json: user, status: :created
        # if user.valid?
        #     render json: { user: user, status: :created}
        #   else
        #     render json: { error: 'failed to create user', status: :not_acceptable}
        #   end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end

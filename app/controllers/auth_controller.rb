class AuthController < ApplicationController
    
  
  
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
        # user = User.find_by(username: params[:username])
        # if user
        # render json: user.to_json({include: [:favorites => {:include => [:food]}], except: [:created_at, :updated_at]})
        # else
        # render json: {error: 'Invalid Username or Password'}
        # end

      def destroy
        session.delete :user_id
        head :no_content
      end

end

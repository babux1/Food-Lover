class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    before_action :authorize

    def current_user
      User.find_by(id:session[:current_user])
    end

  
    private
  
    # def authorize
    #   @current_user = User.find_by(id: session[:user_id])
  
    #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    # end
  
    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def render_not_found(error)
      render json: {error: "#{error.model} Not Found"}, status: :not_found
    end

    
end

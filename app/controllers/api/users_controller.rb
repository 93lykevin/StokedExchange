class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            errorsArr = []
            if @user.errors.full_messages.include?('First name error')
                errorsArr << 'First Name'
            end
            if @user.errors.full_messages.include?('Last name error')
                errorsArr << 'Last Name'
            end
            if @user.errors.full_messages.include?('Username error')
                errorsArr << 'Username'
            end
            if @user.errors.full_messages.include?('Password error')
                errorsArr << 'Password'
            end
            if @user.errors.full_messages.include?('Email error')
                errorsArr << 'Email'
            end
            errorsArr = errorsArr.join(', ') + " is requred."

            render json: [errorsArr], status: 422
        end
    end

    
    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :password, :email)
    end
end

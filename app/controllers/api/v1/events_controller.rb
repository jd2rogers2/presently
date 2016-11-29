module Api
  module V1
    class EventsController < ApplicationController
      before_action :authenticate_user!, only: [:create, :update, :destroy]
      
      def create
        @event = Event.create(event_params)
        @user = User.find_by(id: @event.user_id)
        render json: @user
      end

      def show
        set_event
        render json: @event
      end

      def update
        set_event
        @event.update(event_params)
        render json: @event
      end

      def index
        @events = Event.all
        render json: @events
      end

      def destroy
        binding.pry
        set_event
        @user = User.find_by(id: @event.user_id)
        @event.destroy
        render json: @user
      end

      private
      def set_event
        @event = Event.find_by(id: params[:id])
      end

      def event_params
        params.require(:events).permit(:id, :name, :user_id, :date)
      end
    end
  end
end

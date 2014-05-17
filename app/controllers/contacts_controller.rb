class ContactsController < ApplicationController
  before_action :set_contact, only: [:show]

  def new
    @contact = Contact.new
  end

  def show
    @contact = Contact.new
  end


  def create
    @contact = Contact.new(contact_params)

    respond_to do |format|
      if @contact.save
        flash[:notice] = 'Contact was successfully posted.'
        format.html { redirect_to '/' }

      else
        format.html { redirect_to '/',notice: 'Errors' }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contact
      @contact = Contact.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      params.require(:contact).permit(:name, :email, :budget, :timeframe, :message)
    end
end

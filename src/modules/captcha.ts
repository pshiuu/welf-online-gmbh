
export const initCaptcha = () => {
$(function(){
  $('#email-form').ebcaptcha(); //Add this ID to your Form, or replace this ID with your Form ID
});

(function($){

	jQuery.fn.ebcaptcha = function(options){

		var element = this; 
		var input = this.find('#captchainput'); // Add this ID to your input field which user will use to answer the question
		var label = this.find('#captchatext'); // Add this ID to the field label -- this will have the maths question
				$(element).find('input[type=submit]').attr('disabled','disabled'); 

		var randomNr1 = 0; 
		var randomNr2 = 0;
		var totalNr = 0;


		randomNr1 = Math.floor(Math.random()*10);
		randomNr2 = Math.floor(Math.random()*10);
		totalNr = randomNr1 + randomNr2;
		var texti = "Was ist "+randomNr1+" + "+randomNr2;
		$(label).text(texti);
		
	
		$(input).keyup(function(){

			var nr = $(this).val();
			if(nr==totalNr)
			{
				$(element).find('input[type=submit]').removeAttr('disabled');				
			}
			else{
				$(element).find('input[type=submit]').attr('disabled','disabled');
			}
			
		});

		$(document).keypress(function(e)
		{
			if(e.which==13)
			{
				if((element).find('input[type=submit]').is(':disabled')==true)
				{
					e.preventDefault();
					return false;
				}
			}

		});

	};

})(jQuery);
}
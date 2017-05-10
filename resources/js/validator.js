$(document).ready(function ()
{
	$('#basicInfo').validate({
		rules: {
	        firstName: {
	        	required: true,
	            maxlength: 50
	        },
	        lastName: {
	            maxlength: 50
	        },
	        phone: {
	          	required: true,
	          	minlength: 11,
	          	digits: true,
	           	phoneUS: true
	        }
	    },
	   
	    messages: {
	       	firstName: {
       			required:"Please enter your first name.",
       			maxlength: "Your first name shouldn't have more than 50 characters"
    	   	},
	       	lastName: {
		       	maxlength: "Your last name shouldn't have more than 50 characters"
		    },
	       	phone: {
	       		required:"Please enter your phone.",
	       		minlength: "Your phone shouldn't have exactly 11 characters"
	       	}
	    }
	});
});
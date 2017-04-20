#QA Tool

# 1 Onboarding
The application main page will display to the user two differents options. The user can click on button "Sign Up" to start the account registration or click on "Log in" button to log in the application.


## 1.1 Sign Up/Basic Information
The first step of the sign up is a formulary where the user needs to insert some basic informations like: First name, Phone, Gender and other. You can check the rules on the table bellow.

Element			| Type			| Rule				
----------------|---------------|---------------
(1) First Name	| - Text		| - Required / - MaxLength:50
(2) Last Name 	| - Text		| - Optional / - MaxLength:50
(3) Gender		| - Radio Button| - Required / M or F
(4) Phone		| - Number		| - Required / - Should have phone mask / - MaxLength:11
(5) Submit		| - Button 		| - Should be disabled while have required fields empty / - Go to 1.2 Sign Up

After the user informs at least the required fields, the submit button will be enabled and they are able to proceed to the next step.

## 1.2 Sign Up/Login Information
The second step of the sign up is a formulary where the user needs to insert their informations to logs in the application.
You can check the rules on the table bellow.

Element				| Type			| Rule 			
--------------------|---------------|---------------
(1) User's Image	| - PNG,GIF,JPG | - Optional / - Max Size:7 MB / Resolution:To be defined
(2) Description 	| - Text		| - Optional / - MaxLength:35
(3) E-mail			| - Text		| - Required / - Validation: Should be like the example: name@domain.suffix
(4) Password		| - Text		| - Required / - Should have at least 5 characters length
(5) Confirm Password| - Text		| - Required / - Should have at least 5 characters length / - Should match with Password
(6) I'm Done!		| - Button 		| - Should be disabled while have required fields empty / - Should send a confirmation e-mail / - Go to 1.3 Sign Up

After the user insert the necessary data to register their account, the app will check if those data are not used yet.
- If the e-mail is not used, they will be redirect to 1.3 Sign Up step and a confirmation link will be sent to their account.
- If the e-mail is already used, the app will highlight the e-mail field in "Red" and display a pop-up.

Element						| Type			| Rule 			
----------------------------|---------------|---------------
(1) E-mail cannot be used!	| - Text		| - None
(2) Ok!						| - Button 		| - Should close the pop-up

## 1.3 Sign Up/Confirmation Page
The last step is just a page to inform that the account was created and the user needs to confirm the registration click on the hyperlink sent to their e-mail. You can check some elements of this page bellow.

Element 				| Type 			| Rule 			
------------------------|---------------|---------------
(1) Valid Your Account! | - Text		| - Should be a header
(2) Description			| - Text		| - None
(3) Resend the link		| - Hyperlink   | - Should send a new token to the user validate and the old one cannot be used anymore.

(2) Description text: "A validation link was sent to: User_email. Please click on the link to validate your account".
- The user is not able to log in the app while they don't validate their account.
- After validate their account, the token cannot be used anymore.

When the user click on the validation link, the link will validate their account and redirect them to the 1.4 Login.


 





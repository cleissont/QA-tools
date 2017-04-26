# QA Tools
A application to automatize some tasks of software quality assurance.

# 1 Onboarding
The application inital page will display to the user two differents options. The user can click on button "Sign Up" to start the account registration or click on "Log in" button to log in the application.

## 1.1 Sign Up
### 1.1.1 Basic Information
The first step of the sign up is a formulary where the user needs to insert some basic informations like: First name, Phone, Gender and other. You can check the rules on the table bellow.


Element			| Type			| Rule				
----------------|---------------|---------------
(1) First Name	| - Text		| - Required / - MaxLength:50
(2) Last Name 	| - Text		| - Optional / - MaxLength:50
(3) Gender		| - Radio Button| - Required / M or F
(4) Phone		| - Number		| - Required / - Should have phone mask / - MaxLength:11
(5) Submit		| - Button 		| - Should be disabled while have required fields empty / - Go to 1.1.1 Sign Up


After the user informs at least the required fields, the submit button will be enabled and they are able to proceed to the next step.


### 1.1.2 Sign Up/Login Information
The second step of the sign up is a formulary where the user needs to insert their informations to logs in the application.
You can check the rules on the table bellow.


Element				| Type			| Rule 			
--------------------|---------------|---------------
(1) User's Image	| - PNG,GIF,JPG | - Optional / - Max Size:7 MB / Resolution:To be defined
(2) Description 	| - Text		| - Optional / - MaxLength:35
(3) E-mail			| - Text		| - Required / - Validation: Should be like the example: name@domain.suffix
(4) Password		| - Text		| - Required / - Should have at least 5 characters length
(5) Confirm Password| - Text		| - Required / - Should have at least 5 characters length / - Should match with Password
(6) I'm Done!		| - Button 		| - Should be disabled while have required fields empty / - Should send a confirmation e-mail / - Go to 1.1.2 Sign Up


After the user insert the necessary data to register their account, the app will check if those data are not used yet.
- If the e-mail is not used, they will be redirect to 1.1.2 Sign Up step and a confirmation link will be sent to their account.
- If the e-mail is already used, the app will highlight the e-mail field in "Red" and display a pop-up.


Element						| Type			| Rule 			
----------------------------|---------------|---------------
(1) E-mail cannot be used!	| - Text		| - None
(2) Ok!						| - Button 		| - Should close the pop-up


### 1.1.3 Sign Up/Confirmation Page
The last step is just a page to inform that the account was created and the user needs to confirm the registration click on the hyperlink sent to their e-mail. You can check some elements of this page bellow.


Element 				| Type 			| Rule 			
------------------------|---------------|---------------
(1) Valid Your Account! | - Text		| - Should be a header
(2) Description			| - Text		| - None
(3) Resend the link		| - Hyperlink   | - Should send a new token to the user validate and the old one cannot be used anymore.


(2) Description text: "A validation link was sent to: *User_email*. Please click on the link to validate your account".
- The user is not able to log in the app while they don't validate their account.
- After validate their account, the token cannot be used anymore.

When the user click on the validation link, the link will validate their account and redirect them to the 1.2 Login.


## 1.2 Log In
The login page will have a little formulary to the user logs in the application. It will also have a link to go to 1.1 Sign Up and another one to go to 1.3 Forgot Password.


Element 				| Type 			| Rule 			
------------------------|---------------|---------------
(1) Get an Account 		| - Hyperlink 	| - Should go to 1.1 Sign Up
(2) Login 				| - Text 		| - Required / - Validation: Should be like the example: name@domain.suffix
(3) Password 			| - Text 		| - Required
(4) Keep Logged In		| - Checkbox	| - Optional / - Should keep the user logged in the application
(5) Login 				| - Button 		| - Should be disable while the required fields haven't data / Should go to 2 Home
(6) Forgot Password 	| - Hyperlink 	| - Should go to 1.3 Forgot Password


(4) If the user marks this option, they will continue logged in the application even they closing the browser.
- If the user logs out, they will need to log in manually.

(5) When the user clicks on it, the app will need to check:
- If the account was not created.


Element						| Type			| Rule 			
----------------------------|---------------|---------------
(1) Account was not found!	| - Text		| - None
(2) Ok!						| - Button 		| - Should close the pop-up


- If the data were not inserted correctly.


Element							| Type			| Rule 			
--------------------------------|---------------|---------------
(1) E-mail or Password wrong!	| - Text		| - None
(2) Ok!							| - Button 		| - Should close the pop-up


- If the data were inserted correctly, the application will redirect the user to 2 Home.


## 1.3 Forgot Password
The user can insert their e-mail to receive a link to reset their password.


Element		| Type			| Rule 			
------------|---------------|---------------
(1) E-mail 	| - Text		| - Required / - Validation: Should be like the example: name@domain.suffix
(2) Send    | - Button 		| - Should send an e-mail with the validation link to the user. / - Should be disable while the required field had data
(3) Back	| - Button 		| - Should go to 1.2 Login


(2) When the user clicks on it, the app will need to check:
- If the account was not created.


Element						| Type			| Rule 			
----------------------------|---------------|---------------
(1) Account was not found!	| - Text		| - None
(2) Ok!						| - Button 		| - Should close the pop-up


- If the data was inserted correctly, the "Reset it" button should be disabled and this pop-up should appear.


Element									| Type			| Rule 			
----------------------------------------|---------------|---------------
(1) Validation was sent to your email!	| - Text		| - None
(2) Ok!									| - Button 		| - Should close the pop-up


If the user requests a link to the same account twice, just the newest link should work. When they click on the link to reset they password, they should go to 1.3.1 Forgot Password.


## 1.3 Forgot Password
### 1.3.1 New Password
After click on the link sent to their e-mail, the user can access this page to change their password. 
You can see the rules on the table bellow. 

Element				| Type			| Rule 			
--------------------|---------------|---------------
(1) New Password	| - Text		| - Required/ - Should have at least 5 characters lenght
(2) Confirm Password| - Text 		| - Required/ - Should match with (1).
(3) Reset Password  | - Button 		| - Appear disable while the required fields haven't data or doesn't match / Go to 1.3.2 Forgot Password


After reset their password, the link sent to the user on 1.3 Forgot Password cannot be used again and the user should go to 1.3.3 Forgot Password.


### 1.3.2 Your Password was changed!
This page will just inform the user that their password was changed and will redirect the user to the 1.2 Login after 5 seconds.


Element 				| Type 			| Rule 			
------------------------|---------------|---------------
(1) Password changed! 	| - Text		| - Should be a header
(2) Description			| - Text		| - None
(3) Counter 			| - Number   	| - Should change the number each second. / - Should appear into the description

(2) Description "Now you can use your new password to log in the app. Don't tell it to anyone! ;)
				 You will be redirected to Login Page in <Counter> seconds!"

(3) After the counter gets "0", the application will redirect the user to the Login page.


# 2 Home 




## 2.1 Settings
When the user clicks on their profile's photo a drop-down will be displayed. In this drop-down will have initially:


Element 				| Type 			| Rule 			
------------------------|---------------|---------------
(1) My Profile 		 	| - Hyperlink	| - Should go to 2.1.1 My Profile. 
(2) Logout 				| - Hyperlink	| - Log out the user.


The user can click outside the pop-up to close it.


### 2.1.1 Settings/My Profile
In this page, the user can see their data and edit it. Just one field is not editable "E-mail".
You can see the rules bellow:


Element 				| Type 			| Rule 			
------------------------|---------------|---------------
(1) Photo 				| - PNG,JPG,GIF | - Should display the user's image / - User can change it.
(2) Description			| - Text		| - Should display the user's description / - Editable
(3) First Name 			| - Text  	 	| - Should display the user's first name / - Editable
(4) Last Name 			| - Text  	 	| - Should display the user's last name / - Editable
(5) Gender  			| - Radio Button| - Should display the user's gender   / - Non-Editable
(6) Phone 	 			| - Number  	| - Should display the user's phone   / - Editable
(7) E-mail 				| - Text  	 	| - Should display the user's e-mail / - Non-Editable
(8) Save it! 			| - Button 		| - Appear disable while the data are not changed. / - Save the data on the Data Base
(9) Change password 	| - Button 		| - Should go to 2.1.2 Change Password.	


(1) The user can change their photo or just remove it. This is not an obligatory element but the files should be .PNG, .JPG or .GIF and have at least 7 MB.

(2) The user can change their description or leave it in blank. This is not an obligatory field, but the user cannot insert an description that have more than 35 characters.

(3) The user can change their first name but their cannot leave it in blank. This is an obligatory field that cannot have more than 50 characters.

(4) The user can change their last name or leave it in blank. This is not an obligatory field, but the user cannot insert an last name that have more than 50 characters.

(5) The user cannot edit their gender. The radio button should appear gray to inform that is not editable.

(6) The user can change their phone but cannot leave it in blank. This is an obligatory field, should have a phone mask and values that have less than 11 numbers cannot be considered as correct.

(7) The user can see their e-mail but cannot edit it. The field should be gray.

(8) Click on it will save the alteration. If the user didn't an alteration the button should appear gray and nothing can happen if they click on it.


### 2.1.2 My Profile/Change Password
In this page, the user can change their password to a new one.
You can see the rules bellow:

Element 				| Type 			| Rule 			
------------------------|---------------|---------------
(1) Current Password 	| - Text 		| - Should appear blank / - The user should insert their current password. / - Required
(2) New Password		| - Text		| - Required / - Should have at least 5 characters
(3) Confirm Password	| - Text  	 	| - Required / - Should match with (2)
(4) Change it! 			| - Button 	 	| - Appear disable while the field are not filled properlly / - Should change the user is password


While a field has an invalid value, this field should appear red and the "Change it!" should be disabled.

(4) Should be enable just when the user filled the "Current Password" correctly and insert a valid password. After click on it, a pop-up should appear, fields should be cleared and the button should be disabled.


Element 				| Type 			| Rule 			
------------------------|---------------|---------------
(1) Password was changed| - Text 		| - None
(2) Ok!					| - Button		| - Close the pop-up






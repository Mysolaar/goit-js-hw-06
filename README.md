# About 
Task 1: 
Finds all the categories present in a list on a web page, counts them, and then prints each category's name and the number of elements it contains.

Task 2:
Creates an unordered list of ingredients on a web page using the ingredients array.

Task 3:
Dynamically creates an image gallery on a web page using an array of objects containing image URLs and alt tags.

Task 4:
Adds functionality to two buttons on a web page to increment or decrement a counter value and display the updated value on the page.

Task 5:
Adds an event listener to an input field on a web page, which updates another element on the page with the user's input in real-time. If the input field is empty, the output element displays "Anonymous".

Task 6: 
adds an event listener to an input field on a web page, which validates the input when the user clicks outside the input field, and adds or removes a class to indicate the validation result. If the input is valid, it adds the valid class, and if it is invalid, it adds the invalid class.

Task 7:
Adds an event listener to an input range element on a web page, which sets the font size of a text element based on the value of the input range. As the user changes the input range value using a slide bar, the font size of the text element changes accordingly.

Task 8: 
sets up an event listener on a form with the class .login-form that listens for a form submission event. Then it destructures the elements object of the form and extracts the email and password fields. If either of these fields are empty, it displays a window alert message telling the user to fill in all the fields. If both fields have values, the code creates a formData object with the values of email and password fields and logs it to the console. Finally, the form is reset using the reset() method so that the input fields are cleared.

Task 9:
When the button is clicked, the event listener generates a random color for the background. The color code is also displayed in the text content of the span element using the textContent property.

Task 10:
adds and removes boxes with random background colors in response to button clicks. 
- When the "Create" button is clicked, a for loop creates specified in input number of new <div> elements with a class of "border". Each new <div> has its width, height, and backgroundColor styles set using the boxSize and getRandomHexColor() functions. The boxSize variable is incremented by 10 with each new box created.
- When the "Destroy" button is clicked, all the boxes are removed by setting the innerHTML property of the container div to an empty string. The boxSize variable is reset to its initial value of startSize.

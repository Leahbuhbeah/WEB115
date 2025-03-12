     // JavaScript code for form validation
	// Prevent form from submitting
  let form = document.getElementById("myForm");
  form.onsubmit = myValidation;
  function myValidation(e) {
    e.preventDefault();
    // Retrieve the input field value
    let input = document.getElementById("inputField");
    // Regular expression pattern for alphanumeric input
    let regEx = /[\d\w]+/;
    // Check if the input value matches the pattern
    let isValid = regEx.test(input.value);
    if (isValid) {
      // Valid input: display confirmation and submit the form
      alert("Form submitted successfully!");
      e.currentTarget.submit();
    } else {
      // Invalid input: display error message
      input.setCustomValidity("Input only letters and numbers.");
    }
  }
  
  
  
  
  
  
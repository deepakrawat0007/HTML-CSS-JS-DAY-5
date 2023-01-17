function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["password"].value;
    var a = document.forms["myForm"]["passwordcheck"].value;
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (x == "" || !usernameRegex.test(x)) {
      document.getElementById("usernameError").innerHTML = "Please enter a valid username";
      return false;
    }
    if (y == "" || !emailRegex.test(y)) {
      document.getElementById("emailError").innerHTML = "Please enter a valid email";
      return false;
    }
    if (z == "" || !passwordRegex.test(z)) {
      document.getElementById("passwordError").innerHTML = "Please enter a valid password";
      return false;
    }
    if (a == "" || a != z) {
      document.getElementById("passwordcheckError").innerHTML = "Please enter a matching password";
      return false;
    }
    document.getElementById("successMessage").innerHTML = "Form submitted successfully!";
    return true;

  }
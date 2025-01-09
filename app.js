const signupForm = document.getElementById("signupForm");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const emailInput = document.getElementById("email");
  const password = document.getElementById("password").value;

  let valid = true;
  [firstNameError, lastNameError, emailError, passwordError].forEach((item) => {
    item.textContent = "";
    item.style.display = "none";
  });
  const inputFields = document.querySelectorAll(".input-field");
  inputFields.forEach((inputField) => {
    inputField.classList.remove("error-iconss");
  });

  if (firstname.length < 3) {
    valid = false;
    firstNameError.textContent = "Firstname cannot be empty";
    firstNameError.style.display = "block";
  }
  if (lastname.length < 3) {
    valid = false;
    lastNameError.textContent = "Lastname cannot be empty";
    lastNameError.style.display = "block";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(emailInput.value)) {
    valid = false;
    emailError.textContent = "Looks like this is not an email";
    emailError.style.display = "block";
    emailInput.placeholder = "example@example.com";
    emailInput.style.borderColor = "hsl(0, 100%, 74%)";
    emailInput.style.fontWeight = "700";
    emailInput.classList.add("invalid");
  }

  function validatePassword(password) {
    const lengthPattern = /^.{6,}$/;

    const digitPattern = /\d/;

    return lengthPattern.test(password) && digitPattern.test(password);
  }
  if (!validatePassword(password)) {
    valid = false;
    passwordError.textContent = "Password cannot be empty";
    passwordError.style.display = "block";
  }
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => input.classList.remove("input-error"));

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("input-error");
      valid = false;
      input.parentElement.classList.add("error");
    }
  });

  if (valid) {
    alert("form submitted successfully");
  }
});

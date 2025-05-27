const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const message = document.getElementById("displayMessage");
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

// const error = validateForm(password,confirmPassword);

if (password.length < 8) {
  message.innerText = "Error";
} else if (confirmPassword !== password) {
  message.innerText = "Error";
} else {
  message.innerText = "Registration Successful";
}


const form = document.getElementById("form")
form.addEventListener("submit",function(){
})

const message = document.getElementById("displayMessage");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const error = validateForm(password,confirmPassword);

if(password.length < 8){
    message.innerText = "Error";
}
if(confirmPassword!==password){
    message.innerText = "Error ";
}
else{
    message.innerText = "Registration Successful"
}
console.log(message);


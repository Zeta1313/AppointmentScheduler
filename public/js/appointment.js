document.getElementById('firstform').onsubmit = () => {

 clearErrors()

 // Flag variable to determine if form data is valid
 let isValid = true

 // Validate first name
 let fname = document.getElementById('fname').value.trim()
 if (!fname) {
  document.getElementById("err-fname").style.display = "block"
  isValid = false
 }

 // Validate last name
 let lname = document.getElementById('lname').value.trim()
 if (!lname) {
  document.getElementById("err-lname").style.display = "block"
  isValid = false
 }
 return isValid
}

function clearErrors() {
 let errors = document.getElementsByClassName("error")
 for (let i = 0; i < errors.length; i++) {
  errors[i].style.display = "none"
 }
}
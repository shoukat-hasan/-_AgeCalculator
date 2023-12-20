function calculateAge() {
  // User's Date of birth
  var dobInput = document.getElementById("dob");
  var dob = new Date(dobInput.value);

  // Current date
  var currentDate = new Date();

  // Calculate the age
  var age = currentDate.getFullYear() - dob.getFullYear();

  if (
    currentDate.getMonth() < dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

  // Displaying the result
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your age is: " + age + " years.";
}

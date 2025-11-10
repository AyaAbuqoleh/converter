function convertToMiles() {
  const kmInput = document.getElementById("kilometers");
  const resultDiv = document.getElementById("result");

  const kilometers = parseFloat(kmInput.value);


  if (isNaN(kilometers) || kilometers < 0) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please enter a valid non-negative number.";
    return;
  }

  const miles = kilometers * 0.621371;
  resultDiv.style.color = "#007700";
  resultDiv.textContent = `${kilometers} kilometers = ${miles.toFixed(3)} miles`;
}

function clearFields() {
  document.getElementById("kilometers").value = "";
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
}

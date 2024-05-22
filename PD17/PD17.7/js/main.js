function showAlertWithInputText() {
  const inputField = document.getElementById("textInput");
  const inputText = inputField.value;
  alert(inputText);
}

document
  .getElementById("submitButton")
  .addEventListener("click", showAlertWithInputText);

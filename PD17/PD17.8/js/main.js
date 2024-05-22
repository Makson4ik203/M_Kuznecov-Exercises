function updateContent() {
  const userInput = document.getElementById("userInput").value;
  const dynamicContent = document.getElementById("dynamicContent");
  dynamicContent.innerText = userInput;
}

document.getElementById("userInput").addEventListener("input", updateContent);

function logElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  console.log(`Elements with class '${className}':`);
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
  }
}

document.getElementById("findElementsButton").addEventListener("click", () => {
  logElementsByClass("myClass");
});

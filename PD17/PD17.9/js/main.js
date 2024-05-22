document
  .getElementById("findElementsButton")
  .addEventListener("click", function () {
    var elements = document.getElementsByClassName("myClass");
    for (var i = 0; i < elements.length; i++) {
      console.log(elements[i]);
    }
  });
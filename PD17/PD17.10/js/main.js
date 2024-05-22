function sortListAscending() {
  const list = document.getElementById("itemList");
  const items = Array.from(list.getElementsByTagName("li"));

  items.sort((a, b) => a.textContent.localeCompare(b.textContent));

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  items.forEach((item) => list.appendChild(item));
}

function sortListDescending() {
  const list = document.getElementById("itemList");
  const items = Array.from(list.getElementsByTagName("li"));

  items.sort((a, b) => b.textContent.localeCompare(a.textContent));

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  items.forEach((item) => list.appendChild(item));
}

document
  .getElementById("sortAscendingButton")
  .addEventListener("click", sortListAscending);
document
  .getElementById("sortDescendingButton")
  .addEventListener("click", sortListDescending);

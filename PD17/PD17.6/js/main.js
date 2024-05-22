function deleteFirstListItem(listId) {
  const list = document.getElementById(listId);
  if (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  }
}

document
  .getElementById("deleteFirstItemButton")
  .addEventListener("click", () => {
    deleteFirstListItem("itemList");
  });

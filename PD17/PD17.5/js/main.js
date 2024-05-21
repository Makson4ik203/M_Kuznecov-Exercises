function logChildElements(parentId) {
  const parentDiv = document.getElementById(parentId);
  const children = parentDiv.children;
  console.log(`Child elements of #${parentId}:`);
  for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
  }
}

document.getElementById("logChildrenButton").addEventListener("click", () => {
  logChildElements("parentDiv");
});

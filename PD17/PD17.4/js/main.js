function changeParagraphTextColor(color) {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => (p.style.color = color));
}

changeParagraphTextColor("blue");

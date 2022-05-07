const colorPlaceholder = document.querySelector(".color-placeholder");
const generateBtn = document.querySelector(".btn-generate");

// Main function for generating the random hex color
const generateColor = () => {
  var randomColor = `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  colorPlaceholder.setAttribute("data-copy", "copy");
  return randomColor;
};

// Copying to clipboard function
const copyToClipBoard = (data) => {
  navigator.clipboard.writeText(data.textContent); // getting only the string inside the element
  return;
};

colorPlaceholder.textContent = "#222831";

// Interact with the user
generateBtn.addEventListener("click", () => {
  let colorValue = generateColor();
  colorPlaceholder.textContent = colorValue;
});

// Copying text interaction
colorPlaceholder.addEventListener("click", () => {
  copyToClipBoard(colorPlaceholder);
  colorPlaceholder.setAttribute("data-copy", "copied!");
});

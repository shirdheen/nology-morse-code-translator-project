import {
  handleTranslation,
  clearFields,
} from "./modules/input-output-handling.js";

const inputText = document.getElementById("inputText");
const translationMode = document.getElementById("mode");
const translateButton = document.getElementById("translateButton");
const clearButton = document.getElementById("clearButton");
const outputText = document.getElementById("outputText");
const errorText = document.getElementById("errorStatus");
const sourceHeading = document.getElementById("source-heading");
const outputHeading = document.getElementById("output-heading");

// Event listeners

translationMode.addEventListener("change", () => {
  const selectedMode = translationMode.value;
  if (selectedMode === "english-to-morse") {
    sourceHeading.textContent = "English";
    outputHeading.textContent = "Morse Code";
  } else if (selectedMode === "morse-to-english") {
    sourceHeading.textContent = "Morse Code";
    outputHeading.textContent = "English";
  }
});

translateButton.addEventListener("click", () => {
  const selectedMode = translationMode.value;
  handleTranslation(inputText, outputText, errorText, selectedMode);
});

clearButton.addEventListener("click", () => {
  clearFields(inputText, outputText, errorText);
});

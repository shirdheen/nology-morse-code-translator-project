import { englishtoMorse, morsetoEnglish } from "./translation.js";
import { validateInput } from "./validate-input.js";

export function handleTranslation(
  inputElement,
  outputElement,
  errorElement,
  mode
) {
  try {
    // Gets input value
    const userInput = inputElement.value.trim();

    // Validate input
    validateInput(userInput, mode); // Will throw an error if the input is invalid

    // Translation based on the mode
    let translatedText = "";
    if (mode === "english-to-morse") {
      translatedText = englishtoMorse(userInput);
    } else if (mode === "morse-to-english") {
      translatedText = morsetoEnglish(userInput);
    } else {
      throw new Error("Invalid translation mode.");
    }

    outputElement.value = translatedText;
  } catch (error) {
    console.error(error.message);
    errorElement.innerHTML = `Error: ${error.message}`;
  }
}

// Function to clear input and output fields
export function clearFields(inputElement, outputElement, errorElement) {
  inputElement.value = "";
  outputElement.value = "";
  errorElement.innerHTML = "";
  console.log("Cleared fields");
}

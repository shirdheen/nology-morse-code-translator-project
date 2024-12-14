export function validateInput(input, mode) {
  if (!input || input.trim === "") {
    throw new Error("Input cannot be empty. Please enter some text.");
  }

  if (mode === "english-to-morse") {
    const englishRegex = /^[A-Za-z0-9 .,!?'"-]*$/;
    if (!englishRegex.test(input)) {
      throw new Error(
        "Invalid input for English. Please use only letters, numbers, and basic characters."
      );
    }
  } else if (mode === "morse-to-english") {
    const morseRegex = /^[.\-/ ]*$/;
    if (!morseRegex.test(input)) {
      throw new Error(
        "Invalid input for Morse Code. Please use only '.', '-', '/', and spaces."
      );
    }
  } else {
    throw new Error(
      "Invalid mode selected. Please choose either 'english-to-morse' or 'morse-to-english'."
    );
  }
  return true;
}

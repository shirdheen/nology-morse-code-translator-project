import {
  MORSE_CODE_DICTIONARY,
  REVERSE_MORSE_CODE_DICTIONARY,
} from "./dictionary.js";

export function englishtoMorse(englishText) {
  if (typeof englishText !== "string") {
    throw new Error("Input must be a string");
  }

  const cleanedUpText = englishText.trim().toUpperCase();
  console.log("Cleaned up text: ", cleanedUpText);
  const morseArray = [];

  for (const char of cleanedUpText) {
    if (char === " ") {
      morseArray.push("/");
    } else if (MORSE_CODE_DICTIONARY[char]) {
      morseArray.push(MORSE_CODE_DICTIONARY[char]);
    } else {
      throw new Error(`Unsupported character: ${char}`);
    }
  }
  console.log("Morse array: ", morseArray);
  return morseArray.join(" ");
}

export function morsetoEnglish(morseText) {
  if (typeof morseText !== "string") {
    throw new Error("Input must be a string");
  }
  const cleanedUpText = morseText.trim();
  const morseWords = cleanedUpText.split("/"); // Split morse words
  console.log("Cleaned up morse code: ", morseWords);
  const englishWords = morseWords.map((word) => {
    const morseLetters = word.split(" ").filter((char) => char.trim() !== "");
    console.log("Morse letters: ", morseLetters);
    return morseLetters
      .map((morseChar) => {
        if (REVERSE_MORSE_CODE_DICTIONARY[morseChar]) {
          return REVERSE_MORSE_CODE_DICTIONARY[morseChar];
        } else {
          throw new Error(`Unsupported Morse Code: ${morseChar}`);
        }
      })
      .join("");
  });
  return englishWords.join(" ");
}

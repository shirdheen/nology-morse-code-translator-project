const { englishtoMorse } = require("./modules/translation.js");
const { morsetoEnglish } = require("./modules/translation.js");

// Tests for English to Morse Code translation

describe("English to Morse Code Translation", () => {
  test("Basic translation", () => {
    expect(englishtoMorse("HELLO")).toBe(".... . .-.. .-.. ---");
  });

  test("Single character", () => {
    expect(englishtoMorse("E")).toBe(".");
  });

  test("Word translation", () => {
    expect(englishtoMorse("APPLE")).toBe(".- .--. .--. .-.. .");
  });

  test("Sentence translation", () => {
    expect(englishtoMorse("HI, MY NAME IS JANE.")).toBe(
      ".... .. --..-- / -- -.-- / -. .- -- . / .. ... / .--- .- -. . .-.-.-"
    );
  });

  test("Case insensitivity", () => {
    expect(englishtoMorse("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
  });

  test("Numbers", () => {
    expect(englishtoMorse("123")).toBe(".---- ..--- ...--");
  });

  test("Special characters", () => {
    expect(() => englishtoMorse("HELLO#")).toThrow("Unsupported character: #");
  });

  test("Empty string", () => {
    expect(() => englishtoMorse("")).toThrow("Input must be a string");
  });

  test("Leading and trailing spaces", () => {
    expect(englishtoMorse("   HELLO   ")).toBe(".... . .-.. .-.. ---");
  });

  test("Non-English characters", () => {
    expect(() => englishtoMorse("¡Hola!")).toThrow("Unsupported character: ¡");
  });

  test("Mixed valid and invalid characters", () => {
    expect(() => englishtoMorse("ICE#CREAM")).toThrow(
      "Unsupported character: #"
    );
  });

  test("Handle very long input", () => {
    expect(
      englishtoMorse(
        "The sun dipped below the horizon, painting the sky with hues of orange and purple as a cool breeze whispered through the trees. Birds chirped softly, their melodies fading into the gentle hum of crickets."
      )
    ).toBe(
      "- .... . / ... ..- -. / -.. .. .--. .--. . -.. / -... . .-.. --- .-- / - .... . / .... --- .-. .. --.. --- -. --..-- / .--. .- .. -. - .. -. --. / - .... . / ... -.- -.-- / .-- .. - .... / .... ..- . ... / --- ..-. / --- .-. .- -. --. . / .- -. -.. / .--. ..- .-. .--. .-.. . / .- ... / .- / -.-. --- --- .-.. / -... .-. . . --.. . / .-- .... .. ... .--. . .-. . -.. / - .... .-. --- ..- --. .... / - .... . / - .-. . . ... .-.-.- / -... .. .-. -.. ... / -.-. .... .. .-. .--. . -.. / ... --- ..-. - .-.. -.-- --..-- / - .... . .. .-. / -- . .-.. --- -.. .. . ... / ..-. .- -.. .. -. --. / .. -. - --- / - .... . / --. . -. - .-.. . / .... ..- -- / --- ..-. / -.-. .-. .. -.-. -.- . - ... .-.-.-"
    );
  });
});

describe("Morse Code to English Translation", () => {
  test("Basic translation", () => {
    expect(morsetoEnglish(".... . .-.. .-.. ---")).toBe("HELLO");
  });

  test("Single character", () => {
    expect(morsetoEnglish("..-.")).toBe("F");
  });

  test("Word translation", () => {
    expect(morsetoEnglish("..-.")).toBe("F");
  });

  test("Sentence translation", () => {
    expect(
      morsetoEnglish(
        ".- / ... -- .- .-.. .-.. / -.-. .-. . . -.- / -- . .- -. -.. . .-. . -.. / - .... .-. --- ..- --. .... / - .... . / -- . .- -.. --- .-- --..-- / .. - ... / ... ..- .-. ..-. .- -.-. . / ... .... .. -- -- . .-. .. -. --. / ..- -. -.. . .-. / - .... . / ..-. .. .-. ... - / --. .-.. .. -- -- . .-. ... / --- ..-. / ... - .- .-. .-.. .. --. .... - .-.-.-"
      )
    ).toBe(
      "A SMALL CREEK MEANDERED THROUGH THE MEADOW, ITS SURFACE SHIMMERING UNDER THE FIRST GLIMMERS OF STARLIGHT."
    );
  });

  test("Handling extra spaces", () => {
    expect(morsetoEnglish(".- / .--. / .--. / .-.. / .")).toBe("A P P L E");
  });

  test("Invalid Morse Code", () => {
    expect(() => morsetoEnglish(".-.......... .--. .--. .-.. .")).toThrow(
      "Unsupported Morse Code: .-.........."
    );
  });

  test("Empty string", () => {
    expect(() => morsetoEnglish("")).toThrow("Input must be a string");
  });

  test("Spaces between words", () => {
    expect(morsetoEnglish(".- .--. .--. .-.. . / .--. .. .")).toBe("APPLE PIE");
  });

  test("Handling spaces in inputs", () => {
    expect(() => morsetoEnglish("   ")).toThrow("Input must be a string");
  });
});

describe("Back-and-Forth Translation", () =>
  test("English to Morse and back to English", () => {
    const text = "PEANUT BUTTER";
    const morse = englishtoMorse(text);
    const english = morsetoEnglish(morse);
    expect(english).toBe(text);
  }));

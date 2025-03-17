const asciiMap = {
  A: [" █▀█ ", " █▀█ ", " ▀ ▀ "],
  B: [" █▀▄ ", " █▀▀ ", " █▄▀ "],
  C: [" ▄▀█ ", " █   ", " ▀▀▀ "],
  D: [" █▀▄ ", " █  █", " █▄▀ "],
  E: [" █▀█ ", " █▀  ", " █▄▄ "],
  F: [" █▀█ ", " █▀  ", " █   "],
  G: [" ▄▀█ ", " █ ▄▄", " █▄█ "],
  H: [" █ █ ", " █▀█ ", " █ █ "],
  I: [" █ ", " █ ", " █ "],
  J: ["  █ ", "  █ ", " ██ "],
  K: [" █▄▀ ", " █▀  ", " █ ▀▄"],
  L: [" █   ", " █   ", " █▄▄ "],
  M: [" █▄ ▄█", " █ █ █", " █   █"],
  N: [" █▄ █", " █ ▀█", " █  █"],
  O: [" ▄▀█ ", " █  █", " ▀▀▀ "],
  P: [" █▀█ ", " █▀▀ ", " █   "],
  Q: [" ▄▀█  ", " █  █ ", " ▀▀█▄ "],
  R: [" █▀█ ", " █▀▀ ", " █ ▀▄"],
  S: [" █▀▀ ", " ▀▀█ ", " ▀▀▀ "],
  T: [" ███ ", "  █  ", "  █  "],
  U: [" █  █", " █  █", " ▀▀▀ "],
  V: [" █  █", " █  █", "  ▀▀ "],
  W: [" █   █ ", " █ █ █ ", " ▀▄▀▄▀ "],
  X: [" █  █", "  ▀█ ", " █  █"],
  Y: [" █  █", "  ▀█ ", "  █  "],
  Z: [" █▀▀▀", "  ▄▀ ", " ▄▄▄█"],
  " ": ["     ", "     ", "     "],
};

const wrapWidth = 10; // Maximum characters before wrapping

function generateASCII() {
  const text = document.getElementById("inputText").value.toUpperCase();
  const output = document.getElementById("asciiOutput");

  if (!text) {
    output.innerText = "Alphabets will appear here...";
    return;
  }

  let wrappedLines = [];
  let currentLine = "";

  for (let i = 0; i < text.length; i++) {
    currentLine += text[i];
    if (currentLine.length >= wrapWidth || i === text.length - 1) {
      wrappedLines.push(currentLine);
      currentLine = "";
    }
  }

  let asciiOutput = "";

  for (let line of wrappedLines) {
    let asciiLines = ["", "", ""];

    for (let char of line) {
      if (asciiMap[char]) {
        asciiLines[0] += asciiMap[char][0] + " ";
        asciiLines[1] += asciiMap[char][1] + " ";
        asciiLines[2] += asciiMap[char][2] + " ";
      }
    }

    asciiOutput += asciiLines.join("\n") + "\n\n";
  }

  output.innerText = asciiOutput;
}

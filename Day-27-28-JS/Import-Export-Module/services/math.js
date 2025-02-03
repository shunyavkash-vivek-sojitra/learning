// Math Operation Modele
export const addition = (a, b) => {
  return a + b;
};
export const subtraction = (a, b) => {
  return a - b;
};
export const multiplication = (a, b) => {
  return a * b;
};
export const division = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divisible by Zero(0).");
  }
  return a / b;
};

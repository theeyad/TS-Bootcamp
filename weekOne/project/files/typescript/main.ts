// Write The Function Here
const printInConsole = (...values: (string | number | boolean)[]): string => {
  for (const value of values) {
    console.log(`The Value Is ${value} And Type Is ${typeof value}`);
  }
  return `Done`;
};

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

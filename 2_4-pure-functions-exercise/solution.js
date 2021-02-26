/* Example 1 */
function getDate() {
  return new Date().toDateString();
}
// Impure
// A function is not pure if its output depends on anything except its inputs (including the state of the world), or if calling the function at different times with the same inputs can give different outputs (e.g. if called on different days).

/* Example 2 */
function getWorkshopDate() {
  return new Date(2020, 11, 4).toDateString();
}
// Pure
// A function is pure if its output depends on nothing but its inputs, and it always returns the same output if called with the same inputs (in this case, no inputs).

/* Example 3 */
function toHex(n) {
  let hex = n.toString(16);
  return hex.padStart(2, "0");
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 4 */
function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 5 */
function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B);
  const colorMe = document.getElementById("color-me");
  colorMe.setAttribute("style", "color: " + hex);
}
// Impure
// A function is not pure if it does anything besides return its output. Any other effect it has on the program or world is a side effect (in this case, changing the properties of an HTML element on the page).

/* Example 6 */
async function readJsonFile(filename) {
  const file = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  );
  return await file.json();
}
// Impure
// A function is not pure if its output depends on the state of the world (in this case, the contents of web-hosted file), or if calling the function at different times with the same inputs can give different outputs.

/* Example 7 */
function writeJsonString(object) {
  return JSON.stringify(object, null, 2);
}
// Pure
// A function is pure if its output depends on nothing but its inputs, and it always returns the same output if called with the same input. In this case, calling it on the same object will always return the same string.

/* Example 8 */
function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 9 */
function computeTruthTable(operator) {
  const truthValues = [true, false];
  const table = [];
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 10 */
function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}
// Impure
// A function is not pure if it does anything besides return its output. Any other effect it has on the program or world is a side effect (in this case, logging information to the console).

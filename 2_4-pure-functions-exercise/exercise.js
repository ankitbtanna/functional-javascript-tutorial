/* Example 1 */
function getDate() {
  return new Date().toDateString();
}

/* Example 2 */
function getWorkshopDate() {
  return new Date(2020, 11, 4).toDateString();
}

/* Example 3 */
function toHex(n) {
  let hex = n.toString(16);
  return hex.padStart(2, "0");
}

/* Example 4 */
function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}

/* Example 5 */
function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B);
  const colorMe = document.getElementById("color-me");
  colorMe.setAttribute("style", "color: " + hex);
}

/* Example 6 */
async function readJsonFile(filename) {
  const file = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  );
  return await file.json();
}

/* Example 7 */
function writeJsonString(object) {
  return JSON.stringify(object, null, 2);
}

/* Example 8 */
function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}

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

/* Example 10 */
function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}


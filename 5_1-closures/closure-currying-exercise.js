function writeMessage(message, salutation, name) {
  return md`<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

const writeFriendlyNote = signMessageFrom("Your best bud");
const writeBusinessMemo = signMessageWith("Best");

const curriedQuote = (name) => (year) => (text) => quote(name, year, text);

function quote(name, year, text) {
  return md`<p style="font-size:smaller;padding:1em;font-family:monospace;">"${text}"<br>- ${name} (${year})</p>`;
}
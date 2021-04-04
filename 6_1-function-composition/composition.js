var ender = (ending) => (input) => input + ending;

var adore = ender(' rocks');
var announce = ender(", y'all");
var exclaim = ender("!");

var hypeUp = (x) => exclaim(announce(adore(x)));
hypeUp('JS'); // JS rocks, y'all!
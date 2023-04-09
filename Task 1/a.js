// Read the JSON currency file
var commonCurrency = JSON.parse(
  require("fs").readFileSync("currency.json", "utf8")
);

// Create a readline interface
const ReadLine = require("readline");
const rl = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get the currency object by name or code
function getCurrency(currency) {
  // The currency code is always in uppercase
  var code = currency.toUpperCase();
  if (commonCurrency[code]) {
    return commonCurrency[code];
  }
  var name = currency.toLowerCase();
  for (var key in commonCurrency) {
    if (commonCurrency[key].name.toLowerCase() === name) {
      return commonCurrency[key];
    }
  }
}

// Enter the currency name or code
rl.question("Enter the currency name or code: ", function (currency) {
  // Get the currency object
  var currency = getCurrency(currency);
  if (currency) {
    console.log(currency);
  } else {
    console.log("Currency not found");
  }
  rl.close();
});

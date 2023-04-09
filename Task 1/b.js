// Read the JSON country file
var countries = JSON.parse(
  require("fs").readFileSync("countries.json", "utf8")
);

// Create a readline interface
const ReadLine = require("readline");
const rl = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get the country object by name or capital
function getCountry(name) {
  name = name.toLowerCase();
  for (var i = 0; i < countries.countries.country.length; i++) {
    if (
      countries.countries.country[i].countryName.toLowerCase() === name ||
      countries.countries.country[i].capital.toLowerCase() === name
    ) {
      return countries.countries.country[i];
    }
  }
}
// Enter the country name or capital
rl.question("Enter the country name or capital: ", function (country) {
  // Get the country object
  var country = getCountry(country);
  if (country) {
    console.log(country);
  } else {
    console.log("Country not found");
  }
  rl.close();
});

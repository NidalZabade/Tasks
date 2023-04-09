// Read the JSON country file
var countries = JSON.parse(
  require("fs").readFileSync("countries.json", "utf8")
);

// function to get all currencies from countries.json without duplicates (returns array) [1]

function getCurrenciesFirst() {
  let currencies = new Set();
  for (let i = 0; i < countries.countries.country.length; i++) {
    currencies.add(countries.countries.country[i].currencyCode.toUpperCase());
  }
  return Array.from(currencies);
}

// function to get all currencies from countries.json without duplicates (returns object) [2]

function getCurrenciesSecond() {
  let currencies = {};
  for (let i = 0; i < countries.countries.country.length; i++) {
    if (
      !currencies[countries.countries.country[i].currencyCode.toUpperCase()]
    ) {
      currencies[countries.countries.country[i].currencyCode.toUpperCase()] = [
        countries.countries.country[i].countryName,
      ];
    } else {
      currencies[
        countries.countries.country[i].currencyCode.toUpperCase()
      ].push(countries.countries.country[i].countryName);
    }
  }
  return currencies;
}

currencies = getCurrenciesFirst();

// print number of currencies
console.log(currencies.length);
console.log(currencies);

currencies = getCurrenciesSecond();

// print number of currencies
console.log(Object.keys(currencies).length);
console.log(currencies);

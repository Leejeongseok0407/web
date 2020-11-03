
const selectElement = document.querySelector(".CountryName");
const SavedCountryName = document.querySelectorAll("option");
const MY_COUNTRY = "current1Country";

function EventHandler(event) {
  saveCountry(event.target.value);
}

function saveCountry(value) {
  localStorage.setItem(MY_COUNTRY, value);
  console.log(`get  ${value}`);
}

function setSelect(CountryName) {
  for (var i = 0; i < SavedCountryName.length; i++) {
    if (CountryName === SavedCountryName[i].value) {
      SavedCountryName[i].setAttribute("selected", true);
      console.log(`set ${SavedCountryName[i].value}`);
    }
  }
}

function LoadCountry() {
  const currentCountry = localStorage.getItem(MY_COUNTRY);

  if (currentCountry !== null) {
    setSelect(currentCountry);
  }
}

selectElement.addEventListener("change", EventHandler);

function init() {
  LoadCountry();
}

init();

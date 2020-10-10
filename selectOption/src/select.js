import { SavedCountryName } from "./index";

export function select(CountryName) {
  for (const i = 0; i < SavedCountryName.length; i++) {
    if (CountryName === SavedCountryName[i].value)
      SavedCountryName[i].setAttribute("selected", true);
  }
}

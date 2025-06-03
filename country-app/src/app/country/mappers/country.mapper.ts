import { RestCountry } from "../interfaces/rest-country.interface";

export class CountryMapper {
  static mapRestCountryToCountry(restCountry : RestCountry){
    return {
      capital: restCountry.capital?.join(', '),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion || 'N/A'
    }
  }
  static mapRestCountryArrayToArray(restCountries : RestCountry[]){
    return restCountries.map((country) => this.mapRestCountryToCountry(country));
  }
}

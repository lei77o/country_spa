import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/rest-country.interface';
import { catchError, count, delay, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = ' https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]>{
    query = query.toLowerCase();

    return this.http.get<RestCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map( restCountries =>  CountryMapper.mapRestCountryArrayToArray(restCountries)),
      catchError( _ => {
        return throwError(() => Error(`No found ${query}`));
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]>{
   query = query.toLowerCase();

    return this.http.get<RestCountry[]>(`${API_URL}/name/${query}`).pipe(
      map( restCountries =>  CountryMapper.mapRestCountryArrayToArray(restCountries)),
      delay(3000),
      catchError( error => {
        console.log(error);
        return throwError(() => Error(`No found ${query}`));
      })
    );
  }

  searchByAlphaCode(code: string){
   code = code.toLowerCase();
   return this.http.get<RestCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map( rest =>  CountryMapper.mapRestCountryArrayToArray(rest)),
      map( countries => countries.at(0)),
      catchError( _ => {
       return throwError(() => Error(`No found ${code}`));
      })
    );
  }

}

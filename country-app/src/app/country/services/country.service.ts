import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/rest-country.interface';
import { catchError, count, delay, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Region } from '../interfaces/region.type';

const API_URL = ' https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheByCapital = new Map<string, Country[]>();
  private queryCacheByCountry = new Map<string, Country[]>();
  private queryCacheByCode = new Map<string, Country[]>();
  private queryCacheByRegion = new Map<Region, Country[]>();

  searchByCapital(query: string): Observable<Country[]>{
    query = query.toLowerCase();

    if(this.queryCacheByCapital.has(query)){
      return of(this.queryCacheByCapital.get(query) as Country[] ?? []);
    }

    return this.http.get<RestCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map( restCountries =>  CountryMapper.mapRestCountryArrayToArray(restCountries)),
      tap(countries => { this.queryCacheByCapital.set(query, countries)}),
      catchError( _ => {
        return throwError(() => Error(`No found ${query}`));
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]>{
   query = query.toLowerCase();

   if(this.queryCacheByCountry.has(query)){
      return of(this.queryCacheByCountry.get(query) as Country[] ?? []);
    }

    return this.http.get<RestCountry[]>(`${API_URL}/name/${query}`).pipe(
      map( restCountries =>  CountryMapper.mapRestCountryArrayToArray(restCountries)),
      tap(countries => { this.queryCacheByCountry.set(query, countries)}),
      catchError( error => {
        console.log(error);
        return throwError(() => Error(`No found ${query}`));
      })
    );
  }

  searchByRegion(region: Region): Observable<Country[]>{
    const url = `${API_URL}/region/${region}`;

   if(this.queryCacheByRegion.has(region)){
      return of(this.queryCacheByRegion.get(region) as Country[] ?? []);
    }

    return this.http.get<RestCountry[]>(`${url}`).pipe(
      map( restCountries =>  CountryMapper.mapRestCountryArrayToArray(restCountries)),
      tap(countries => { this.queryCacheByRegion.set(region, countries)}),
      catchError( error => {
        console.log(error);
        return throwError(() => Error(`No found ${region}`));
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

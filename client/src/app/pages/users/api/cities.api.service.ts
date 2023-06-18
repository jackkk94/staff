import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import {  User } from 'src/app/common/models/user.model';
import { City } from 'src/app/common/models/city.model';

const API_URL = '/cities';

@Injectable({
  providedIn: 'root',
})
export class CitiesApi {
  public apiUrl = API_URL;
  constructor(private http: HttpClient) {}

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}`);
  }
}

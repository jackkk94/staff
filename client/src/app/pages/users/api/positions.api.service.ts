import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { UserSearchFilter } from '../models/user-search.model';
import { SearchResponse } from 'src/app/common/models/search.model';
import { Position } from 'src/app/common/models/position.model';

const API_URL = '/positions';

@Injectable({
  providedIn: 'root',
})
export class PositionsApi {
  public apiUrl = API_URL;
  constructor(private http: HttpClient) {}

  public getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.apiUrl}`);
  }
}

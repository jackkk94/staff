import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { UserSearchFilter } from '../models/user-search.model';
import { SearchResponse } from 'src/app/common/models/search.model';
import { UserUpdateRequest } from '../../user/components/user/models/user.model';

const API_URL = '/users';

@Injectable({
  providedIn: 'root',
})
export class UsersApi {
  public apiUrl = API_URL;
  constructor(private http: HttpClient) {}

  public getUsers(filter: UserSearchFilter): Observable<SearchResponse<User>> {
    return this.http.post<SearchResponse<User>>(`${this.apiUrl}`, { filter });
  }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  public updateUserById(id: string, data: UserUpdateRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/${id}`, { data });
  }
}

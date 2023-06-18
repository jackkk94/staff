import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { LoginRequest, LoginResponse } from 'src/app/common/models/auth.model';

const API_URL = '/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  public apiUrl = API_URL;
  constructor(private http: HttpClient) {}

  public login(form: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {
      data: form,
    });
  }
}

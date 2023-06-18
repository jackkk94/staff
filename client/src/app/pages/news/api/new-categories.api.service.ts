import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewCategory } from '../../new/models/new-category.model';

const API_URL = '/newCategories';

@Injectable({
  providedIn: 'root',
})
export class NewCategoriesApi {
  public apiUrl = API_URL;
  constructor(private http: HttpClient) {}

  public getNewCategories(): Observable<NewCategory[]> {
    return this.http.get<NewCategory[]>(`${this.apiUrl}`);
  }
}

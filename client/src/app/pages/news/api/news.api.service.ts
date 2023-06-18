import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { SearchResponse } from 'src/app/common/models/search.model';
import { NewsSearchFilter } from '../models/news-search.model';
import { NewRequest, New } from '../../new/models/new.model';

const API_URL = '/news';

@Injectable({
  providedIn: 'root',
})
export class NewsApi {
  public apiUrl = API_URL;
  constructor(private http: HttpClient) {}

  public getNews(filter: NewsSearchFilter): Observable<SearchResponse<New>> {
    return this.http.post<SearchResponse<New>>(`${this.apiUrl}`, { filter });
  }

  public getNewById(id: string): Observable<New> {
    return this.http.get<New>(`${this.apiUrl}/${id}`);
  }

  public updateNewById(id: string, data: NewRequest): Observable<New> {
    return this.http.post<New>(`${this.apiUrl}/${id}`, { data });
  }

  public createNew(data: NewRequest): Observable<New> {
    return this.http.post<New>(`${this.apiUrl}/create`, { data });
  }
}

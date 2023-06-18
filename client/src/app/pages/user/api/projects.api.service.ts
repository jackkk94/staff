import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/common/models/project.model';

const API_URL = '/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApi {
  public apiUrl = API_URL;
  constructor(private http: HttpClient) {}

  public getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }
}

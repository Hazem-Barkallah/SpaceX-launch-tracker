import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch';
@Injectable({
  providedIn: 'root'
})
export class SpacexApi {
  private baseUrl = 'https://api.spacexdata.com/v4';
  constructor(private http: HttpClient) {}

    getUpcomingLaunches(): Observable<Launch[]> {
      return this.http.get<Launch[]>(`${this.baseUrl}/launches/upcoming`);
    }
}

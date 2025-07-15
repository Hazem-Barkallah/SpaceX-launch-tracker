import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Launch } from '../models/launch';
@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private baseUrl = 'https://api.spacexdata.com/v4';
  private http=inject(HttpClient);
    getUpcomingLaunches(): Observable<Launch[]> {
      return this.http.get<Launch[]>(`${this.baseUrl}/launches/upcoming`).pipe(map(launches =>launches.map(launch => ({
        id: launch.id,
        name: launch.name,
        date_local: launch.date_local,
        details: launch.details,
        rocket: launch.rocket,
        success: launch.success,
        upcoming: launch.upcoming,
        flight_number: launch.flight_number,
      })))
      );
    }
    getPastlaunches(): Observable<Launch[]> {
      return this.http.get<Launch[]>(`${this.baseUrl}/launches/past`).pipe(map(launches =>launches.map(launch => ({
        id: launch.id,
        name: launch.name,
        date_local: launch.date_local,
        details: launch.details,
        rocket: launch.rocket,
        success: launch.success,
        upcoming: launch.upcoming,
        flight_number: launch.flight_number,
      })))
      );
    }
    getLaunchById(id: string): Observable<Launch> {
      return this.http.get<Launch>(`${this.baseUrl}/launches/${id}`);
    }
}

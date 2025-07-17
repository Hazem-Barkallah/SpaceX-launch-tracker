import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Rocket } from '../models/rocket';

@Injectable({
  providedIn: 'root'
})
export class RocketsApi {
  private baseUrl = 'https://api.spacexdata.com/v4/rockets';
  private http=inject(HttpClient);
  getAllRockets(){
    return this.http.get<Rocket[]>(this.baseUrl);
  }
}

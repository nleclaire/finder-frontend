import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl = 'http://localhost:9092/api/cities';
  cities: any;

  constructor(private http: HttpClient) { }

  getCities(): any{
    return this.http.get(this.apiUrl);
  }

}

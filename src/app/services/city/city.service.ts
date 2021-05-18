import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl = 'https://glacial-reef-44046.herokuapp.com/api/cities';
  cities: any;

  constructor(private http: HttpClient) { }

  getCities(): any{
    // get JWT token from localStorage
    // const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        // Authorization: `Bearer ${token}`
        // 'Access-Control-Allow-Methods': 'GET',
      }),
    };
    return this.http.get(this.apiUrl, requestOptions);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiUrl = 'https://glacial-reef-44046.herokuapp.com/api/cities/1/restaurants';
  restaurants$: any;

  constructor(private http: HttpClient) { }

  getRestaurants$(): any {
    // get JWT token from localStorage
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.restaurants$ = this.http.get(this.apiUrl, requestOptions);
  }
}

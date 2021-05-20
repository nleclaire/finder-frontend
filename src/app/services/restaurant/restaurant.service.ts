import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiUrl = 'https://glacial-reef-44046.herokuapp.com/api/cities/1/restaurants';
  restaurants$: any;

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getRestaurants$(): any {
    // get JWT token from localStorage, create headers object
    const headers = this.httpService.getAuthenticationHeaders();
    return this.restaurants$ = this.http.get(this.apiUrl, headers);
  }
}

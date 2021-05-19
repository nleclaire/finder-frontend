import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  apiUrl = 'https://glacial-reef-44046.herokuapp.com/api/cities/1/restaurants/7/menu';
  menuItems$: any;

  constructor(private http: HttpClient) { }

  getMenuItems$(): any {
    // get JWT token from localStorage
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.menuItems$ = this.http.get(this.apiUrl, requestOptions);
  }
}

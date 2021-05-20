import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  apiUrl = 'https://glacial-reef-44046.herokuapp.com/api/cities/1/restaurants/7/menu';
  menuItems$: any;
  errorText: string;
  navSubject = new Subject();
  errorSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  addMenuItem(newItem): any {
    console.log(newItem);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(this.apiUrl, newItem, requestOptions);
  }

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

  getAuthErrorText(statusCode: any): string{
    console.log('STATUS: ' + statusCode);

    switch (statusCode){
      case 409:
        this.errorSubject.next('Menu Item already exists!');
        break;
      // case 403:
      //   this.errorSubject.next('Incorrect Password!!');
      //   break;
      // case 404:
      //   this.errorSubject.next('User with that email does not exist!!');
      //   break;
      default:
        console.log(statusCode);
        return 'You dun messed up now!';
    }
  }
}
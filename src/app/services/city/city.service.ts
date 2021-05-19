import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl = 'https://glacial-reef-44046.herokuapp.com/api/cities';
  cities$: any;
  // citiesSubject = new Subject();

  constructor(private http: HttpClient) { }

  // returns an observable
  getCities$(): any{
    // get JWT token from localStorage
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.cities$ = this.http.get(this.apiUrl, requestOptions);

    // this.cities$.subscribe(response => {
    //   this.citiesSubject.next(response);
    // });
  }

  createCity(cityObject): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }),
    };
    this.http.post(this.apiUrl, cityObject, requestOptions)
      .subscribe(response => console.log(response));
  }

}

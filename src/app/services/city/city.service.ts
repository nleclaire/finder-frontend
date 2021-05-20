import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl = 'https://glacial-reef-44046.herokuapp.com/api/cities';
  cities$: any;
  citiesSubject = new Subject();

  constructor(private http: HttpClient, private httpService: HttpService) { }

  // returns an observable
  getCities$(): any{
    // set headers using http service
    const headers = this.httpService.getAuthenticationHeaders();
    return this.cities$ = this.http.get(this.apiUrl, headers);
  }

  // emit a new city filtered by name
  getCity(name: string): any {
    this.getCities$().subscribe(response => {
      return this.citiesSubject.next(response.filter(item => item.name === name)); // then is now
    });
  }

  createCity(cityObject): any {
    const headers = this.httpService.getAuthenticationHeaders();
    this.http.post(this.apiUrl, cityObject, headers)
      .subscribe(response => this.citiesSubject.next(response));
  }

}

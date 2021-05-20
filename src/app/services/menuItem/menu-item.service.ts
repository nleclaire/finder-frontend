import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {HttpService} from '../http/http.service';


@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  apiUrl = 'https://glacial-reef-44046.herokuapp.com/api/cities/1/restaurants/7/menu';
  menuItems$: any;
  errorText: string;
  navSubject = new Subject();
  errorSubject = new Subject();
  menuItemsSubject = new BehaviorSubject('default');
  menuItemModSubject = new BehaviorSubject<boolean>(false);
  menuItemId: number;
  isEditing = this.menuItemModSubject.asObservable();

  constructor(private http: HttpClient, private httpService: HttpService) { }

  // tslint:disable-next-line:typedef
  menuItemEditing(editAction: boolean) {
    this.menuItemModSubject.next(editAction);
  }
  addMenuItem(newItem): any {
    console.log(newItem);
    const headers = this.httpService.getAuthentication();
    return this.http
      .post(this.apiUrl, newItem, headers);
  }

  updateMenuItem(updatedItem): any {
    console.log(updatedItem);
    const headers = this.httpService.getAuthentication();
    return this.http
      .put(this.apiUrl + '/' + this.menuItemId, updatedItem, headers);
  }

  getMenuItems$(): any {
    // get JWT token from localStorage
    const headers = this.httpService.getAuthentication();
    return this.menuItems$ = this.http.get(this.apiUrl, headers);
  }

  getSingleMenuItem(menuItemId): any {
    this.getMenuItems$().subscribe(response => {
      this.menuItemId = menuItemId;
      // tslint:disable-next-line:triple-equals
      return this.menuItemsSubject.next(response.filter(item => item.id == menuItemId));
    });
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

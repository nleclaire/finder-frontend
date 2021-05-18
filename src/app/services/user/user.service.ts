import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

const herokuUrl = 'https://glacial-reef-44046.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;
  errorText: string;
  navSubject = new Subject();
  // searchSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(newUser): void {
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => {
        localStorage.removeItem('currentError');
        this.router.navigate(['']);
      }, err => this.getAuthErrorText(err['status'])
    );
  }

  loginUser(user): void {
    // console.log(user);
    this.http.post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', user);
        localStorage.setItem('token', `${token}`);
        localStorage.removeItem('currentError');
        this.router.navigate(['']);
        this.currentUser = user.emailAddress;
        this.navSubject.next(this.currentUser);
        // this.searchSubject = new BehaviorSubject(this.currentUser);
        // this.searchSubject.next(this.currentUser);
      }, err => this.getAuthErrorText(err['status'])
    );
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('currentError');
    this.currentUser = null;
    this.navSubject.next(this.currentUser);
    // this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }

  getAuthErrorText(statusCode: any): string{
    console.log('STATUS: ' + statusCode);
    console.log('Current error: ' + localStorage.getItem('currentError'));

    switch (statusCode){
      case 409:
        localStorage.setItem('currentError', 'User already exists!');
        break;
      case 403:
        localStorage.setItem('currentError', 'Incorrect Password!');
        break;
      case 404:
        localStorage.setItem('currentError', 'User with that email does not exist!');
        break;
      default:
        console.log(statusCode);
        return 'You dun messed up now!';
    }
  }
}

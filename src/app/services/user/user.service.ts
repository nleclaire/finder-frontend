import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

const herokuUrl = 'https://glacial-reef-44046.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: string;
  errorText: string;
  // navSubject = new Subject();
  // searchSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(newUser): void {
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => {
        // localStorage.removeItem('currentError');
        this.router.navigate(['/']);
      }, err =>
        // localStorage.setItem('currentError', `${this.getAuthErrorText(err)}`));
        console.log(err)
      );
  }

  loginUser(user): void {
    // console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.emailAddress}`);
        localStorage.setItem('token', `${token}`);
        // localStorage.removeItem('currentError');
        this.router.navigate(['/']);
        // this.currentUser = user.emailAddress;
        // this.navSubject.next(this.currentUser);
        // this.searchSubject = new BehaviorSubject(this.currentUser);
        // this.searchSubject.next(this.currentUser);
      }, err => console.log(err)); // localStorage.setItem('currentError', `${this.getAuthErrorText(err)}`));
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('currentError');
    this.currentUser = '';
    // this.navSubject.next(this.currentUser);
    // this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }

  // getAuthErrorText(response: any): string{
  //   // console.log("STATUS: " + response['status']);
  //   // console.log('Current error: ' + localStorage.getItem('currentError'))
  //   if (response['status'] == 409) {
  //     console.log(409);
  //     return 'User already exists!';
  //   }
  //   if (response['status'] == 403) {
  //     console.log(403);
  //     return 'Wrong password provided!';
  //   }
  //   if (response['status'] == 404) {
  //     console.log(404);
  //     return 'User with these credentials does not exist!';
  //   }
  // }
}

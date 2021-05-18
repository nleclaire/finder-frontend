import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public emailAddress: string;
  public password: string;
  errorText = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    const user = {emailAddress: this.emailAddress, password: this.password};
    this.userService.loginUser(user);
  }

}

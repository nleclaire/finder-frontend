import { Component, OnInit } from '@angular/core';
import {CityService} from '../../services/city/city.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.less']
})
export class CitiesPageComponent implements OnInit {
  cities: [];
  currentUser: any;
  isFormVisible: boolean;

  name: string;

  constructor(private cityService: CityService, private userService: UserService) { }

  ngOnInit(): void {
    this.cityService.getCities$().subscribe(response => this.cities = response);
    this.currentUser = this.userService.currentUser;
  }

  toggleAddTopicForm(): void{
    this.isFormVisible = !this.isFormVisible;
  }

  createCity(): void {
    // expected fields for POST "/api/cities":
    //    name
    const cityObject = JSON.stringify({ name: this.name });
    this.cityService.createCity(cityObject);
  }

}

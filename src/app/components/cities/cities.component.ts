import { Component, OnInit } from '@angular/core';
import {CityService} from '../../services/city/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less']
})
export class CitiesComponent implements OnInit {
  cities: [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities$().subscribe(response => this.cities = response);
  }

}

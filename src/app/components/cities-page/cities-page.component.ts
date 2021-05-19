import { Component, OnInit } from '@angular/core';
import {CityService} from '../../services/city/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.less']
})
export class CitiesPageComponent implements OnInit {
  cities: [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities$().subscribe(response => this.cities = response);
  }

}

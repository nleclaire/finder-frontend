import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CityService} from '../../services/city/city.service';

@Component({
  selector: 'app-restaurants-screen',
  templateUrl: './restaurants-screen.component.html',
  styleUrls: ['./restaurants-screen.component.less']
})
export class RestaurantsScreenComponent implements OnInit {
  cities: any;
  cityName: string;
  currentCity: any;

  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  // subscribe to params to get city name => filter cities by name and return single city object
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.cityName = params.name;
      this.cityService.citiesSubject.subscribe(response => {
        this.currentCity = response;
        console.log(this.currentCity);
      });
      this.cityService.getCity(this.cityName);
      // strange async loop ^^ getCity is called first, then our citiesSubject subscriber returns
      // w/ value emitted by citiesSubject
    });
  }

}

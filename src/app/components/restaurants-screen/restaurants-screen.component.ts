import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CityService} from '../../services/city/city.service';
import {RestaurantService} from '../../services/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurants-screen',
  templateUrl: './restaurants-screen.component.html',
  styleUrls: ['./restaurants-screen.component.less']
})
export class RestaurantsScreenComponent implements OnInit {
  cities: any;
  cityName: string;
  currentCity: any;

  restaurants: any;

  constructor(private route: ActivatedRoute, private cityService: CityService, private restaurantService: RestaurantService) { }

  // subscribe to params to get city name
  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.cityName = params.name;

      // subject will emit a new city object, so we must subscribe before then
      this.cityService.citiesSubject.subscribe(response => {
        this.currentCity = response;
        console.log(this.currentCity);
      });

      // emit a new city, filtered by name
      this.cityService.getCity(this.cityName);

      // set restaurants
      this.getRestaurants();
      console.log(this.restaurants);
    });
  }

  getRestaurants(): any {
    this.restaurants = this.restaurantService.getRestaurants$()
      .subscribe(response => {
        this.restaurants = response;
    });
  }

}

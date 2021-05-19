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

  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities$().subscribe(response => this.cities = response);
    this.route.params.subscribe(response => {
      console.log(response);
    });
  }

}

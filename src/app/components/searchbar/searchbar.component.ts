import { Component, OnInit } from '@angular/core';
import {CityService} from '../../services/city/city.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.less']
})
export class SearchbarComponent implements OnInit {
  searchText: any;
  cities: any;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities().subscribe(response => { console.log(response); });
  }

}

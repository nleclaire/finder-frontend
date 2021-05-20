import {Component, Input, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant/restaurant.service';
import {MenuItemService} from '../../services/menuItem/menu-item.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.less']
})
export class RestaurantsComponent implements OnInit {
  // cities: [];
  // restaurants: [];
  // menuItems: any[];
  // errorText = '';
  // @Input() isEditing = false;

  constructor() { }

  ngOnInit(): void {
    }

}

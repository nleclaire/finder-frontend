import {Component, Input, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant/restaurant.service';
import {MenuItemService} from '../../services/menuItem/menu-item.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.less']
})
export class RestaurantsComponent implements OnInit {
  cities: [];
  restaurants: [];
  menuItems: any[];
  errorText = '';
  @Input() isEditing = false;

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.menuItemService.getMenuItems$().subscribe(response => {
      this.menuItems = response;
      console.log(this.menuItems);
    });
    this.menuItemService.errorSubject.subscribe((error: string) => this.errorText = error);
  }
  editingEnabled(): void {
    this.isEditing = true;
  }

}

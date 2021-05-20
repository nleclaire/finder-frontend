import {Component, Input, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant/restaurant.service';
import {MenuItemService} from '../../services/menuItem/menu-item.service';

@Component({
  selector: 'app-menu-items-list',
  templateUrl: './menu-items-list.component.html',
  styleUrls: ['./menu-items-list.component.less']
})
export class MenuItemsListComponent implements OnInit {
  cities: [];
  restaurants: [];
  menuItems: any[];
  errorText = '';
  @Input() isEditing = false;
  editAction: boolean;

  constructor(private menuItemService: MenuItemService) { }

  ngOnChanges(): void {
    this.getMenuItems();
  }
  ngOnInit(): void {
    this.getMenuItems();
    this.menuItemService.menuItemModSubject.subscribe(editAction => this.editAction = editAction);
  }
  editingEnabled(): void {
    this.menuItemService.menuItemEditing(true);
    console.log(this.editAction);
  }
  editingDisabled(): void {
    this.menuItemService.menuItemEditing(false);
    console.log(this.editAction);
  }
  getMenuItems(): any {
    this.menuItemService.getMenuItems$().subscribe(response => {
      this.menuItems = response;
      console.log(this.menuItems);
    });
    this.menuItemService.errorSubject.subscribe((error: string) => this.errorText = error);
  }

}

import { Component, OnInit } from '@angular/core';
import {MenuItemService} from '../../services/menuItem/menu-item.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.less']
})
export class MenuItemsComponent implements OnInit {

  public menuItemName: string;
  public menuItemDescription: string;
  errorText = '';
  menuItems: any[];
  isEditing;

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.menuItemService.getMenuItems$().subscribe(response => {
      this.menuItems = response;
      console.log(this.menuItems);
    });
    this.menuItemService.errorSubject.subscribe((error: string) => this.errorText = error);
  }

  addMenuItem(): any {
    const newItem = {name: this.menuItemName, description: this.menuItemDescription};
    this.menuItemService.addMenuItem(newItem).subscribe(response => {
      this.menuItems = [...this.menuItems, response];
     });
  }

}

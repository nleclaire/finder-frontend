import { Component, OnInit } from '@angular/core';
import {MenuItemService} from '../../services/menuItem/menu-item.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.less']
})
export class MenuItemsComponent implements OnInit {

  menuItems: [];

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.menuItemService.getMenuItems$().subscribe(response => {
      this.menuItems = response;
      console.log(this.menuItems);
    });
  }

}

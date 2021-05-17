import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      M.AutoInit();
      const options = {
        fullWidth: true,
        indicators: true
      };
      const elem = document.querySelector('.carousel');
      const instance = M.Carousel.init(elem, options);
    });

  }

}

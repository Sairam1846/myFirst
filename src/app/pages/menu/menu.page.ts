import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'SalesDashboard',
      url: '/menu/sales-dashboard'
    },
    {
      title: 'Products',
      url: '/menu/products'
    },
    {
      title: 'Sectors',
      url: '/menu/sectors'
    },
    {
      title: 'Regions',
      url: '/menu/regions'
    },
    {
      title: 'Channels',
      url: '/menu/channels'
    },
    {
      title: 'Geography',
      url: '/menu/geography'
    },
    {
      title: 'DailySales',
      url: '/menu/daily-sales'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit(): void {


  }

}

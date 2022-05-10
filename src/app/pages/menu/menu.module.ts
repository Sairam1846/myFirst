import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import {  Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'sales-dashboard',
        loadChildren: () => import('../sales-dashboard/sales-dashboard.module').then( m => m.SalesDashboardPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'sectors',
        loadChildren: () => import('../sectors/sectors.module').then( m => m.SectorsPageModule)
      },
      {
        path: 'regions',
        loadChildren: () => import('../regions/regions.module').then( m => m.RegionsPageModule)
      },
      {
        path: 'channels',
        loadChildren: () => import('../channels/channels.module').then( m => m.ChannelsPageModule)
      },
      {
        path: 'geography',
        loadChildren: () => import('../geography/geography.module').then( m => m.GeographyPageModule)
      },
      {
        path: 'daily-sales',
        loadChildren: () => import('../daily-sales/daily-sales.module').then( m => m.DailySalesPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/sales-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}

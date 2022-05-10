import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailySalesPageRoutingModule } from './daily-sales-routing.module';

import { DailySalesPage } from './daily-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailySalesPageRoutingModule
  ],
  declarations: [DailySalesPage]
})
export class DailySalesPageModule {}

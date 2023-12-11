// tab2.module.ts
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { BolosPage } from './Bolos.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: BolosPage }]),
  ],
  declarations: [BolosPage, CurrencyPipe],
})
export class BolosPageModule {}

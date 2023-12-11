import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolosPage } from './Bolos.page';

const routes: Routes = [
  {
    path: '',
    component: BolosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolosPageRoutingModule {}

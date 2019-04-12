import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RemoveReptileModalPage } from './remove-reptile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveReptileModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemoveReptileModalPage]
})
export class RemoveReptileModalPageModule {}

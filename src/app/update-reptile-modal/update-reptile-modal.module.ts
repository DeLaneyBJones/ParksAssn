import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateReptileModalPage } from './update-reptile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateReptileModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateReptileModalPage]
})
export class UpdateReptileModalPageModule {}

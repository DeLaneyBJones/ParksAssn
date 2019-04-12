import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReptileDetailsPage } from './reptile-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReptileDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReptileDetailsPage]
})
export class ReptileDetailsPageModule {}

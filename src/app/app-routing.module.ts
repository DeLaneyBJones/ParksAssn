import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'park-list', loadChildren: './park-list/park-list.module#ParkListPageModule' },
  { path: 'reptile-details', loadChildren: './reptile-details/reptile-details.module#ReptileDetailsPageModule' },
  { path: 'park-map', loadChildren: './park-map/park-map.module#ParkMapPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'add-reptile-modal', loadChildren: './add-reptile-modal/add-reptile-modal.module#AddReptileModalPageModule' },
  { path: 'update-reptile-modal', loadChildren: './update-reptile-modal/update-reptile-modal.module#UpdateReptileModalPageModule' },
  { path: 'remove-reptile-modal', loadChildren: './remove-reptile-modal/remove-reptile-modal.module#RemoveReptileModalPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

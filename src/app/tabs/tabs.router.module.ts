import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'parks',
        children: [
          {
            path: '',
            loadChildren: '../park-list/park-list.module#ParkListPageModule'
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../park-map/park-map.module#ParkMapPageModule'
          }
        ]
      },
      {
        path: 'details/:id',
        children: [{
          path: '',
          loadChildren: '../reptile-details/reptile-details.module#ReptileDetailsPageModule'
        }]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/parks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

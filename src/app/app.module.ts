import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { ModalPage } from './modal/modal.page'; 
import { AddReptileModalPage } from './add-reptile-modal/add-reptile-modal.page';
import { RemoveReptileModalPage } from './remove-reptile-modal/remove-reptile-modal.page';
import { UpdateReptileModalPage } from './update-reptile-modal/update-reptile-modal.page';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

import { ParkData } from './providers/park-data';

@NgModule({
  declarations: [AppComponent, AddReptileModalPage, RemoveReptileModalPage, UpdateReptileModalPage],
  entryComponents: [AddReptileModalPage, RemoveReptileModalPage, UpdateReptileModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ParkData
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

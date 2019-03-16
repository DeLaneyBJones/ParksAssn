import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ParkData } from '../app/providers/park-data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ ParkData ]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public parkData: ParkData
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    parkData.load();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

export class ParkListPage {
  parks: Array<object> = [];

  constructor(public navCtrl: NavController, public parkData: ParkData){
    parkData.getParks().then(Result => {
      this.parks = Result;
    })
  }
  goParkDetails(theParkData){
    console.log(theParkData);
  }
}

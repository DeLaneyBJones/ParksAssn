import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-park-details',
  templateUrl: './park-details.page.html',
  styleUrls: ['./park-details.page.scss'],
})
export class ParkDetailsPage {
  parkInfo: Object;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   this.parkInfo = navParams.data.parkData;
  //   console.log(this.parkInfo);
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}

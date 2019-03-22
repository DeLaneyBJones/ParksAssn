import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ParkData } from '../providers/park-data'
import { ActivatedRoute } from '@angular/router';



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

  constructor(public parkData: ParkData, public route: ActivatedRoute) {
    var id = this.route.snapshot.paramMap.get('id');
    this.parkInfo = parkData.getPark(id);
    console.log("I am going to log the park information now...")
    console.log(this.parkInfo);
  }

}

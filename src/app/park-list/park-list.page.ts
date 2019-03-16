import { Component, OnInit } from '@angular/core';

import { ParkData } from '../providers/park-data';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage implements OnInit {

  parks: Array<Object> = [];

  constructor(public navCtrl: NavController, public parkData: ParkData, public router: Router) {
    parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
   }

   goParkDetails(theParkData){
     let url = './tabs/details/' + theParkData.id;
     this.router.navigate([url]); 
     console.log(theParkData);
   }

  ngOnInit() {
  }

}

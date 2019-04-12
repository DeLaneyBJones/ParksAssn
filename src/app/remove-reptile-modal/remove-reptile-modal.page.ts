import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


import { ParkData } from '../providers/park-data';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-reptile-modal',
  templateUrl: './remove-reptile-modal.page.html',
  styleUrls: ['./remove-reptile-modal.page.scss'],
})
export class RemoveReptileModalPage implements OnInit {

  parks: Array<Object> = [];
  searchQuery: string = '';

  constructor(navParams: NavParams, public modalController: ModalController, public parkData: ParkData) {
    parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
  }

  async dismiss(){
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

  getParks(event)
  {
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
    let queryString = event.target.value;
    if(queryString != undefined)
    {
      if(queryString.trim() == '')
      {
        return;
      }
      this.parkData.getFilteredParks(queryString).then(theResult => {
        this.parks = theResult;
      })
    }
  }

  resetList(event)
  {
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
  }

}

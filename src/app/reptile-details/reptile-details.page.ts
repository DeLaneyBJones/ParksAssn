import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ParkData } from '../providers/park-data'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reptile-details',
  templateUrl: './reptile-details.page.html',
  styleUrls: ['./reptile-details.page.scss'],
})

export class ReptileDetailsPage {

  reptileInfo: Object;
  observations: Boolean;
  feed: Boolean;
  basicInfo: Boolean;

  constructor(public reptileData: ParkData, public route: ActivatedRoute) {
    var id = this.route.snapshot.paramMap.get('id');
    this.reptileInfo = reptileData.getPark(id);
    this.observations = false;
    this.feed = false;
    this.basicInfo = false;
    console.log(this.reptileInfo);
  }

}

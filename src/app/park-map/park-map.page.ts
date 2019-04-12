import { Component, OnInit } from '@angular/core';
import { ParkData } from '../providers/park-data'
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
//import { ModalPage } from '../modal/modal.page';
import { AddReptileModalPage } from '../add-reptile-modal/add-reptile-modal.page';
import { RemoveReptileModalPage } from '../remove-reptile-modal/remove-reptile-modal.page';
import { UpdateReptileModalPage } from '../update-reptile-modal/update-reptile-modal.page';

@Component({
  selector: 'app-park-map',
  templateUrl: './park-map.page.html',
  styleUrls: ['./park-map.page.scss'],
})
export class ParkMapPage {

  reptileInfo: Object;
  reptilesAdd: Boolean;
  reptilesRemove: Boolean;
  reptilesUpdate: Boolean;


  constructor(public reptileData: ParkData, public route: ActivatedRoute, public modalController: ModalController) {
    this.reptilesAdd = false;
    this.reptilesRemove = false;
    this.reptilesUpdate = false;
    console.log(this.reptileInfo);
  }

  async presentAddReptileModal() {
    const modal = await this.modalController.create({
      component: AddReptileModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentRemoveReptileModal() {
    const modal = await this.modalController.create({
      component: RemoveReptileModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentUpdateReptileModal() {
    const modal = await this.modalController.create({
      component: UpdateReptileModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}

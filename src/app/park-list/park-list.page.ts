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
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public parkData: ParkData, public router: Router) {
    parkData.getParks().then(theResult => {
      this.parks = theResult;;
    })
   }

   goParkDetails(theParkData){
     let url = './tabs/details/' + theParkData.vendor_id;
     this.router.navigate([url]); 
     console.log("This is the park data...");
     console.log(theParkData);
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

   customHeaderFn(record, recordIndex, records){
    if(recordIndex > 0)
    {
        if(record.vendor_name.charAt(0) !== records[recordIndex-1].vendor_name.charAt(0)){
            return record.vendor_name.charAt(0);
        } else {
            return null;
        }
    } else {
        return record.vendor_name.charAt(0);
    }
  }

  ngOnInit() {
  }

}

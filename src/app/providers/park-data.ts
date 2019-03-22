import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';




@Injectable()
export class ParkData {
    data: any = null;

    load()
    {
        if(this.data)
        {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('assets/data/data.json')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data;
                resolve(this.data);
            });
        });
    }

    getParks()
    {
        return this.load().then(data => {
            return data;
        });
    }

    getPark(id: string)
    {
        for(var i = 0; i < this.data.length; i++)
        {
            if(this.data[i].id == id)
            {
                return this.data[i];
            }
        }
        return "Not found!";
        
    }

    getFilteredParks(queryString)
    {
        return this.load().then(Parks => {
            let theFilteredParks: any = [];

            for (let thePark of Parks)
            {
                if(thePark.name.toLowerCase().indexOf(queryString.toLowerCase())> -1)
                {
                    theFilteredParks.push(thePark);
                }
            }
            return theFilteredParks;
        });
    }

    constructor(public http: Http){}
}
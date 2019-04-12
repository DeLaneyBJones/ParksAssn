import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Type } from '@angular/compiler/src/core';

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
            this.http.get('http://bonsai.lcsc.edu/dbjones2518/reptiles/api.php/records/vendors?order=vendor_name')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data.records;
                //I should add an alphabatizer here...
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
            if(this.data[i].vendor_id == id)
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
                if(thePark.vendor_name.toLowerCase().indexOf(queryString.toLowerCase())> -1)
                {
                    theFilteredParks.push(thePark);
                }
            }
            return theFilteredParks;
        });
    }

    constructor(public http: Http){}
}
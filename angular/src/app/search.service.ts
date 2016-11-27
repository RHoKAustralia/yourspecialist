import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Provider } from './provider.interface';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {

  searchUrl:string;
  http: Http;
  public providers:ReplaySubject<any> = new ReplaySubject<any>();

  constructor(http:Http) {
    this.searchUrl = "http://54.206.67.82/services/providersearch";
  }

  findProviders (postcode: string, clusterType:string): ReplaySubject<any[]> {
    /*
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.searchUrl, { postcode: postcode, cluster: clusterType }, options)
      .map(this.extractData)
      .catch(this.handleError);

      */
      this.extractData(null);
      return this.providers;
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }

  private extractData(res: Response) {
    let providers = [{
      "Website": "www.cerebralpalsy.org.au",
      "Registered Provider Name": "Cerebral Palsy Alliance",
      "Email Address": "info@cerebralpalsy.org.au",
      "Head Office Address": "187 Allambie Rd, ALLAMBIE HEIGHTS, NSW, 2100",
      "Support Clusters": "Accommodation/Tenancy",
      "Head Office Location": "ALLAMBIE HEIGHTS",
      "Phone": "+610299758000",
      "geo": {
        "accurate": true,
        "data": [
          {"city": "Allambie Heights",
           "street_number": "187",
           "country": "Australia",
           "route": "Allambie Road",
           "country_shortcut": "AU",
           "administrative_areas": [
             {"type": "administrative_area_level_1", "name": "New South Wales", "short_name": "NSW"},
             {"type": "administrative_area_level_2", "name": "Warringah Council", "short_name": "Warringah"}
           ],
           "postal_code": "2100",
           "lat": -33.7576604,
           "lng": 151.2433084,
           "formatted_address": "187 Allambie Rd, Allambie Heights NSW 2100, Australia"
         }
       ]
     }
   }]
   this.providers.next(providers);
  }

  private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

}

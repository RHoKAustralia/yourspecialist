import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

export interface Provider {
    name: string;
    address?: {
        street?: string;
        postcode?: string;
    }
}

@Injectable()
export class SearchService {

  searchUrl:string;

  constructor() {
    this.searchUrl = ;
  }

  findProviders (postcode: string, clusterType:string): Observable<Provider[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.searchUrl, { postcode: postcode, cluster: clusterType }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

}

import { Component } from 'angular2/core';
import { SearchService } from './search.service';
import { SearchPipe } from './search-form.pipe';

@Componet({
  selector: 'search-list',
  pipes: [SearchPipe],
  directives: [ClusterRenderer],
  template: `<div>
    <ul>
      <li *ngFor="let cluster of clusters | search">
        <search-item-renderer [cluster]="cluster"></search-item-renderer>
      </li>
    </ul>
  </div>`
})

export class SearchList {
  constructor (public searchSevice:SearchService) {}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResults implements OnInit {

  public searchService: SearchService;
  public results: any[];

  constructor(searchService: SearchService, private router: Router) {
    var self = this;
    this.searchService = searchService;
    this.searchService.providers.subscribe(function(value) {
      self.results = value;
    });
  }

  ngOnInit() {
  }
}

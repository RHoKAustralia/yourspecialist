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

  constructor(searchService: SearchService, private router: Router) {
    this.searchService = searchService;
  }

  ngOnInit() {
  }
}

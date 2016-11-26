import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2MapModule } from 'ng2-map';
import { SearchForm } from './search-form/search-form.component';
import { SearchResults } from './search-results/search-results.component';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SearchForm,
    SearchResults
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2MapModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

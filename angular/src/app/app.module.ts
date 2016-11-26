import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2MapModule } from 'ng2-map';
import { SearchForm } from './search-form/search-form.component';
import { SearchResults } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchForm,
    SearchResults
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

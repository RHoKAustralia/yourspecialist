import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { Ng2MapModule } from 'ng2-map';
import { SearchService } from './search.service';
import { SearchForm } from './search-form/search-form.component';
import { SearchResults } from './search-results/search-results.component';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProviderCardComponent } from './provider-card/provider-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchForm,
    SearchResults,
    ProviderCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SearchForm
      },
      {
        path: 'providers',
        component: SearchResults
      }
    ]),
    Ng2MapModule,
    DropdownModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

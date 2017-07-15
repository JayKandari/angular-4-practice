import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

// ng-material imports.
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdDialogModule, MdListModule, MdCardModule} from '@angular/material';


// Import custom components..
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule, MdInputModule, MdDialogModule, MdCardModule
  ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

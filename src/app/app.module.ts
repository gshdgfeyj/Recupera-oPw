import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImovComponent } from './imov/imov.component';
import { ImovDetailComponent } from './imov-detail/imov-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ImovComponent,
    ImovDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

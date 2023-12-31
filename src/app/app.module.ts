import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologiesModule } from './technologies/components/decorators-input-output/secondCouple/child-second/technologies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TechnologiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

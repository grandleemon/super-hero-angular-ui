import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SuperHeroComponent } from './pages/super-hero/super-hero.component';
import { SuperHeroesListComponent } from './pages/super-heroes-list/super-heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroComponent,
    SuperHeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

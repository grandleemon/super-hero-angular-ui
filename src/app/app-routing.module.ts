import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SuperHeroComponent} from "./pages/super-hero/super-hero.component";

const routes: Routes = [
  {path: 'super-hero/:id', component: SuperHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

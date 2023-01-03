import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuperHeroComponent} from "./pages/super-hero/super-hero.component";
import {SuperHeroesListComponent} from "./pages/super-heroes-list/super-heroes-list.component";

const routes: Routes = [
  {path: '', component: SuperHeroesListComponent},
  {path: 'super-hero/:id', component: SuperHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

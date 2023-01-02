import {Component, OnInit} from '@angular/core';
import {SuperHeroService} from "./services/super-hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SuperHeroUI'
  loading = false

  constructor(public readonly superHeroService: SuperHeroService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.superHeroService.getAllSuperHeroes().subscribe(() => this.loading = false)
  }
}

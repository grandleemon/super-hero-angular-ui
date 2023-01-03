import {Component, OnInit} from '@angular/core';
import {SuperHeroService} from "../../services/super-hero.service";

@Component({
  selector: 'app-super-heroes-list',
  templateUrl: './super-heroes-list.component.html',
  styleUrls: ['./super-heroes-list.component.scss']
})
export class SuperHeroesListComponent implements OnInit{
  loading = false

  constructor(public readonly superHeroService: SuperHeroService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.superHeroService.getAllSuperHeroes().subscribe(() => this.loading = false)
  }
}

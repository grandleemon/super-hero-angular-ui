import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ISuperHero} from "../../models/super-hero";
import {SuperHeroService} from "../../services/super-hero.service";

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.scss']
})
export class SuperHeroComponent implements OnInit {
  constructor(private route: ActivatedRoute, private readonly superHeroService: SuperHeroService) {
  }

  loading = false
  heroDetails: ISuperHero

  ngOnInit(): void {
    this.loading = true
    const heroId = this.route.snapshot.paramMap.get("id");
    if (heroId) {
      this.superHeroService.getSuperHeroDetails(+heroId).subscribe(res => {
        this.heroDetails = res
        this.loading = false
      })
    }
  }
}

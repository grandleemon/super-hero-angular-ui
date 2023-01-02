import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ISuperHero} from "../models/super-hero";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  constructor(private http: HttpClient) { }

  superHeroes: ISuperHero[] = []

  getAllSuperHeroes(): Observable<ISuperHero[]> {
    return this.http.get<ISuperHero[]>("https://localhost:44357/api/super-heroes")
      .pipe(
        tap(superheroes => this.superHeroes = superheroes)
      )
  }
}

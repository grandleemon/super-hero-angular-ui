import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ISuperHero} from "../models/super-hero";
import {Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  constructor(private http: HttpClient) { }

  superHeroes: ISuperHero[] = []

  getAllSuperHeroes(): Observable<ISuperHero[]> {
    return this.http.get<ISuperHero[]>(environment.apiUrl)
      .pipe(
        tap(superheroes => this.superHeroes = superheroes)
      )
  }

  getSuperHeroDetails(id: number): Observable<ISuperHero> {
    return this.http.get<ISuperHero>(`${environment.apiUrl}/${id}`)
  }
}

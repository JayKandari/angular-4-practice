import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{

  HERO_DATA = HEROES;

  getHeroes(): Promise<Hero[]> {
    // Directly return a promise.
    // return Promise.resolve(HEROES);
    // Simulating a slow connection.
    return new Promise(resolve => {
      setTimeout(() => resolve(this.HERO_DATA), 10)
    });
  };

  addHero(hero): Promise<Hero[]>{
    this.HERO_DATA.push(hero);
    return Promise.resolve(this.HERO_DATA)
  };

  removeHero(index): Promise<Hero[]> {
    this.HERO_DATA.splice(index,1);
    return Promise.resolve(this.HERO_DATA)
  }
}

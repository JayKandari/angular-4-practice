import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
  getHeroes(): Promise<Hero[]> {
    // Directly return a promise.
    // return Promise.resolve(HEROES);
    // Simulating a slow connection.
    return new Promise(resolve => {
      setTimeout(() => resolve(HEROES), 10)
    });
  };
}

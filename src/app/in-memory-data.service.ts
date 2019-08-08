import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Rose' },
      { id: 2, name: 'Lilly' },
      { id: 3, name: 'Lotus' },
      { id: 4, name: 'Sunflower' },
      { id: 5, name: 'Hibiscus' },
      { id: 6, name: 'Water Lilly' },
      { id: 7, name: 'Blue Bell' },
      { id: 8, name: 'Tulips' },
      { id: 9, name: 'Jasmine' },
      { id: 10, name: 'Cauliflower' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

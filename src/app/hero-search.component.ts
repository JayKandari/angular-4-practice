import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {Pipe, PipeTransform} from '@angular/core';


@Component({
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styles: [`
    .query {
      width:100%;
    }
    .search_hero {
    }
    .search_hero .removeitem {
      color:red;
      cursor: pointer;
    }


  `]
})
export class HeroSearchComponent implements OnInit {
  @Input() query: string;
  @Output() myevent = new EventEmitter();
  heroes = [];
  filteredHeroes= [];
  searchterm = {
    name: this.query
  };
  deleteConfirm = true;
  selectedHero = null;


  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
    this.filter('');
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = this.filteredHeroes = heroes);
  }

  refresh() : void {
    this.getHeroes();
  }


  removeHero(i): void {
    this.heroService.removeHero(i).then(heroes => this.heroes = this.filteredHeroes = heroes);
  }

  filter(term) {
    term = term.trim().toLowerCase();
    this.filteredHeroes = this.heroes.filter(function(hero){
      if (term == '') {
        return true;
      }
      return hero.name.toLowerCase().indexOf(term) !== -1;
    });
    console.log('searching...', term, this.filteredHeroes)
  }

  removeHeroItem = function(i) {
    var cnf = (this.deleteConfirm)? confirm('Are you sure to delete "'+ this.filteredHeroes[i].name + '"?') : true;
    if (cnf) {
      // this.heroes.splice(i,1);
      this.removeHero(i);
    }
  };

  selectHero = function(hero) {
    console.log('selecting this hero: ', hero);
    hero = (this.selectedHero == hero)? null : hero;
    this.selectedHero = (hero != undefined)? hero : null;
  }

}

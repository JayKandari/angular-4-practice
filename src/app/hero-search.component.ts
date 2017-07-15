import { Component, Input, OnInit } from '@angular/core';
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
  `]
})
export class HeroSearchComponent implements OnInit {
  @Input() query: string;
  heroes = [];
  filteredHeroes= [];
  searchterm = {
    name: this.query
  };

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
    this.filter('');
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = this.filteredHeroes = this.heroes.concat(heroes));
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

  // assignCopy(){
  //  this.filteredHeroes = Object.assign([], this.heroes);
  // };

  // filterItem(value){
  //    if(!value) this.assignCopy(); //when nothing has typed
  //    this.filteredHeroes = Object.assign([], this.heroes).filter(
  //       item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
  //    )
  // }
  //when you fetch collection from server.
  // this.assignCopy();
}

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  title = 'Indian super-heroes';
  newhero = {
    name: '',
  };
  heroes = [];
  showDebugDialog = true;

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = this.heroes.concat(heroes));
  }


  addHero(hero): void {
    this.heroService.addHero(hero).then(heroes => this.heroes = heroes);
  }

  addNewHero = function(name) {
    if (name != '') {
      console.log('new hero name: '+ name);
      let hero = {id : this.heroes.length+1, name:name};
      this.addHero(hero);
      this.newhero.name = ''
    }
  };

  toggleDebug = function() {
    this.showDebugDialog = (this.showDebugDialog)? false: true;
  };
}

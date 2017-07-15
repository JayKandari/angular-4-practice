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
  deleteConfirm = true;
  selectedHero = null;

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = this.heroes.concat(heroes));
  }

  removeHero(i): void {
    this.heroService.removeHero(i).then(heroes => this.heroes = heroes);
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

  removeHeroItem = function(i) {
    var cnf = (this.deleteConfirm)? confirm('Are you sure to delete "'+ this.heroes[i].name + '"?') : true;
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

  toggleDebug = function() {
    this.showDebugDialog = (this.showDebugDialog)? false: true;
  };
}

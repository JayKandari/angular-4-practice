import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Indian super-heroes';
  newhero = {
    name: '',
  };
  heroes = HEROES;
  showDebugDialog = true;
  deleteConfirm = true;
  selectedHero = null;

  addNewHero = function(name) {
    if (name != '') {
      console.log('new hero name: '+ name);
      this.heroes.push ({id : this.heroes.length+1, name:name});
      this.newhero.name = ''
    }
  };

  removeHeroItem = function(i) {
    var cnf = (this.deleteConfirm)? confirm('Are you sure to delete "'+ this.heroes[i].name + '"?') : true;
    if (cnf) {
      this.heroes.splice(i,1);
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

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

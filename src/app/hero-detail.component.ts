import { Component, Input } from '@angular/core'
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  styles: [`
  .selected_hero {
    position: fixed;
    right:20px;
    top: 480px;
    width:500px;
  }
  `],
  template: `
  <div class="selected_hero" [hidden]="hero == null || hero == undefined">
  <md-card>
    <h4>Selected Hero : {{ (hero)? hero.name : 'Null'}}</h4>
    Data:
    <pre>
      {{hero | json}}
    </pre>
  </md-card></div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}

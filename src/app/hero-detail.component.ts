import { Component, Input } from '@angular/core'
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  styles: [`
  .selected_hero {
  }
  `],
  template: `
  <div class="selected_hero" [hidden]="hero == null">
  <md-card>
    <h4>Selected Hero : hero.name</h4>
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

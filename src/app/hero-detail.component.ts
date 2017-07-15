import { Component, Input } from '@angular/core'
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  styles: [`
  .selected_hero {
    background: magenta;
  }
  `],
  template: `
  <div class="selected_hero" [hidden]="hero == null">
    <h4>Selected Hero : hero.name</h4>
    Data:
    <pre>
      {{hero | json}}
    </pre>
  </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}

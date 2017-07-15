import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html'
})
export class HeroSearchComponent {
  @Input() query: string;
}

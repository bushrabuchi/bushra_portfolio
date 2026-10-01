import { Component, EventEmitter, Output } from '@angular/core';
import { TabId } from '../navbar/navbar.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Output() openTab = new EventEmitter<TabId>();
}

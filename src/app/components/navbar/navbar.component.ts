import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TabId = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface NavItem { id: TabId; label: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() activeTab: TabId = 'home';
  @Output() tabChange = new EventEmitter<TabId>();

  menuOpen = false;
  navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  selectTab(tab: TabId): void {
    this.tabChange.emit(tab);
    this.menuOpen = false;
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
}

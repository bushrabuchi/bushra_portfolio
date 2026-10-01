import { Component } from '@angular/core';
import { NavbarComponent, TabId } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  template: `
    <app-navbar [activeTab]="activeTab" (tabChange)="setTab($event)" />
    <main class="portfolio-stage" [attr.data-tab]="activeTab">
      @switch (activeTab) {
        @case ('home') { <app-hero (openTab)="setTab($event)" /> }
        @case ('about') { <app-about /> }
        @case ('skills') { <app-skills /> }
        @case ('experience') { <app-experience /> }
        @case ('projects') { <app-projects /> }
        @case ('contact') { <app-contact /> }
      }
    </main>
    <div class="stage-hint" aria-hidden="true">Use the navigation tabs to explore</div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeTab: TabId = 'home';

  setTab(tab: TabId): void {
    this.activeTab = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

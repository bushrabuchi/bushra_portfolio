import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Skill {
  name: string;
}
interface SkillGroup {
  title: string;
  caption: string;
  skills: Skill[];
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      title: 'Angular & Core Frontend',
      caption: 'Primary focus',
      skills: [
        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Angular Material' },
        { name: 'Reactive Forms' },
        { name: 'Signals' },
        { name: 'RxJS Observables' },
        { name: 'HttpClient' },
        { name: 'Lazy Loading' },
        { name: 'Route Guards' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'SCSS' },
        { name: 'Responsive Design' },
      ],
    },
    {
      title: 'Additional Frontend',
      caption: 'Libraries & frameworks',
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Redux' },
        { name: 'React Query' },
        { name: 'MUI' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
        { name: 'Backbone.js' },
        { name: 'RequireJS' },
        { name: 'jQuery' },
        { name: 'D3.js' },
        { name: 'C3.js' },
      ],
    },
    {
      title: 'Backend & Data',
      caption: 'APIs, databases & pipelines',
      skills: [
        { name: 'Python' },
        { name: 'Flask' },
        { name: 'FastAPI' },
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'REST APIs' },
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'SQL Validation' },
        { name: 'ETL Pipelines' },
      ],
    },
    {
      title: 'Quality & Delivery',
      caption: 'Testing & collaboration',
      skills: [
        { name: 'Angular Component Testing' },
        { name: 'Vitest' },
        { name: 'Playwright' },
        { name: 'Manual & Regression Testing' },
        { name: 'API Testing' },
        { name: 'Postman' },
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'npm' },
        { name: 'JIRA' },
        { name: 'Agile' },
        { name: 'Figma' },
        { name: 'GitHub Pages' },
      ],
    },
  ];
}

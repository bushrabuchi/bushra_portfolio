import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
interface Project {
  number: string;
  title: string;
  description: string;
  stack: string[];
  type: string;
  demo: string;
  github: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  currentPage = 0;

  projectsPerPage = 4;

  get displayProjects() {
    const start = this.currentPage * this.projectsPerPage;

    return this.projects.slice(start, start + this.projectsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.projects.length / this.projectsPerPage);
  }

  nextProjects() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  previousProjects() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
  projects: Project[] = [
    {
      number: '01',
      title: 'Travel Booking AI/ML',
      description:
        'Angular-based travel search and booking workflow with filters, reusable components and API integration.',
      stack: ['Angular', 'TypeScript', 'FastAPI'],
      type: 'FULL STACK',
      demo: 'https://travel-website-ai-ml-git-main-bushracc891-2262s-projects.vercel.app/',
      github: 'https://github.com/bushrabuchi/travel_website_AI-ML',
    },
    {
      number: '02',
      title: 'Travel BI Analytics',
      description:
        'Data-integrated analytics solution combining Python ETL, SQL and business dashboards.',
      stack: ['Python', 'Flask', 'PostgreSQL'],
      type: 'BI / DATA',
      demo: '#',
      github: '#',
    },
    {
      number: '03',
      title: 'Ticketing Platform',
      description:
        'AI-enabled concept for analysing job descriptions, skills and resume alignment.',
      stack: ['React', 'Node.js', 'Express'],
      type: 'AI / FULL STACK',
      demo: '#',
      github: 'https://github.com/bushrabuchi/flysmart-ticketing',
    },
    {
      number: '04',
      title: 'Sales Intelligence Dashboard',
      description: 'Interactive dashboard concept with KPIs, filters, charts and backend services.',
      stack: ['React', 'Redux', 'Tailwind CSS'],
      type: 'ANALYTICS',
      demo: '#',
      github: 'https://github.com/bushrabuchi/react-admin-dashboard-master',
    },
    
    {
      number: '05',
      title: 'Angular Dashboard',
      description: 'Angular dashboard with KPIs, filters, charts and backend services.',
      stack: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      type: 'FULL STACK',
      demo: 'https://bushrabuchi.github.io/angular-dashboard/',
      github: 'https://github.com/bushrabuchi/angular-dashboard',
    },
    {
      number: '06',
      title: 'Bushra Portfolio',
      description: 'Bushra Portfolio with Angular and TypeScript.',
      stack: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      type: 'FULL STACK',
      demo: 'https://bushrabuchi.github.io/bushra_portfolio/',
      github: 'https://github.com/bushrabuchi/bushra_portfolio',
    },
  ];
}

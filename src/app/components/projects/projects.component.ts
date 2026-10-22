import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  readonly projectsPerPage = 4;

  get displayProjects(): Project[] {
    const start = this.currentPage * this.projectsPerPage;
    return this.projects.slice(start, start + this.projectsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.projects.length / this.projectsPerPage);
  }

  nextProjects(): void {
    if (this.currentPage < this.totalPages - 1) this.currentPage++;
  }

  previousProjects(): void {
    if (this.currentPage > 0) this.currentPage--;
  }

  trackProject(_index: number, project: Project): string {
    return project.number;
  }

  // Empty links are intentional. The template hides unavailable actions.
  readonly projects: Project[] = [
    {
      number: '01',
      title: 'Workforce360',
      description:
        'Angular HR application with employee CRUD, reactive forms, REST API integration, theme and language controls, and sample attendance and reporting screens.',
      stack: ['Angular', 'TypeScript', 'Angular Material', 'RxJS'],
      type: 'ANGULAR / API',
      demo: 'https://bushrabuchi.github.io/workforce360/',
      github: 'https://github.com/bushrabuchi/workforce360',
    },
    {
      number: '02',
      title: 'ProcureAI Admin Platform',
      description:
        'Procurement frontend demo with supplier management, purchase orders, approval and rejection workflows, action history, Signals and local browser persistence.',
      stack: ['Angular', 'Angular Material', 'Signals', 'Vitest'],
      type: 'ANGULAR DEMO',
      demo: 'https://bushrabuchi.github.io/procureAI-admin-platform/',
      github: 'https://github.com/bushrabuchi/procureAI-admin-platform',
    },
    {
      number: '03',
      title: 'ProcureAI Supplier Portal',
      description:
        'Supplier frontend demo with RFQ browsing, quotation submission, form validation and demo session handling.',
      stack: ['Next.js', 'React', 'TypeScript', 'Zod'],
      type: 'FRONTEND DEMO',
      demo: 'https://procure-ai-supplier-portal.vercel.app/',
      github: 'https://github.com/bushrabuchi/procureAI-supplier-portal',
    },
    {
      number: '04',
      title: 'Customizable Angular Dashboard',
      description:
        'Dashboard demo with chart, statistics and table widgets, analytics, settings, theme controls and client-side route guards.',
      stack: ['Angular', 'TypeScript', 'Angular Material', 'Chart.js'],
      type: 'ANGULAR DEMO',
      demo: 'https://bushrabuchi.github.io/angular-dashboard/',
      github: 'https://github.com/bushrabuchi/angular-dashboard',
    },
    {
      number: '05',
      title: 'Travel Website with AI and ML',
      description:
        'React travel storefront with package search and FastAPI integration for fare estimates, recommendations and review sentiment. ML experiments use generated training datasets.',
      stack: ['React', 'SCSS', 'FastAPI', 'scikit-learn'],
      type: 'FULL STACK / ML',
      demo: 'https://travel-website-ai-ml.vercel.app/',
      github: 'https://github.com/bushrabuchi/travel_website_AI-ML',
    },
    {
      number: '06',
      title: 'Flysmart Ticketing',
      description:
        'Flight-search and booking demo with traveller details, simulated payment and e-ticket views. Express APIs support flight and booking data; no real tickets or payments are issued.',
      stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      type: 'FULL STACK DEMO',
      demo: 'https://flysmart-ticketing-5qbm.vercel.app/',
      github: 'https://github.com/bushrabuchi/flysmart-ticketing',
    },
    {
      number: '07',
      title: 'React Admin Dashboard',
      description:
        'Learning and demonstration dashboard with data grids, interactive charts, a calendar and validated forms.',
      stack: ['React', 'MUI', 'Redux Toolkit', 'Nivo'],
      type: 'FRONTEND DEMO',
      demo: '',
      github: 'https://github.com/bushrabuchi/react-admin-dashboard-master',
    },
    {
      number: '08',
      title: 'Bushra Portfolio',
      description:
        'Angular portfolio presenting professional experience, technical skills, project work and contact information through reusable components and responsive layouts.',
      stack: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      type: 'ANGULAR / PORTFOLIO',
      demo: 'https://bushra-portfolio-eight.vercel.app/',
      github: 'https://github.com/bushrabuchi/bushra_portfolio',
    },
    {
      number: '09',
      title: 'Travel BI Analytics',
      description:
        'Professional travel-agency BI application with sales and turnover dashboards, reporting and business-data validation.',
      stack: ['JavaScript', 'Python', 'SQL', 'D3.js'],
      type: 'PROFESSIONAL / BI',
      demo: '',
      github: '',
    },
    {
      number: '10',
      title: 'SkyTraacs Airline BI',
      description:
        'Professional airline analytics and reporting application, combining dashboard development, backend integration and validation of business metrics.',
      stack: ['JavaScript', 'Python', 'SQL'],
      type: 'PROFESSIONAL / BI',
      demo: '',
      github: '',
    },
    {
      number: '11',
      title: 'Mobile BI Application',
      description:
        'Professional BI application with a React-based interface, Python backend, REST API integration and interactive data visualizations.',
      stack: ['React', 'Python', 'REST APIs', 'Figma'],
      type: 'PROFESSIONAL / FULL STACK',
      demo: '',
      github: '',
    },
    {
      number: '12',
      title: 'TRAACS ETL Pipelines',
      description:
        'Professional Python pipelines that extract, transform and load travel-agency data for BI dashboards, with SQL checks for data consistency.',
      stack: ['Python', 'SQL', 'ETL'],
      type: 'PROFESSIONAL / DATA',
      demo: '',
      github: '',
    },
    {
      number: '13',
      title: 'SkyTraacs ETL Pipelines',
      description:
        'Professional airline-data pipelines supporting BI reporting through extraction, transformation, loading and data validation.',
      stack: ['Python', 'SQL', 'ETL'],
      type: 'PROFESSIONAL / DATA',
      demo: '',
      github: '',
    },
    {
      number: '14',
      title: 'Kidney Disease Classification',
      description:
        'Deep-learning image-classification learning project with model-development and experiment-tracking work. Built for educational use.',
      stack: ['Python', 'Deep Learning', 'MLflow'],
      type: 'ML / LEARNING',
      demo: '',
      github: 'https://github.com/bushrabuchi/Kidney-Disease-Classification-Deep-Learning-Project',
    },
    {
      number: '15',
      title: 'Boston House Price Prediction',
      description:
        'Machine-learning learning project with a regression notebook, saved model and Python web interface for house-price prediction.',
      stack: ['Python', 'Regression', 'Machine Learning'],
      type: 'ML / LEARNING',
      demo: '',
      github: 'https://github.com/bushrabuchi/bostonhousepricing',
    },
    {
      number: '16',
      title: 'MLflow Experiments',
      description:
        'Python experimentation repository with MLflow scripts and examples of text generation and summaries in different formats.',
      stack: ['Python', 'MLflow'],
      type: 'EXPERIMENTS',
      demo: '',
      github: 'https://github.com/bushrabuchi/mlflow-3.0',
    },
    {
      number: '17',
      title: 'Applied Machine Learning Projects',
      description:
        'Course projects covering predictive maintenance, patient-risk classification and banking credit-risk analysis, including model training and output validation.',
      stack: ['Python', 'scikit-learn', 'TensorFlow'],
      type: 'COURSE PROJECTS',
      demo: '',
      github: '',
    },
    {
      number: '18',
      title: 'Java Steganography',
      description:
        'College project exploring how text and image data can be hidden within digital media for message exchange.',
      stack: ['Java', 'Steganography'],
      type: 'ACADEMIC PROJECT',
      demo: '',
      github: '',
    },
  ];
}

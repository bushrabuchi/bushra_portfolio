import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Skill { name:string; level:number; }
interface SkillGroup { title:string; caption:string; skills:Skill[]; }
@Component({ selector:'app-skills', standalone:true, imports:[CommonModule], templateUrl:'./skills.component.html', styleUrl:'./skills.component.scss' })
export class SkillsComponent {
  groups: SkillGroup[] = [
    {title:'Frontend',caption:'Interfaces & UX',skills:[{name:'Angular',level:88},{name:'TypeScript',level:84},{name:'React',level:82},{name:'JavaScript',level:90}]},
    {title:'Backend',caption:'APIs & services',skills:[{name:'Python',level:92},{name:'FastAPI / Flask',level:88},{name:'Node.js',level:72},{name:'REST APIs',level:90}]},
    {title:'Data & AI',caption:'Data-driven products',skills:[{name:'SQL / PostgreSQL',level:90},{name:'ETL / Pandas',level:88},{name:'Power BI',level:85},{name:'Machine Learning',level:76}]},
    {title:'Cloud',caption:'Delivery & DevOps',skills:[{name:'AWS',level:75},{name:'Docker',level:70},{name:'Git',level:90},{name:'CI/CD',level:72}]}
  ];
}

import { Component, OnInit } from '@angular/core';

interface SkillItem {
  index: number;
  category: string;
  description: string;
}

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css'],
})
export class TechnicalComponent implements OnInit {
  skills: SkillItem[];

  constructor() {
    this.skills = [
      {
        index: 0,
        category: 'Top Skills',
        description:
          'Spring Boot • Angular • React.js • Vue.js • Amazon Web Services (AWS)',
      },
      {
        index: 1,
        category: 'Core Competencies',
        description:
          'Problem-solving • Data Structure • Object Oriented Programming (OOP) • Design Patterns • Web Application • Database Development • Unit Testing and Debugging • Code Version Control • Software Development Lifecycle (SDLC)',
      },
      {
        index: 2,
        category: 'Languages',
        description: 'Java • JavaScript • TypeScript',
      },
      {
        index: 3,
        category: 'Web',
        description:
          'JSP • Servlet • HTML • CSS • JavaScript • jQuery • Bootstrap • React.js • Vue.js • Material UI • PrimeNG UI',
      },
      {
        index: 4,
        category: 'Web Services',
        description: 'Restful API',
      },
      {
        index: 5,
        category: 'Web & Application Servers',
        description: 'Apache • Tomcat',
      },
      {
        index: 6,
        category: 'Frameworks',
        description: 'Spring MVC • Spring Boot • JSF • Express.js • Angular',
      },
      {
        index: 7,
        category: 'Databases',
        description: 'MS SQL • MySQL • Postgres • MongoDB',
      },
      {
        index: 8,
        category: 'Design Patterns',
        description:
          'Singleton • Factory Method • Abstract Factory • Builder • Command • Iterator • Observer • Strategy • Template Method • Adapter • Composite • Decorator • Facade',
      },
      {
        index: 9,
        category: 'Web & Application Servers',
        description: 'Apache • Tomcat',
      },
      {
        index: 10,
        category: 'Software Development Life Cycle (SDLC)',
        description: 'Agile (Scrum, Kanban) • Waterfall',
      },
      {
        index: 11,
        category: 'Tools',
        description:
          'Maven • Ant • Eclipse • IntelliJ • GitHub Action • VSCode • SonarQube • JIRA • Azure (Azure Devops, Azure AD, Azure AppServices, Azure Blob Storage, Azure Function, Azure Cosmos DB) • AWS (EC2, S3, DynamoDB, Lambda) • Docker',
      },
      {
        index: 12,
        category: 'Platforms',
        description: 'Window • Linux',
      },
    ];
  }

  ngOnInit(): void {}
}

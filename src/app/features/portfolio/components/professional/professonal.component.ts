import { Component, OnInit } from '@angular/core';

interface EventItem {
  index: number;
  company?: string;
  jobPosition?: String;
  time?: string;
  address?: string;
  icon?: string;
  color?: string;
  shortDescription?: string;
  description?: string;
  skills?: string[];
}

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css'],
})
export class ProfessionalComponent implements OnInit {
  events: EventItem[];

  isShowMore: boolean = false;

  selectedEvent: EventItem;

  constructor() {
    this.selectedEvent = { index: 0 };
    this.events = [
      {
        index: 0,
        company: 'Trancosmos Technologic Arts · Full-time',
        jobPosition: 'Software Engineer',
        time: 'Oct 2015 - Jun 2018 · 2 yrs 9 mos',
        address: '326 Vo Van Kiet, Co Giang Ward, District 1, HCM City',
        icon: 'images/company-icons/transcosmos_technologic_arts_logo.jfif',
        color: '#9C27B0',
        shortDescription:
          'Trancosmos Technologic Arts (TTV) is a Japanese agile software development and offshore company founded in 2014. Operating primarily in Vietnam and the Asia-Pacific region, TTV offers services such as software development, product development, web design, and mobile app development. TTV emphasizes agile methodology, a highly skilled team, and continuous improvement.',
        description:
          'Trancosmos Technologic Arts (TTV) is a Japanese agile software development and offshore company founded in 2014. Operating primarily in Vietnam and the Asia-Pacific region, TTV offers services such as software development, product development, web design, and mobile app development. TTV emphasizes agile methodology, a highly skilled team, and continuous improvement.<br/><br/>• Developed and maintained a web application called OpenMarket using Java, Spring Framework, HTML, CSS, JavaScript, jQuery, MySQL, Hibernate, and GitLab, enabling users to rent or purchase properties, achieving a 60% increase in user engagement.<br/><br/>• Improved an entertainment web application called Xing (Joysound) using Java, Spring Boot, AngularJS, Oracle Database, SonarQube, and GitLab, allowing users to listen to music, watch movies, sing karaoke, and buy or rent DVDs/VCDs, improving user satisfaction and user engagement by 50%<br/><br/>• Conducted an onsite visit to Japan and collaborated with the VietNam team to analyze, design, develop, deploy, and maintain the Dartslive search web application utilizing Java, Servlet, JSP, Spring Batch, HTML, CSS, JavaScript, JSRender, MySQL, SonarQube, and GitLab which supports users in easily finding the nearest shop and visiting them, successfully streamlining the shop search functionality and increasing user visits by 50%. For more information, visit: https://search.dartslive.com/<br/><br/>• Optimized the loading time for a web application called Panasonic using Java, Spring Framework, HTML, CSS, JavaScript, jQuery, MySQL, SonarQube, and GitLab which enables users to rent or purchase properties, including houses and apartments, resulting in a 50% increase in user visits.',
        skills: [
          'Java',
          'Spring Framework',
          'Spring Batch',
          'AngularJS',
          'HTML',
          'Cascading Style Sheets (CSS)',
          'JavaScript',
          'jQuery',
          'JSRender',
          'MySQL',
          'Oracle Database',
          'Hibernate',
          'Google Maps API',
          'SonarQube',
          'Gitlab',
          'Linux',
          'Shell Script',
        ],
      },
      {
        index: 1,
        company: 'MTI Technology Da Nang · Full-time',
        jobPosition: 'Fullstack Developer',
        time: 'Jul 2018 - Apr 2021 · 2 yrs 10 mos',
        address:
          '36 Tran Quoc Toan, Hai Chau 1 Ward, Hai Chau District, Da Nang City',
        icon: 'images/company-icons/mti_danang_logo.jfif',
        color: '#673AB7',
        shortDescription:
          'MTI Technology, founded in 2016, specializes in digital transformation solutions using Agile and Lean methodologies. The company offers consulting services and AI-powered solutions to enhance efficiency and effectiveness.',
        description:
          'MTI Technology, founded in 2016, specializes in digital transformation solutions using Agile and Lean methodologies. The company offers consulting services and AI-powered solutions to enhance efficiency and effectiveness.<br/><br/>• Contributed as a software developer to the Conformance Suite (https://gitlab.com/openid/conformance-suite/) using Java, Spring Boot, HTML, CSS, JavaScript, Lodash.js, OpenID Connect, OAuth2, MongoDB, GitLab CI/CD, and Docker, an open-source project managed by the OpenID Foundation, resolving 80 issues and successfully released milestones for FAPI tests, CIBA-v1, and the next release. For more details on my contributions, please visit https://gitlab.com/users/nhatlv/activity.<br/><br/>• Analyzed and implemented some features in a healthcare system using JavaScript, TypeScript, Express.js, React.js, Azure DevOps, AWS Cloud Services, AWS DynamoDB, Twilio Video API, and SonarQube, which facilitates video call connections between patients, doctors, clinics, and hospitals. Enhanced system functionality, increased user satisfaction by 50%, and reduced connection issues by 60% during the COVID-19 pandemic time.<br/><br/>• Designed, developed, and deployed an eKYC solution for Japanese financial institutions using .Net Core, JavaScript, Vue.js, Nuxt.js, MS SQL, Azure CosmosDB, Azure Cloud Services, and Azure DevOps, which leverages biometric authentication technology to support the opening of bank accounts with identification documents such as ID, Driver’s Licenses, and Passports, successfully implemented biometric authentication, reducing account opening time by 50% and enhancing security compliance by 45%.',
        skills: [
          'Java',
          'Spring Boot',
          'Node.js',
          '.NET Core',
          'Express.js',
          'React.js',
          'Vue.js',
          'Nuxt.js',
          'HTML',
          'Cascading Style Sheets (CSS)',
          'JavaScript',
          'TypeScript',
          'Lodash.js',
          'MS SQL',
          'MongoDB',
          'Gitlab CI/CD',
          'SonarQube',
          'Azure Cloud Services',
          'Amazon Web Services (AWS)',
          'Docker',
          'Twillio Video API',
          'OpenID Connect (OIDC)',
          'OAuth2',
        ],
      },
      {
        index: 2,
        company: 'Bouygues Construction IT Viet Nam · Full-time',
        jobPosition: 'Senior Fullstack Developer',
        time: 'May 2021 - May 2024 · 3 yrs 1 mo',
        address: '364 Cong Hoa, Ward 13, Tan Binh District, Ho Chi Minh City',
        icon: 'images/company-icons/bouygues_construction_it_vietnam_logo.jfif',
        color: '#FF9800',
        shortDescription:
          'Bouygues Construction IT Vietnam (BYCN IT VN) is the IT branch of Bouygues Construction, a global leader in the building, civil works, energy, and services sectors. Established to provide high-quality IT services, BYCN IT VN focuses on software development, system monitoring, security, and user support. Located in Ho Chi Minh City, Vietnam, BYCN IT VN aims to enhance the competitiveness and drive the digital transformation of the Bouygues Construction Group.',
        description:
          'Bouygues Construction IT Vietnam (BYCN IT VN) is the IT branch of Bouygues Construction, a global leader in the building, civil works, energy, and services sectors. Established to provide high-quality IT services, BYCN IT VN focuses on software development, system monitoring, security, and user support. Located in Ho Chi Minh City, Vietnam, BYCN IT VN aims to enhance the competitiveness and drive the digital transformation of the Bouygues Construction Group.<br/><br/>• Engineered an enterprise application called Eparaph using Java, Spring Boot, Angular, PrimeNG UI, MS SQL, SonarQube, Azure Active Directory, and Git, which facilitates comprehensive employee management across all departments, replacing traditional paper forms and digitizing the employee management process, reducing paperwork by 70% and improving approval times by 60%.<br/><br/>• Developed a web application called Scanbeton using Java, JSF, Primefaces, JavaScript, SonarQube, MS SQL, Azure Active Directory, and Git, which enables the management of concrete quality and volume at construction sites, enhancing issue reporting efficiency, leading to a 40% reduction in response time for concrete quality issues.<br/><br/>• Implemented a service called Portail-partenaires using Java, Spring Boot, Angular, PrimeNG UI, Postgres, Azure Active Directory, OpenID Connect (OIDC), and OAuth2, which functions as an identity server, serving as a portal to manage external users and integrating with all projects for authentication and authorization, successfully transitioned to Azure Active Directory (Azure Entra ID) for all the projects instead of using this service since 2023, enhancing security and reducing authentication issues by 35%.',
        skills: [
          'Java',
          'Spring Framework',
          'Spring Boot',
          'JavaServer Faces (JSF)',
          'Primefaces',
          'Angular',
          'PrimeNG UI',
          'Microsoft SQL Server',
          'Postgres',
          'Azure Active Directory',
          'SonarQube',
          'GitHub Actions',
          'OpenID Connect (OIDC)',
          'OAuth2',
        ],
      },
      {
        index: 3,
        company: 'Career Break',
        jobPosition: "Master's Degree",
        time: 'May 2024 - Present',
        address: '1000 N 4th St, Fairfield, IA 52557',
        icon: 'images/company-icons/bouygues_construction_it_vietnam_logo.jfif',
        color: '#FF9800',
        shortDescription:
          "Pursuing Master's Degree in Computer Science at Maharishi International University",
      },
    ];
  }

  ngOnInit(): void {}

  showMore(eventIndex: number): void {
    this.selectedEvent = this.events.find(
      (e) => e.index === eventIndex
    ) as EventItem;
    this.isShowMore = true;
  }
}

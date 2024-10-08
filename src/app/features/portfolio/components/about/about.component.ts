import { Component, OnInit } from '@angular/core';

interface LinkItem {
  index: number;
  link?: string;
  icon?: string;
  description?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  links: LinkItem[];

  constructor() {
    this.links = [
      {
        index: 0,
        link: 'https://www.linkedin.com/in/lenhat-bkit/',
        icon: 'pi pi-linkedin',
        description: 'Linkedin profile',
      },
      {
        index: 1,
        link: 'https://github.com/vnhatle',
        icon: 'pi pi-github',
        description: 'Github profile',
      },
      {
        index: 2,
        link: 'https://www.facebook.com/le.nhat.54390876',
        icon: 'pi pi-facebook',
        description: 'Facebook profile',
      },
      {
        index: 3,
        link: '#',
        icon: 'pi pi-download',
        description: 'My Resume',
      },
    ];
  }

  ngOnInit(): void {}
}

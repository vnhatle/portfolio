import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Introduction',
        icon: 'pi pi-info-circle',
        link: 'introduction',
      },
      {
        label: 'Education',
        icon: 'pi pi-graduation-cap',
        link: 'education',
      },
      {
        label: 'Technical Skills',
        icon: 'pi pi-list-check',
        link: 'technical-skills',
      },
      {
        label: 'Work Experience',
        icon: 'pi pi-objects-column',
        link: 'professional-experience',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        link: 'contact',
      },
    ];
  }

  scrollTo(fragment: string): void {
    this.router.navigate(['/portfolio'], { fragment: fragment });
  }
}

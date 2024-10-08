import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Introduction',
        icon: 'pi pi-info-circle',
      },
      {
        label: 'Education',
        icon: 'pi pi-graduation-cap',
      },
      {
        label: 'Technical Skills',
        icon: 'pi pi-list-check',
      },
      {
        label: 'Work Experience',
        icon: 'pi pi-objects-column',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
  }
}

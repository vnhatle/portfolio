import { Component, OnInit } from '@angular/core';

interface SchoolItem {
  index: number;
  name?: string;
  program?: String;
  time?: string;
  address?: string;
  icon?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  schools: SchoolItem[];

  constructor() {
    this.schools = [
      {
        index: 0,
        name: 'Da Nang University of Science and Technology',
        program: 'Bachelor of Engineering (B.E.)',
        time: 'Sep 2010 - Sep 2015',
        address:
          '54 Nguyen Luong Bang St, Lien Chieu District, Da Nang City, Viet Nam',
        icon: 'images/school-icons/danang_university_of_science_and_technology_logo.jfif',
      },
      {
        index: 1,
        name: 'Maharishi International University',
        program: "Master's degree, Computer Science",
        time: 'Apr 2024 - Present',
        address: '1000 N 4th St, Fairfield, IA 52557',
        icon: 'images/school-icons/maharishi_international_university_logo.jfif',
      },
    ];
  }

  ngOnInit(): void {}
}

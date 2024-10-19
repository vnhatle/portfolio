import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email: string;

  mailto: string;

  linkedIn: string;

  constructor() {
    this.email = 'lenhat.bkit@gmail.com';
    this.mailto = `mailto:${this.email}`;
    this.linkedIn = 'https://www.linkedin.com/in/lenhat-bkit/';
  }

  ngOnInit(): void {}
}

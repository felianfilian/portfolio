import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section05-contact',
  templateUrl: './section05-contact.component.html',
  styleUrls: ['./section05-contact.component.scss'],
})
export class Section05ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  async sendMail() {}
}

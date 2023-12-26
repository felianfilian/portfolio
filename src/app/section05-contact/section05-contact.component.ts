import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section05-contact',
  templateUrl: './section05-contact.component.html',
  styleUrls: ['./section05-contact.component.scss'],
})
export class Section05ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('namefield') nameField!: ElementRef;
  @ViewChild('mailfield') mailField!: ElementRef;
  @ViewChild('messagefield') messageField!: ElementRef;
  @ViewChild('sendbutton') sendButton!: ElementRef;
  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButtonField = this.sendButton.nativeElement;
  }
}

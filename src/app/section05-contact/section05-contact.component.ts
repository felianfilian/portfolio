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
    alert('Start Mail Send');
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }
}

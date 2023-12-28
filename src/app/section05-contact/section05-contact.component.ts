import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

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

  constructor(private appComponent: AppComponent) {}

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    // disable form fields
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mail', mailField.value);
    fd.append('message', messageField.value);
    await fetch('https://dennis-schmalstieg.de/tools/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });
    // mail sended message
    this.appComponent.showMessage('mail sended');
    // activate form fields
    nameField.value = '';
    mailField.value = '';
    messageField.value = '';
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio_v1';

  @ViewChild('messageCard') messageCard!: ElementRef;
  @ViewChild('messageBox') messageBox!: ElementRef;
  myMessage = 'hello stranger';
  messageDelay: number | undefined;
  displayMessage = false;

  showMessage(message: string, delay: number = 2, bgColor = '#2a3647') {
    this.myMessage = message;
    this.messageDelay = delay * 1000;
    //this.messageCard.nativeElement.style.backgroundColor = bgColor;

    this.displayMessage = true;
    // this.messageBox.nativeElement.classList.remove('d-none');
    setTimeout(() => {
      this.displayMessage = false;
      // this.messageBox.nativeElement.classList.add('d-none');
    }, this.messageDelay);
  }
}

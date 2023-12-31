import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  thisYear: number = new Date().getFullYear();
  lang: string = 'eng';

  constructor(public gs: GlobalService) {
    this.lang = gs.lang;
  }

  showImprint() {
    let mobileMenu = document.getElementById('imprint-container');
    if (mobileMenu != null) {
      mobileMenu.style.display = 'flex';
    }
  }
  closeImprint() {
    let mobileMenu = document.getElementById('imprint-container');
    if (mobileMenu != null) {
      mobileMenu.style.display = 'none';
    }
  }
}

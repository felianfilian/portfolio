import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  lang: string = 'eng';

  constructor(private scroller: ViewportScroller) {}

  showMenu() {
    let mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu != null) {
      mobileMenu.style.display = 'flex';
    }
  }
  closeMenu() {
    let mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu != null) {
      mobileMenu.style.display = 'none';
    }
  }
  gotoSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }

  changeLang(newLang: string) {}
}

import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private scroller: ViewportScroller) {}

  showMenu() {
    let mainMenu = document.getElementById('mobile-menu');
    if (mainMenu != null) {
      mainMenu.style.display = 'flex';
    }
  }
  closeMenu() {
    let mainMenu = document.getElementById('mobile-menu');
    if (mainMenu != null) {
      mainMenu.style.display = 'none';
    }
  }
  gotoSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }
}

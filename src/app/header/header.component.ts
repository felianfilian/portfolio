import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenu() {
    let mainMenu = document.getElementById('main-menu');
    if (mainMenu != null) {
      mainMenu.style.display = 'flex';
    }
  }
  closeMenu() {
    let mainMenu = document.getElementById('main-menu');
    if (mainMenu != null) {
      mainMenu.style.display = 'none';
    }
  }
  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
}

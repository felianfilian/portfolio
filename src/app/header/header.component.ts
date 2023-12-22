import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenu() {
    alert('show');
    let mainMenu = document.getElementById('main-menu');
    if (mainMenu != null) {
      mainMenu.style.display = 'flex';
    }
  }
}

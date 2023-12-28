import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-section01-hero',
  templateUrl: './section01-hero.component.html',
  styleUrls: ['./section01-hero.component.scss'],
})
export class Section01HeroComponent {
  constructor(private scroller: ViewportScroller) {}

  gotoSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }
}

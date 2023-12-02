import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Section01HeroComponent } from './section01-hero/section01-hero.component';
import { Section02AboutComponent } from './section02-about/section02-about.component';
import { Section03SkillsComponent } from './section03-skills/section03-skills.component';
import { Section04PortfolioComponent } from './section04-portfolio/section04-portfolio.component';
import { Section05ContactComponent } from './section05-contact/section05-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Section01HeroComponent,
    Section02AboutComponent,
    Section03SkillsComponent,
    Section04PortfolioComponent,
    Section05ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

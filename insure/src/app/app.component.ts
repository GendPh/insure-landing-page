import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { DetailsComponent } from './details/details.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, HeroComponent, DetailsComponent, HowWeWorkComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insure';
}

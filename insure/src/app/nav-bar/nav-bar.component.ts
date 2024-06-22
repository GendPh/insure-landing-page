import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent {
  @ViewChild('navBtn') navBtn: ElementRef | undefined;
  @ViewChild('navMenu') navMenu: ElementRef | undefined;

  toggleNav() {
    if (this.navBtn && this.navMenu) {
      if (this.navBtn.nativeElement.classList.contains('open')) {
        this.navBtn.nativeElement.classList.remove('open');
        this.navMenu.nativeElement.classList.remove('open');
      } else {
        this.navBtn.nativeElement.classList.add('open');
        this.navMenu.nativeElement.classList.add('open');
      }
    }
  }

  closeNav() {
    if (this.navBtn && this.navMenu) {
      this.navBtn.nativeElement.classList.remove('open');
      this.navMenu.nativeElement.classList.remove('open');
    }
  }
}

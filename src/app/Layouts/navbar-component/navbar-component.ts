import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  activeLink = '/';

  navLinks = [
    { label: 'الرئيسية', path: '/', exact: true },
    { label: 'معلومات عنا', path: '/about' },
    { label: 'الخدمات', path: '/services' },
    { label: 'اتصل بنا', path: '/contact' },
    { label: 'تحميل التطبيق', path: '/download' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.closeMobileMenu();
  }
}

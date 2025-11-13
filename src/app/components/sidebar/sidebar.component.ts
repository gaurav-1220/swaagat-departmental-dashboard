import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    '[class.sidebar-collapsed]': 'isCollapsed()'
  }
})
export class SidebarComponent {
  isCollapsed = signal(false);

  menuItems = [
    {
      label: 'Dashboard',
      icon: '📊',
      route: '/dashboard',
      active: true
    },
    {
      label: 'Application List',
      icon: '📋',
      route: '/applications',
      active: true
    },
    {
      label: 'Feedback',
      icon: '💬',
      route: '/feedback',
      active: true
    }
  ];

  constructor() {
    // SCSS variable when sidebar state changes
    effect(() => {
      document.documentElement.style.setProperty(
        '--sidebar-width',
        this.isCollapsed() ? '80px' : '260px'
      );
    });
  }

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }
}

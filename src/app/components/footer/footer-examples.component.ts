import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  GoabAppFooter,
  GoabAppFooterNavSection,
  GoabAppFooterMetaSection,
  GoabButton
} from '@abgov/angular-components';

@Component({
  selector: 'app-footer-examples',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoabAppFooter,
    GoabAppFooterNavSection,
    GoabAppFooterMetaSection,
    GoabButton
  ],
  templateUrl: './footer-examples.component.html',
  styleUrls: ['./footer-examples.component.css']
})
export class FooterExamplesComponent {
  // Configuration options
  maxContentWidth = '1200px';
  maxColumnCount = 1;
  navHeading = '';
  showNavSection = true;
  showMetaSection = true;

  // Sample navigation links
  navigationLinks = [
    { label: 'Arts and culture', href: '/arts-culture' },
    { label: 'Education and training', href: '/education-training' },
    { label: 'Family and social supports', href: '/family-social' },
    { label: 'Housing and community', href: '/housing-community' },
    { label: 'Life events', href: '/life-events' },
    { label: 'Business and economy', href: '/business-economy' },
    { label: 'Emergencies and public safety', href: '/emergency-safety' },
    { label: 'Government', href: '/government' },
    { label: 'Jobs and employment', href: '/jobs-employment' },
    { label: 'Moving to Alberta', href: '/moving-alberta' }
  ];

  // Sample meta links
  metaLinks = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Using Alberta.ca', href: '/using-alberta' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Give feedback', href: '/feedback' }
  ];

  // Government service navigation links
  serviceLinks = [
    { label: 'Apply for benefits', href: '/apply-benefits' },
    { label: 'Register your business', href: '/register-business' },
    { label: 'Find healthcare services', href: '/healthcare' },
    { label: 'Education resources', href: '/education' },
    { label: 'Transportation services', href: '/transportation' },
    { label: 'Environmental programs', href: '/environment' },
    { label: 'Tax information', href: '/taxes' },
    { label: 'Legal services', href: '/legal' }
  ];

  // Department-specific navigation
  departmentLinks = [
    { label: 'About our department', href: '/about' },
    { label: 'Services we provide', href: '/services' },
    { label: 'News and updates', href: '/news' },
    { label: 'Publications', href: '/publications' },
    { label: 'Forms and applications', href: '/forms' },
    { label: 'Contact information', href: '/contact-info' }
  ];

  // Event tracking
  eventLog: Array<{timestamp: string, message: string}> = [];

  constructor() {}

  // Link click handlers
  onNavigationLinkClick(link: any): void {
    this.logEvent('Navigation link clicked: ' + link.label + ' (' + link.href + ')');
  }

  onMetaLinkClick(link: any): void {
    this.logEvent('Meta link clicked: ' + link.label + ' (' + link.href + ')');
  }

  onLogoClick(): void {
    this.logEvent('Alberta Government logo clicked');
  }

  onCopyrightClick(): void {
    this.logEvent('Copyright link clicked');
  }

  // Configuration change handlers
  updateMaxContentWidth(width: string): void {
    this.maxContentWidth = width;
    this.logEvent('Max content width changed to: ' + width);
  }

  updateMaxColumnCount(count: number): void {
    this.maxColumnCount = count;
    this.logEvent('Max column count changed to: ' + count);
  }

  updateNavHeading(heading: string): void {
    this.navHeading = heading;
    this.logEvent('Navigation heading changed to: ' + (heading || 'None'));
  }

  toggleNavSection(): void {
    this.showNavSection = !this.showNavSection;
    this.logEvent('Navigation section ' + (this.showNavSection ? 'shown' : 'hidden'));
  }

  toggleMetaSection(): void {
    this.showMetaSection = !this.showMetaSection;
    this.logEvent('Meta section ' + (this.showMetaSection ? 'shown' : 'hidden'));
  }

  // Preset configurations
  setBasicConfiguration(): void {
    this.maxContentWidth = '100%';
    this.maxColumnCount = 1;
    this.navHeading = '';
    this.showNavSection = false;
    this.showMetaSection = true;
    this.logEvent('Applied basic configuration');
  }

  setStandardConfiguration(): void {
    this.maxContentWidth = '1200px';
    this.maxColumnCount = 1;
    this.navHeading = '';
    this.showNavSection = true;
    this.showMetaSection = true;
    this.logEvent('Applied standard configuration');
  }

  setMultiColumnConfiguration(): void {
    this.maxContentWidth = '1400px';
    this.maxColumnCount = 3;
    this.navHeading = 'Government Services';
    this.showNavSection = true;
    this.showMetaSection = true;
    this.logEvent('Applied multi-column configuration');
  }

  setDepartmentConfiguration(): void {
    this.maxContentWidth = '1200px';
    this.maxColumnCount = 2;
    this.navHeading = 'Department Resources';
    this.showNavSection = true;
    this.showMetaSection = true;
    this.logEvent('Applied department configuration');
  }

  // Helper methods
  getCurrentDate(): string {
    return new Date().getFullYear().toString();
  }

  // Event logging
  private logEvent(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.unshift({ timestamp, message });
    
    // Keep only last 10 events
    if (this.eventLog.length > 10) {
      this.eventLog = this.eventLog.slice(0, 10);
    }
  }

  clearEventLog(): void {
    this.eventLog = [];
  }
}
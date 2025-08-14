import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  GoabAppHeader,
  GoabAppHeaderMenu,
  GoabMicrositeHeader,
  GoabButton,
  GoabRadioGroup,
  GoabRadioItem
} from '@abgov/angular-components';

@Component({
  selector: 'app-header-examples',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoabAppHeader,
    GoabAppHeaderMenu,
    GoabMicrositeHeader,
    GoabButton,
    GoabRadioGroup,
    GoabRadioItem
  ],
  templateUrl: './header-examples.component.html',
  styleUrls: ['./header-examples.component.css']
})
export class HeaderExamplesComponent {
  // Configuration options
  url = 'https://www.alberta.ca';
  heading = 'Service Name';
  maxContentWidth = '100%';
  fullMenuBreakpoint = 1024;
  showMicrositeHeader = true;
  micrositeHeaderType = 'live';

  // Interactive configuration
  interactiveUrl = 'https://www.alberta.ca';
  interactiveHeading = 'Interactive Demo';
  interactiveMaxContentWidth = '1200px';
  interactiveFullMenuBreakpoint = 1024;
  interactiveShowMicrositeHeader = true;
  interactiveMicrositeHeaderType = 'live';

  // Mobile/Desktop simulation
  deviceWidth = '1200';
  simulationBreakpoint = 768;

  // Sample navigation menus
  mainMenuItems = [
    { label: 'Home', href: '/home' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  searchMenuItems = [
    { label: 'Find services', href: '/search/services' },
    { label: 'Find forms', href: '/search/forms' },
    { label: 'Find locations', href: '/search/locations' }
  ];

  accountMenuItems = [
    { label: 'My Profile', href: '/profile' },
    { label: 'My Applications', href: '/applications' },
    { label: 'Settings', href: '/settings' },
    { label: 'Sign Out', href: '/signout' }
  ];

  supportMenuItems = [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Support', href: '/support' },
    { label: 'Live Chat', href: '/chat' },
    { label: 'FAQ', href: '/faq' }
  ];

  // Event tracking
  eventLog: Array<{timestamp: string, message: string}> = [];

  constructor() {}

  // Menu click handlers
  onMenuClick(): void {
    this.logEvent('Mobile menu button clicked');
  }

  onNavigationLinkClick(item: any): void {
    this.logEvent('Navigation link clicked: ' + item.label + ' (' + item.href + ')');
  }

  onLogoClick(): void {
    this.logEvent('Alberta Government logo clicked');
  }

  onSignInClick(): void {
    this.logEvent('Sign in link clicked');
  }

  // Configuration change handlers
  updateUrl(url: string): void {
    this.interactiveUrl = url;
    this.logEvent('URL changed to: ' + url);
  }

  updateHeading(heading: string): void {
    this.interactiveHeading = heading;
    this.logEvent('Heading changed to: ' + heading);
  }

  updateMaxContentWidth(width: string): void {
    this.interactiveMaxContentWidth = width;
    this.logEvent('Max content width changed to: ' + width);
  }

  updateFullMenuBreakpoint(breakpoint: number): void {
    this.interactiveFullMenuBreakpoint = breakpoint;
    this.logEvent('Full menu breakpoint changed to: ' + breakpoint + 'px');
  }

  toggleMicrositeHeader(): void {
    this.interactiveShowMicrositeHeader = !this.interactiveShowMicrositeHeader;
    this.logEvent('Microsite header ' + (this.interactiveShowMicrositeHeader ? 'shown' : 'hidden'));
  }

  updateMicrositeHeaderType(type: string): void {
    this.interactiveMicrositeHeaderType = type;
    this.logEvent('Microsite header type changed to: ' + type);
  }

  // Device simulation
  changeDeviceWidth(width: string): void {
    this.deviceWidth = width;
    this.logEvent('Device width simulation changed to: ' + width + 'px');
  }

  updateSimulationBreakpoint(breakpoint: number): void {
    this.simulationBreakpoint = breakpoint;
    this.logEvent('Simulation breakpoint changed to: ' + breakpoint + 'px');
  }

  // Preset configurations
  setBasicConfiguration(): void {
    this.interactiveUrl = 'https://www.alberta.ca';
    this.interactiveHeading = '';
    this.interactiveMaxContentWidth = '100%';
    this.interactiveFullMenuBreakpoint = 1024;
    this.interactiveShowMicrositeHeader = false;
    this.logEvent('Applied basic configuration');
  }

  setServiceConfiguration(): void {
    this.interactiveUrl = 'https://www.alberta.ca';
    this.interactiveHeading = 'Government Service Portal';
    this.interactiveMaxContentWidth = '1200px';
    this.interactiveFullMenuBreakpoint = 768;
    this.interactiveShowMicrositeHeader = true;
    this.interactiveMicrositeHeaderType = 'live';
    this.logEvent('Applied service configuration');
  }

  setApplicationConfiguration(): void {
    this.interactiveUrl = 'https://www.alberta.ca';
    this.interactiveHeading = 'Business Registration System';
    this.interactiveMaxContentWidth = '1400px';
    this.interactiveFullMenuBreakpoint = 1024;
    this.interactiveShowMicrositeHeader = true;
    this.interactiveMicrositeHeaderType = 'alpha';
    this.logEvent('Applied application configuration');
  }

  setDepartmentConfiguration(): void {
    this.interactiveUrl = 'https://www.alberta.ca';
    this.interactiveHeading = 'Ministry of Technology and Innovation';
    this.interactiveMaxContentWidth = '1200px';
    this.interactiveFullMenuBreakpoint = 768;
    this.interactiveShowMicrositeHeader = true;
    this.interactiveMicrositeHeaderType = 'live';
    this.logEvent('Applied department configuration');
  }

  // Helper methods
  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }

  getBreakpointDescription(breakpoint: number): string {
    if (breakpoint <= 480) return 'Mobile Only';
    if (breakpoint <= 768) return 'Mobile & Tablet';
    if (breakpoint <= 1024) return 'Mobile, Tablet & Small Desktop';
    return 'All Devices';
  }

  isDeviceWidthMobile(): boolean {
    return parseInt(this.deviceWidth) <= this.simulationBreakpoint;
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
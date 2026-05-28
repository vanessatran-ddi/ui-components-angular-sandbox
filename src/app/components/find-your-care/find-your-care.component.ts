import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabAppHeader, GoabMicrositeHeader } from '@abgov/angular-components';

interface SiteMapEntry {
  heading: string;
}

@Component({
  selector: 'app-find-your-care',
  standalone: true,
  imports: [CommonModule, GoabAppHeader, GoabMicrositeHeader],
  templateUrl: './find-your-care.component.html',
  styleUrls: ['./find-your-care.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FindYourCareComponent {
  // Mirrors the SITE_MAP / siteMobileMapKeys shape from the reported portal.
  SITE_MAP: Record<string, SiteMapEntry> = {
    'find-your-care': { heading: 'Find your care' },
    'connect-case-manager': { heading: 'Connect with a case manager' },
    'explore-care-options': { heading: 'Explore care options' },
  };

  siteMobileMapKeys: string[] = Object.keys(this.SITE_MAP);

  // Event tracking so we can confirm the menu actions still fire.
  eventLog: Array<{ timestamp: string; message: string }> = [];

  onHeaderMenuAction(event: Event): void {
    const action = (event as CustomEvent<{ action?: string }>).detail?.action;
    this.logEvent('Menu action triggered: ' + (action ?? '(unknown)'));
  }

  private logEvent(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.unshift({ timestamp, message });
    if (this.eventLog.length > 10) {
      this.eventLog = this.eventLog.slice(0, 10);
    }
  }

  clearEventLog(): void {
    this.eventLog = [];
  }
}

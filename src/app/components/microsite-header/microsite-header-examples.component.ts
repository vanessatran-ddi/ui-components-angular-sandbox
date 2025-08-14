import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  GoabMicrositeHeader,
  GoabButton,
  GoabRadioGroup,
  GoabRadioItem
} from '@abgov/angular-components';

@Component({
  selector: 'app-microsite-header-examples',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoabMicrositeHeader,
    GoabButton,
    GoabRadioGroup,
    GoabRadioItem
  ],
  templateUrl: './microsite-header-examples.component.html',
  styleUrls: ['./microsite-header-examples.component.css']
})
export class MicrositeHeaderExamplesComponent {
  // Configuration options
  type = 'alpha';
  version = 'v1.2.3';
  feedbackUrl = '#';
  maxContentWidth = '100%';
  feedbackUrlTarget = 'blank';
  headerUrlTarget = 'blank';

  // Interactive configuration
  interactiveType = 'alpha';
  interactiveVersion = 'v2.1.0';
  interactiveFeedbackUrl = 'https://forms.microsoft.com/feedback';
  interactiveMaxContentWidth = '1200px';
  interactiveFeedbackUrlTarget = 'blank';
  interactiveHeaderUrlTarget = 'blank';
  showFeedbackLink = true;
  showVersion = true;

  // Available options
  typeOptions = [
    { value: 'alpha', label: 'Alpha' },
    { value: 'beta', label: 'Beta' },
    { value: 'live', label: 'Live' }
  ];

  targetOptions = [
    { value: 'self', label: 'Self (_self)' },
    { value: 'blank', label: 'Blank (_blank)' }
  ];

  // Event tracking
  eventLog: Array<{timestamp: string, message: string}> = [];

  constructor() {}

  // Event handlers
  onFeedbackClick(): void {
    this.logEvent('Feedback link clicked');
  }

  onHeaderClick(): void {
    this.logEvent('Alberta Government header link clicked');
  }

  onVersionClick(): void {
    this.logEvent('Version link clicked');
  }

  // Configuration change handlers
  updateType(type: string): void {
    this.interactiveType = type;
    this.logEvent('Type changed to: ' + type);
  }

  updateVersion(version: string): void {
    this.interactiveVersion = version;
    this.logEvent('Version changed to: ' + version);
  }

  updateFeedbackUrl(url: string): void {
    this.interactiveFeedbackUrl = url;
    this.logEvent('Feedback URL changed to: ' + url);
  }

  updateMaxContentWidth(width: string): void {
    this.interactiveMaxContentWidth = width;
    this.logEvent('Max content width changed to: ' + width);
  }

  updateFeedbackUrlTarget(target: string): void {
    this.interactiveFeedbackUrlTarget = target;
    this.logEvent('Feedback URL target changed to: ' + target);
  }

  updateHeaderUrlTarget(target: string): void {
    this.interactiveHeaderUrlTarget = target;
    this.logEvent('Header URL target changed to: ' + target);
  }

  toggleFeedbackLink(): void {
    this.showFeedbackLink = !this.showFeedbackLink;
    this.logEvent('Feedback link ' + (this.showFeedbackLink ? 'enabled' : 'disabled'));
  }

  toggleVersion(): void {
    this.showVersion = !this.showVersion;
    this.logEvent('Version display ' + (this.showVersion ? 'enabled' : 'disabled'));
  }

  // Preset configurations
  setAlphaConfiguration(): void {
    this.interactiveType = 'alpha';
    this.interactiveVersion = 'v0.1.0';
    this.interactiveFeedbackUrl = 'https://forms.microsoft.com/alpha-feedback';
    this.interactiveMaxContentWidth = '100%';
    this.interactiveFeedbackUrlTarget = 'blank';
    this.interactiveHeaderUrlTarget = 'blank';
    this.showFeedbackLink = true;
    this.showVersion = true;
    this.logEvent('Applied Alpha configuration');
  }

  setBetaConfiguration(): void {
    this.interactiveType = 'beta';
    this.interactiveVersion = 'v1.0.0-beta';
    this.interactiveFeedbackUrl = 'https://forms.microsoft.com/beta-feedback';
    this.interactiveMaxContentWidth = '1200px';
    this.interactiveFeedbackUrlTarget = 'blank';
    this.interactiveHeaderUrlTarget = 'blank';
    this.showFeedbackLink = true;
    this.showVersion = true;
    this.logEvent('Applied Beta configuration');
  }

  setLiveConfiguration(): void {
    this.interactiveType = 'live';
    this.interactiveVersion = '';
    this.interactiveFeedbackUrl = '';
    this.interactiveMaxContentWidth = '1400px';
    this.interactiveFeedbackUrlTarget = 'self';
    this.interactiveHeaderUrlTarget = 'self';
    this.showFeedbackLink = false;
    this.showVersion = false;
    this.logEvent('Applied Live configuration');
  }

  setDevelopmentConfiguration(): void {
    this.interactiveType = 'alpha';
    this.interactiveVersion = 'dev-' + new Date().toISOString().split('T')[0];
    this.interactiveFeedbackUrl = '/internal-feedback';
    this.interactiveMaxContentWidth = '100%';
    this.interactiveFeedbackUrlTarget = 'self';
    this.interactiveHeaderUrlTarget = 'self';
    this.showFeedbackLink = true;
    this.showVersion = true;
    this.logEvent('Applied Development configuration');
  }

  // Helper methods
  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }

  getCurrentVersion(): string {
    return '1.23';
  }

  getBuildNumber(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  getTypeDescription(type: string): string {
    switch (type) {
      case 'alpha': return 'Early development stage - expect significant changes';
      case 'beta': return 'Feature complete but may have bugs - testing phase';
      case 'live': return 'Production ready - stable release';
      default: return 'Unknown type';
    }
  }

  getTargetDescription(target: string): string {
    return target === 'self' ? 'Opens in same tab' : 'Opens in new tab';
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
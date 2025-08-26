import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GoabContainer,
  GoabNotification,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabText,
  GoabBlock
} from '@abgov/angular-components';

@Component({
  selector: 'app-notification-banner-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabContainer,
    GoabNotification,
    GoabSpacer,
    GoabButton,
    GoabButtonGroup,
    GoabText,
    GoabBlock
  ],
  template: `
    <goab-container>
      <h1>Notification Banner Component Examples</h1>
      <p>Display important page level information or notifications.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Notification Banner Types</h2>
      <p>Different types of notification banners for various contexts:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Information Banner</h3>
      <p>Use for general informational messages:</p>
      <goab-notification type="information" *ngIf="infoOpen">
        This is an information notification banner. It provides general information to users about system status or updates.
      </goab-notification>
      <goab-button-group alignment="start" mt="s">
        <goab-button type="tertiary" (onClick)="showInfo()" *ngIf="!infoOpen">
          Show Information Banner
        </goab-button>
        <goab-button type="tertiary" (onClick)="closeInfo()" *ngIf="infoOpen">
          Hide Information Banner
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Important Banner</h3>
      <p>Use for important notices that need user attention:</p>
      <goab-notification type="important" *ngIf="importantOpen">
        Our system will be under maintenance from Thursday, September 15, 2025 at 10 pm to Friday, September 16, 2025 at 10 am. If you have questions or concerns, contact us at <a href="mailto:support&#64;example.com">support&#64;example.com</a>.
      </goab-notification>
      <goab-button-group alignment="start" mt="s">
        <goab-button type="tertiary" (onClick)="showImportant()" *ngIf="!importantOpen">
          Show Important Banner
        </goab-button>
        <goab-button type="tertiary" (onClick)="closeImportant()" *ngIf="importantOpen">
          Hide Important Banner
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Success Message</h3>
      <p>Use information type with success styling for confirmations:</p>
      <goab-notification type="information" *ngIf="successOpen">
        <strong>Success:</strong> Your changes have been saved successfully! The system has been updated with your latest configuration.
      </goab-notification>
      <goab-button-group alignment="start" mt="s">
        <goab-button type="tertiary" (onClick)="showSuccess()" *ngIf="!successOpen">
          Show Success Message
        </goab-button>
        <goab-button type="tertiary" (onClick)="closeSuccess()" *ngIf="successOpen">
          Hide Success Message
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Emergency Banner</h3>
      <p>Use for critical alerts and emergency situations:</p>
      <goab-notification type="emergency" *ngIf="emergencyOpen">
        <strong>Critical System Alert:</strong> A security incident has been detected. Please change your password immediately and contact IT support at <a href="tel:+15551234567">(555) 123-4567</a>.
      </goab-notification>
      <goab-button-group alignment="start" mt="s">
        <goab-button type="tertiary" (onClick)="showEmergency()" *ngIf="!emergencyOpen">
          Show Emergency Banner
        </goab-button>
        <goab-button type="tertiary" (onClick)="closeEmergency()" *ngIf="emergencyOpen">
          Hide Emergency Banner
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Non-Closable Banners</h2>
      <p>Notification banners without close buttons for persistent messages:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Persistent Information</h3>
      <goab-notification type="information">
        This is a persistent information banner that cannot be closed. Use this for critical information that must remain visible.
      </goab-notification>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Service Status</h3>
      <goab-notification type="important">
        <strong>Service Status:</strong> Some services are currently experiencing delays. We are working to resolve this issue. Check our <a href="#status-page">status page</a> for updates.
      </goab-notification>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Interactive Examples</h2>
      <p>Banners with different interaction patterns:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button (onClick)="showMultiple()">
          Show Multiple Banners
        </goab-button>
        <goab-button type="secondary" (onClick)="closeAll()">
          Close All Banners
        </goab-button>
        <goab-button type="tertiary" (onClick)="togglePersistent()">
          {{ persistentVisible ? 'Hide' : 'Show' }} Persistent Banner
        </goab-button>
      </goab-button-group>

      <div *ngIf="multipleOpen.info">
        <goab-notification type="information" *ngIf="multipleOpen.info">
          Multiple banner example - Information: This is the first of several notification banners.
        </goab-notification>
      </div>

      <div *ngIf="multipleOpen.success">
        <goab-notification type="information" *ngIf="multipleOpen.success">
          <strong>Success:</strong> Multiple banner example - Your action was completed successfully.
        </goab-notification>
      </div>

      <div *ngIf="multipleOpen.important">
        <goab-notification type="important" *ngIf="multipleOpen.important">
          Multiple banner example - Important: Please review the changes before proceeding.
        </goab-notification>
      </div>

      <div *ngIf="persistentVisible">
        <goab-notification type="information">
          Persistent Banner: This banner toggles visibility but cannot be closed by the user.
        </goab-notification>
      </div>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Complex Content Examples</h2>
      <p>Notification banners with rich content:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>With Action Links</h3>
      <goab-notification type="important" *ngIf="actionBannerOpen">
        <strong>Data Migration Notice:</strong> We will be migrating user data to improve performance.
        <a href="#backup-guide">Learn how to backup your data</a> or
        <a href="#migration-schedule">view the migration schedule</a>.
        For assistance, <a href="mailto:help&#64;example.com">contact our support team</a>.
      </goab-notification>
      <goab-button-group alignment="start" mt="s">
        <goab-button type="tertiary" (onClick)="showActionBanner()" *ngIf="!actionBannerOpen">
          Show Action Links Banner
        </goab-button>
        <goab-button type="tertiary" (onClick)="closeActionBanner()" *ngIf="actionBannerOpen">
          Hide Action Links Banner
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>With Formatted Content</h3>
      <goab-notification type="information" *ngIf="formattedBannerOpen">
        <div>
          <strong>System Update Available</strong><br>
          Version 2.1.0 is now available with the following improvements:
          <ul>
            <li>Enhanced security features</li>
            <li>Improved performance</li>
            <li>Bug fixes and stability improvements</li>
          </ul>
          <a href="#update-guide">View update instructions</a>
        </div>
      </goab-notification>
      <goab-button-group alignment="start" mt="s">
        <goab-button type="tertiary" (onClick)="showFormattedBanner()" *ngIf="!formattedBannerOpen">
          Show Formatted Content Banner
        </goab-button>
        <goab-button type="tertiary" (onClick)="closeFormattedBanner()" *ngIf="formattedBannerOpen">
          Hide Formatted Content Banner
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Type:</strong> Use "information", "important", "event", or "emergency" based on message priority</li>
        <li><strong>Visibility:</strong> Use *ngIf to control banner visibility, notifications are persistent by default</li>
        <li><strong>Content:</strong> Can include plain text, HTML, links, and formatted content</li>
        <li><strong>Placement:</strong> Usually placed at the top of the page or section</li>
        <li><strong>Accessibility:</strong> Announced to screen readers when shown</li>
      </ul>
    </goab-container>
  `,
})
export class NotificationBannerExamplesComponent {
  // Basic banner states
  infoOpen = true;
  importantOpen = true;
  successOpen = false;
  emergencyOpen = false;

  // Interactive banner states
  actionBannerOpen = false;
  formattedBannerOpen = false;
  persistentVisible = false;

  // Multiple banners state
  multipleOpen = {
    info: false,
    success: false,
    important: false
  };

  // Basic banner methods
  showInfo() {
    this.infoOpen = true;
  }

  closeInfo() {
    this.infoOpen = false;
  }

  showImportant() {
    this.importantOpen = true;
  }

  closeImportant() {
    this.importantOpen = false;
  }

  showSuccess() {
    this.successOpen = true;
  }

  closeSuccess() {
    this.successOpen = false;
  }

  showEmergency() {
    this.emergencyOpen = true;
  }

  closeEmergency() {
    this.emergencyOpen = false;
  }

  // Interactive methods
  showMultiple() {
    this.multipleOpen = {
      info: true,
      success: true,
      important: true
    };
  }

  closeMultiple(type: keyof typeof this.multipleOpen) {
    this.multipleOpen[type] = false;
  }

  closeAll() {
    this.infoOpen = false;
    this.importantOpen = false;
    this.successOpen = false;
    this.emergencyOpen = false;
    this.actionBannerOpen = false;
    this.formattedBannerOpen = false;
    this.multipleOpen = {
      info: false,
      success: false,
      important: false
    };
  }

  togglePersistent() {
    this.persistentVisible = !this.persistentVisible;
  }

  // Complex content methods
  showActionBanner() {
    this.actionBannerOpen = true;
  }

  closeActionBanner() {
    this.actionBannerOpen = false;
  }

  showFormattedBanner() {
    this.formattedBannerOpen = true;
  }

  closeFormattedBanner() {
    this.formattedBannerOpen = false;
  }
}

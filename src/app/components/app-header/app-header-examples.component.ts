import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GoabAppHeader,
  GoabAppHeaderMenu,
  GoabMenuButton,
  GoabMenuAction
} from '@abgov/angular-components';
import { GoabMenuButtonOnActionDetail } from '@abgov/ui-components-common';

@Component({
  selector: 'app-app-header-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabAppHeader,
    GoabAppHeaderMenu,
    GoabMenuButton,
    GoabMenuAction
  ],
  templateUrl: './app-header-examples.component.html',
  styleUrls: ['./app-header-examples.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppHeaderExamplesComponent {
  // Event tracking
  eventLog: Array<{ timestamp: string; message: string }> = [];

  onMenuAction(event: GoabMenuButtonOnActionDetail): void {
    this.logEvent('Menu action triggered: ' + event.action);
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

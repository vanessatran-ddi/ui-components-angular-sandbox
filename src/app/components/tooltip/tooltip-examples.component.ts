import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GoabContainer,
  GoabTooltip,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabText,
  GoabBlock,
  GoabIcon,
  GoabIconButton,
  GoabCard
} from '@abgov/angular-components';

@Component({
  selector: 'app-tooltip-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabContainer,
    GoabTooltip,
    GoabSpacer,
    GoabButton,
    GoabButtonGroup,
    GoabText,
    GoabBlock,
    GoabIcon,
    GoabIconButton,
    GoabCard
  ],
  template: `
    <goab-container>
      <h1>Tooltip Component Examples</h1>
      <p>A small popover that displays more information about an item.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Basic Tooltips</h2>
      <p>Simple tooltips with different content and positions:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Position Examples</h3>
      <p>Tooltips can be positioned in different directions relative to their trigger element:</p>

      <goab-block direction="row" gap="l" mb="l">
        <goab-tooltip content="This tooltip appears above the element" position="top">
          <goab-button type="secondary">Top Tooltip</goab-button>
        </goab-tooltip>

        <goab-tooltip content="This tooltip appears below the element" position="bottom">
          <goab-button type="secondary">Bottom Tooltip</goab-button>
        </goab-tooltip>

        <goab-tooltip content="This tooltip appears to the left" position="left">
          <goab-button type="secondary">Left Tooltip</goab-button>
        </goab-tooltip>

        <goab-tooltip content="This tooltip appears to the right" position="right">
          <goab-button type="secondary">Right Tooltip</goab-button>
        </goab-tooltip>
      </goab-block>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Horizontal Alignment Examples</h3>
      <p>Control how the tooltip aligns horizontally with its trigger element:</p>

      <goab-block direction="row" gap="l" mb="l">
        <goab-tooltip content="Left aligned tooltip content" position="top" hAlign="left">
          <goab-button type="tertiary">Left Aligned</goab-button>
        </goab-tooltip>

        <goab-tooltip content="Center aligned tooltip content" position="top" hAlign="center">
          <goab-button type="tertiary">Center Aligned</goab-button>
        </goab-tooltip>

        <goab-tooltip content="Right aligned tooltip content" position="top" hAlign="right">
          <goab-button type="tertiary">Right Aligned</goab-button>
        </goab-tooltip>
      </goab-block>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Icon Tooltips</h2>
      <p>Tooltips are commonly used with icons to provide additional context:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Information Icons</h3>
      <goab-block direction="row" gap="m" mb="l">
        <goab-tooltip content="This provides helpful information about the feature">
          <goab-icon type="information-circle"></goab-icon>
        </goab-tooltip>

        <goab-tooltip content="Click for help documentation" position="bottom">
          <goab-icon type="help"></goab-icon>
        </goab-tooltip>

        <goab-tooltip content="Warning: This action cannot be undone" position="right">
          <goab-icon type="warning"></goab-icon>
        </goab-tooltip>

        <goab-tooltip content="Error: Required field is missing" position="left">
          <goab-icon type="close-circle"></goab-icon>
        </goab-tooltip>
      </goab-block>

      <h3>Action Icon Buttons</h3>
      <p>Tooltip labels for icon-only buttons improve accessibility:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-tooltip content="Edit this item">
          <goab-icon-button icon="pencil" ariaLabel="Edit"></goab-icon-button>
        </goab-tooltip>

        <goab-tooltip content="Delete this item">
          <goab-icon-button icon="trash" ariaLabel="Delete"></goab-icon-button>
        </goab-tooltip>

        <goab-tooltip content="Share this content">
          <goab-icon-button icon="share" ariaLabel="Share"></goab-icon-button>
        </goab-tooltip>

        <goab-tooltip content="Download file">
          <goab-icon-button icon="download" ariaLabel="Download"></goab-icon-button>
        </goab-tooltip>

        <goab-tooltip content="Open settings">
          <goab-icon-button icon="settings" ariaLabel="Settings"></goab-icon-button>
        </goab-tooltip>

        <goab-tooltip content="View notifications">
          <goab-icon-button icon="notifications" ariaLabel="Notifications"></goab-icon-button>
        </goab-tooltip>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Text and Content Tooltips</h2>
      <p>Tooltips can provide additional context for text and other content:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Abbreviated Text</h3>
      <p>Use tooltips to show full text when space is limited:</p>

      <goab-block direction="column" gap="s" mb="l">
        <div>
          <goab-text tag="span" weight="semibold">Posted by: </goab-text>
          <goab-tooltip content="Joan Marie Smith">
            <goab-text tag="span" style="text-decoration: underline; cursor: help;">J.M. Smith</goab-text>
          </goab-tooltip>
        </div>

        <div>
          <goab-text tag="span" weight="semibold">Department: </goab-text>
          <goab-tooltip content="Alberta Infrastructure and Transportation">
            <goab-text tag="span" style="text-decoration: underline; cursor: help;">AIT</goab-text>
          </goab-tooltip>
        </div>

        <div>
          <goab-text tag="span" weight="semibold">Status: </goab-text>
          <goab-tooltip content="Waiting for manager approval">
            <goab-text tag="span" style="text-decoration: underline; cursor: help; color: var(--goa-color-status-warning);">Pending</goab-text>
          </goab-tooltip>
        </div>
      </goab-block>

      <h3>Date and Time Tooltips</h3>
      <p>Show detailed timestamps when displaying relative times:</p>

      <goab-block direction="column" gap="s" mb="l">
        <div>
          <goab-text tag="span" weight="semibold">Created: </goab-text>
          <goab-tooltip content="November 23, 2023 at 2:30 PM MST">
            <goab-text tag="span" style="text-decoration: underline; cursor: help;">2 hours ago</goab-text>
          </goab-tooltip>
        </div>

        <div>
          <goab-text tag="span" weight="semibold">Updated: </goab-text>
          <goab-tooltip content="December 15, 2023 at 9:15 AM MST">
            <goab-text tag="span" style="text-decoration: underline; cursor: help;">3 weeks ago</goab-text>
          </goab-tooltip>
        </div>

        <div>
          <goab-text tag="span" weight="semibold">Due date: </goab-text>
          <goab-tooltip content="January 30, 2024 at 11:59 PM MST">
            <goab-text tag="span" style="text-decoration: underline; cursor: help;">In 6 days</goab-text>
          </goab-tooltip>
        </div>
      </goab-block>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Complex Content Examples</h2>
      <p>Realistic examples of tooltip usage in common interface patterns:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Form Field Help</h3>
      <goab-block direction="column" gap="m" mb="l">
        <div style="display: flex; align-items: center; gap: 8px;">
          <label style="font-weight: 600;">Password</label>
          <goab-tooltip content="Password must be at least 8 characters long and include uppercase, lowercase, and numeric characters">
            <goab-icon type="help"></goab-icon>
          </goab-tooltip>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <label style="font-weight: 600;">Phone Number</label>
          <goab-tooltip content="Enter your 10-digit phone number in the format: (403) 555-1234">
            <goab-icon type="information-circle"></goab-icon>
          </goab-tooltip>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <label style="font-weight: 600;">Social Insurance Number</label>
          <goab-tooltip content="Your SIN is used for tax purposes only and is kept confidential" position="bottom">
            <goab-icon type="help"></goab-icon>
          </goab-tooltip>
        </div>
      </goab-block>

      <h3>Data Table Headers</h3>
      <p>Provide additional context for table column headers:</p>

      <goab-card mb="l">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 1px solid var(--goa-color-greyscale-200);">
              <th style="text-align: left; padding: 12px;">
                <div style="display: flex; align-items: center; gap: 4px;">
                  <span>Application ID</span>
                  <goab-tooltip content="Unique identifier assigned to each application">
                    <goab-icon type="information-circle"></goab-icon>
                  </goab-tooltip>
                </div>
              </th>
              <th style="text-align: left; padding: 12px;">
                <div style="display: flex; align-items: center; gap: 4px;">
                  <span>Priority</span>
                  <goab-tooltip content="High: Urgent, Medium: Normal processing, Low: Non-critical" position="bottom">
                    <goab-icon type="help"></goab-icon>
                  </goab-tooltip>
                </div>
              </th>
              <th style="text-align: left; padding: 12px;">
                <div style="display: flex; align-items: center; gap: 4px;">
                  <span>SLA</span>
                  <goab-tooltip content="Service Level Agreement - Maximum processing time commitment" position="left">
                    <goab-icon type="information-circle"></goab-icon>
                  </goab-tooltip>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--goa-color-greyscale-100);">
              <td style="padding: 12px;">APP-2023-001</td>
              <td style="padding: 12px;">High</td>
              <td style="padding: 12px;">2 business days</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--goa-color-greyscale-100);">
              <td style="padding: 12px;">APP-2023-002</td>
              <td style="padding: 12px;">Medium</td>
              <td style="padding: 12px;">5 business days</td>
            </tr>
          </tbody>
        </table>
      </goab-card>

      <h3>Status Indicators</h3>
      <p>Explain status meanings with tooltips:</p>

      <goab-block direction="row" gap="l" mb="l">
        <goab-tooltip content="Application has been submitted and is under review">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--goa-color-status-warning);"></div>
            <goab-text>In Review</goab-text>
          </div>
        </goab-tooltip>

        <goab-tooltip content="Application has been approved and processed successfully">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--goa-color-status-success);"></div>
            <goab-text>Approved</goab-text>
          </div>
        </goab-tooltip>

        <goab-tooltip content="Application was rejected due to missing documentation">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--goa-color-status-error);"></div>
            <goab-text>Rejected</goab-text>
          </div>
        </goab-tooltip>

        <goab-tooltip content="Application is on hold pending additional information">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--goa-color-greyscale-500);"></div>
            <goab-text>On Hold</goab-text>
          </div>
        </goab-tooltip>
      </goab-block>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Interactive Examples</h2>
      <p>Test tooltip behavior with different triggers and content:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Long Content Tooltips</h3>
      <p>Tooltips can handle longer text content:</p>

      <goab-block direction="row" gap="m" mb="l">
        <goab-tooltip content="This is a longer tooltip that demonstrates how the component handles multi-line content. It provides detailed information that might not fit in the main interface.">
          <goab-button type="secondary">Long Content</goab-button>
        </goab-tooltip>

        <goab-tooltip content="Government services are designed to serve all Albertans with accessibility, efficiency, and transparency as core principles. This tooltip explains the commitment to public service excellence.">
          <goab-button type="secondary">Very Long Content</goab-button>
        </goab-tooltip>
      </goab-block>

      <h3>Dynamic Content</h3>
      <p>Tooltips with content that changes based on state:</p>

      <goab-block direction="row" gap="m" mb="l">
        <goab-tooltip [content]="favoriteTooltip">
          <goab-icon-button 
            [icon]="isFavorite ? 'heart' : 'heart-circle'" 
            [ariaLabel]="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
            (onClick)="toggleFavorite()">
          </goab-icon-button>
        </goab-tooltip>

        <goab-tooltip [content]="notificationTooltip">
          <goab-icon-button 
            [icon]="notificationsEnabled ? 'notifications' : 'notifications-off'" 
            [ariaLabel]="notificationsEnabled ? 'Disable notifications' : 'Enable notifications'"
            (onClick)="toggleNotifications()">
          </goab-icon-button>
        </goab-tooltip>

        <goab-tooltip [content]="visibilityTooltip">
          <goab-icon-button 
            [icon]="isVisible ? 'eye' : 'eye-off'" 
            [ariaLabel]="isVisible ? 'Hide item' : 'Show item'"
            (onClick)="toggleVisibility()">
          </goab-icon-button>
        </goab-tooltip>
      </goab-block>

      <h3>Tooltip Positioning Test</h3>
      <p>Test how tooltips behave near screen edges:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="tertiary" (onClick)="changePosition('top')">
          {{ currentPosition === 'top' ? '✓' : '' }} Top
        </goab-button>
        <goab-button type="tertiary" (onClick)="changePosition('bottom')">
          {{ currentPosition === 'bottom' ? '✓' : '' }} Bottom
        </goab-button>
        <goab-button type="tertiary" (onClick)="changePosition('left')">
          {{ currentPosition === 'left' ? '✓' : '' }} Left
        </goab-button>
        <goab-button type="tertiary" (onClick)="changePosition('right')">
          {{ currentPosition === 'right' ? '✓' : '' }} Right
        </goab-button>
      </goab-button-group>

      <div style="padding: 20px; border: 1px dashed var(--goa-color-greyscale-300); text-align: center;">
        <goab-tooltip [content]="dynamicTooltipContent" [position]="currentPosition">
          <goab-button type="primary">Test Tooltip Position</goab-button>
        </goab-tooltip>
      </div>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Content:</strong> Keep tooltip text concise and helpful</li>
        <li><strong>Position:</strong> Use "top", "bottom", "left", or "right" based on available space</li>
        <li><strong>Horizontal Alignment:</strong> Use "left", "center", or "right" for fine-tuned positioning</li>
        <li><strong>Trigger:</strong> Tooltips appear on hover and focus, disappear on mouse leave or blur</li>
        <li><strong>Accessibility:</strong> Tooltip content is announced to screen readers</li>
        <li><strong>Mobile:</strong> Consider touch interactions and ensure tooltips are accessible on mobile devices</li>
        <li><strong>Performance:</strong> Tooltips are lightweight and don't impact page performance</li>
      </ul>
    </goab-container>
  `,
})
export class TooltipExamplesComponent {
  // Dynamic state examples
  isFavorite = false;
  notificationsEnabled = true;
  isVisible = true;
  currentPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';

  // Computed tooltip content
  get favoriteTooltip(): string {
    return this.isFavorite ? 'Remove from favorites' : 'Add to favorites';
  }

  get notificationTooltip(): string {
    return this.notificationsEnabled ? 'Disable notifications' : 'Enable notifications';
  }

  get visibilityTooltip(): string {
    return this.isVisible ? 'Hide this item' : 'Show this item';
  }

  get dynamicTooltipContent(): string {
    return `This tooltip is positioned "${this.currentPosition}" relative to the button`;
  }

  // Toggle methods
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  toggleNotifications() {
    this.notificationsEnabled = !this.notificationsEnabled;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  changePosition(position: 'top' | 'bottom' | 'left' | 'right') {
    this.currentPosition = position;
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GoabContainer,
  GoabTemporaryNotificationCtrl,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabText,
  GoabBlock,
} from '@abgov/angular-components';

import { TemporaryNotification } from "@abgov/ui-components-common";

@Component({
  selector: 'app-temporary-notification-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabContainer,
    GoabTemporaryNotificationCtrl,
    GoabSpacer,
    GoabButton,
    GoabButtonGroup,
    GoabText,
    GoabBlock
  ],
  template: `
    <goab-container>
      <goab-temporary-notification-ctrl></goab-temporary-notification-ctrl>

      <h1>Temporary Notification Component Examples</h1>
      <p>Temporary notifications provide brief feedback about an action or event. They appear temporarily and can include an action for users to take.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Basic Notifications</h2>
      <p>Different types of temporary notifications:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="showSuccessNotification()">
          Show Success
        </goab-button>
        <goab-button type="secondary" (onClick)="showErrorNotification()">
          Show Error
        </goab-button>
        <goab-button type="tertiary" (onClick)="showInfoNotification()">
          Show Information
        </goab-button>
        <goab-button type="tertiary" (onClick)="showWarningNotification()">
          Show Warning
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Notifications with Actions</h2>
      <p>Notifications that include action buttons for user interaction:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="showNotificationWithAction()">
          Show Comment Notification
        </goab-button>
        <goab-button type="secondary" (onClick)="showUndoNotification()">
          Show Undo Action
        </goab-button>
        <goab-button type="tertiary" (onClick)="showViewNotification()">
          Show View Action
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Progress Notifications</h2>
      <p>Show progress for long-running operations:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="simulateFileUpload()" [disabled]="isUploading">
          {{ isUploading ? 'Uploading...' : 'Upload File' }}
        </goab-button>
        <goab-button type="secondary" (onClick)="simulateDataSync()" [disabled]="isSyncing">
          {{ isSyncing ? 'Syncing...' : 'Sync Data' }}
        </goab-button>
        <goab-button type="tertiary" leadingIcon="download" (onClick)="simulateDownload()" [disabled]="isDownloading">
          {{ isDownloading ? 'Downloading...' : 'Download Report' }}
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Indeterminate Progress</h2>
      <p>Show progress when the duration is unknown:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" leadingIcon="search" (onClick)="simulateSearch()" [disabled]="isSearching">
          {{ isSearching ? 'Searching...' : 'Search Database' }}
        </goab-button>
        <goab-button type="secondary" (onClick)="simulateProcessing()" [disabled]="isProcessing">
          {{ isProcessing ? 'Processing...' : 'Process Data' }}
        </goab-button>
        <goab-button type="tertiary" (onClick)="simulateValidation()" [disabled]="isValidating">
          {{ isValidating ? 'Validating...' : 'Validate Records' }}
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Duration Examples</h2>
      <p>Notifications with different display durations:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="tertiary" (onClick)="showShortNotification()">
          Short Duration (2s)
        </goab-button>
        <goab-button type="tertiary" (onClick)="showMediumNotification()">
          Medium Duration (4s)
        </goab-button>
        <goab-button type="tertiary" (onClick)="showLongNotification()">
          Long Duration (6s)
        </goab-button>
        <goab-button type="tertiary" (onClick)="showPersistentNotification()">
          Persistent (Manual dismiss)
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Realistic Examples</h2>
      <p>Common use cases for temporary notifications:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Form Operations</h3>
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="simulateSave()">
          Save Form
        </goab-button>
        <goab-button type="secondary" (onClick)="simulateDelete()">
          Delete Item
        </goab-button>
        <goab-button type="tertiary" (onClick)="simulateUpdate()">
          Update Record
        </goab-button>
      </goab-button-group>

      <h3>File Operations</h3>
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="simulateMultiFileUpload()">
          Upload Multiple Files
        </goab-button>
        <goab-button type="secondary" (onClick)="simulateBackup()">
          Create Backup
        </goab-button>
        <goab-button type="tertiary" (onClick)="simulateExport()">
          Export Data
        </goab-button>
      </goab-button-group>

      <h3>System Operations</h3>
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="simulateSystemCheck()">
          System Health Check
        </goab-button>
        <goab-button type="secondary" (onClick)="simulateConfigUpdate()">
          Update Configuration
        </goab-button>
        <goab-button type="tertiary" (onClick)="simulateCacheRefresh()">
          Refresh Cache
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Error Handling Examples</h2>
      <p>How to handle failures and show appropriate error notifications:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="secondary" (onClick)="simulateNetworkError()">
          Simulate Network Error
        </goab-button>
        <goab-button type="secondary" (onClick)="simulateValidationError()">
          Simulate Validation Error
        </goab-button>
        <goab-button type="secondary" (onClick)="simulatePermissionError()">
          Simulate Permission Error
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Types:</strong> Use "basic", "success", "failure", "indeterminate", "progress"</li>
        <li><strong>Duration:</strong> "short" (2s), "medium" (4s), "long" (6s), or persistent</li>
        <li><strong>Actions:</strong> Include actionText and action callback for interactive notifications</li>
        <li><strong>Progress:</strong> Use setProgress() to update progress notifications (0-100)</li>
        <li><strong>Dismissal:</strong> Use dismiss() to manually close notifications</li>
        <li><strong>CancelUUID:</strong> Use cancelUUID to replace an existing notification</li>
        <li><strong>Controller:</strong> Always include goab-temporary-notification-ctrl in your template</li>
      </ul>
    </goab-container>
  `,
})
export class TemporaryNotificationExamplesComponent {
  // Operation states
  isUploading = false;
  isSyncing = false;
  isDownloading = false;
  isSearching = false;
  isProcessing = false;
  isValidating = false;

  // Basic notification methods
  showSuccessNotification() {
    TemporaryNotification.show("Operation completed successfully!", {
      type: "success"
    });
  }

  showErrorNotification() {
    TemporaryNotification.show("An error occurred while processing your request.", {
      type: "failure",
      duration: "medium"
    });
  }

  showInfoNotification() {
    TemporaryNotification.show("New features are available in the latest update.", {
      type: "basic",
      duration: "medium"
    });
  }

  showWarningNotification() {
    TemporaryNotification.show("Your session will expire in 5 minutes.", {
      type: "success",
      duration: "long"
    });
  }

  // Notifications with actions
  showNotificationWithAction() {
    const uuid = TemporaryNotification.show("Edna Mode commented on your assigned case.", {
      actionText: "View",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        TemporaryNotification.show("Viewing comment details...", { type: "basic" });
      }
    });
  }

  showUndoNotification() {
    const uuid = TemporaryNotification.show("Item deleted successfully.", {
      type: "success",
      actionText: "Undo",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        TemporaryNotification.show("Item restored.", { type: "success" });
      },
      duration: "long"
    });
  }

  showViewNotification() {
    const uuid = TemporaryNotification.show("Report generated successfully.", {
      type: "success",
      actionText: "View Report",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        TemporaryNotification.show("Opening report viewer...", { type: "basic" });
      }
    });
  }

  // Progress notifications
  async simulateFileUpload() {
    if (this.isUploading) return;

    this.isUploading = true;
    const uuid = TemporaryNotification.show("Uploading file...", {
      type: "progress",
      actionText: "Cancel",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        this.isUploading = false;
        TemporaryNotification.show("Upload cancelled.", { type: "basic" });
      }
    });

    // Simulate progress updates
    for (let progress = 0; progress <= 100; progress += 25) {
      await new Promise(resolve => setTimeout(resolve, 500));
      if (!this.isUploading) return; // Check if cancelled
      TemporaryNotification.setProgress(uuid, progress);
    }

    this.isUploading = false;
    TemporaryNotification.show("File uploaded successfully!", {
      type: "success",
      actionText: "View",
      action: () => {
        TemporaryNotification.show("Opening file viewer...", { type: "basic" });
      },
      cancelUUID: uuid
    });
  }

  async simulateDataSync() {
    if (this.isSyncing) return;

    this.isSyncing = true;
    const uuid = TemporaryNotification.show("Syncing data...", {
      type: "progress",
      actionText: "Cancel",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        this.isSyncing = false;
      }
    });

    // Simulate variable progress
    const progressSteps = [10, 30, 50, 75, 90, 100];
    for (const progress of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 600));
      if (!this.isSyncing) return;
      TemporaryNotification.setProgress(uuid, progress);
    }

    this.isSyncing = false;
    TemporaryNotification.show("Data synchronized successfully.", {
      type: "success",
      cancelUUID: uuid
    });
  }

  async simulateDownload() {
    if (this.isDownloading) return;

    this.isDownloading = true;
    const uuid = TemporaryNotification.show("Downloading report D-23459", {
      type: "progress",
      actionText: "Cancel",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        this.isDownloading = false;
      }
    });

    try {
      // Simulate download with progress
      const steps = [25, 50, 75, 100];
      for (const progress of steps) {
        await new Promise(resolve => setTimeout(resolve, 800));
        if (!this.isDownloading) return;
        TemporaryNotification.setProgress(uuid, progress);
      }

      this.isDownloading = false;
      TemporaryNotification.show("Report downloaded", {
        type: "success",
        duration: "medium",
        actionText: "View",
        action: () => {
          TemporaryNotification.show("Opening downloaded file...", { type: "basic" });
        },
        cancelUUID: uuid
      });
    } catch (error) {
      this.isDownloading = false;
      TemporaryNotification.show("Download failed", {
        type: "failure",
        duration: "medium",
        cancelUUID: uuid
      });
    }
  }

  // Indeterminate progress
  async simulateSearch() {
    if (this.isSearching) return;

    this.isSearching = true;
    const uuid = TemporaryNotification.show("Searching case management system...", {
      type: "indeterminate",
      actionText: "Cancel",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        this.isSearching = false;
      }
    });

    // Simulate search duration
    await new Promise(resolve => setTimeout(resolve, 3000));

    if (!this.isSearching) return;

    this.isSearching = false;
    TemporaryNotification.show("Search complete - 47 records found", {
      type: "success",
      duration: "medium",
      actionText: "View",
      action: () => {
        TemporaryNotification.show("Loading search results...", { type: "basic" });
      },
      cancelUUID: uuid
    });
  }

  async simulateProcessing() {
    if (this.isProcessing) return;

    this.isProcessing = true;
    const uuid = TemporaryNotification.show("Processing data...", {
      type: "indeterminate",
      actionText: "Cancel",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        this.isProcessing = false;
      }
    });

    await new Promise(resolve => setTimeout(resolve, 2500));

    if (!this.isProcessing) return;

    this.isProcessing = false;
    TemporaryNotification.show("Data processing completed.", {
      type: "success",
      cancelUUID: uuid
    });
  }

  async simulateValidation() {
    if (this.isValidating) return;

    this.isValidating = true;
    const uuid = TemporaryNotification.show("Validating records...", {
      type: "indeterminate"
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    this.isValidating = false;
    TemporaryNotification.show("Validation complete - 3 warnings found", {
      type: "basic",
      actionText: "Review",
      action: () => {
        TemporaryNotification.show("Opening validation report...", { type: "basic" });
      },
      cancelUUID: uuid
    });
  }

  // Duration examples
  showShortNotification() {
    TemporaryNotification.show("This notification will disappear quickly.", {
      type: "basic",
      duration: "short"
    });
  }

  showMediumNotification() {
    TemporaryNotification.show("This notification stays for a moderate time.", {
      type: "basic",
      duration: "medium"
    });
  }

  showLongNotification() {
    TemporaryNotification.show("This notification lingers for a longer time.", {
      type: "basic",
      duration: "long"
    });
  }

  showPersistentNotification() {
    const uuid = TemporaryNotification.show("This notification won't disappear until dismissed.", {
      type: "basic",
      actionText: "Dismiss",
      action: () => {
        TemporaryNotification.dismiss(uuid);
      }
    });
  }

  // Realistic examples
  async simulateSave() {
    const uuid = TemporaryNotification.show("Saving form...", {
      type: "indeterminate"
    });

    await new Promise(resolve => setTimeout(resolve, 1500));

    TemporaryNotification.show("Form saved successfully!", {
      type: "success",
      cancelUUID: uuid
    });
  }

  async simulateDelete() {
    const uuid = TemporaryNotification.show("Deleting item...", {
      type: "indeterminate"
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    TemporaryNotification.show("Item deleted.", {
      type: "success",
      actionText: "Undo",
      action: () => {
        TemporaryNotification.show("Item restored.", { type: "success" });
      },
      cancelUUID: uuid
    });
  }

  async simulateUpdate() {
    const uuid = TemporaryNotification.show("Updating record...", {
      type: "indeterminate"
    });

    await new Promise(resolve => setTimeout(resolve, 1200));

    TemporaryNotification.show("Record updated successfully.", {
      type: "success",
      cancelUUID: uuid
    });
  }

  // File operations
  async simulateMultiFileUpload() {
    const uuid = TemporaryNotification.show("Uploading 5 files...", {
      type: "progress",
      actionText: "Cancel",
      action: () => {
        TemporaryNotification.dismiss(uuid);
        TemporaryNotification.show("Upload cancelled.", { type: "basic" });
      }
    });

    for (let progress = 0; progress <= 100; progress += 20) {
      await new Promise(resolve => setTimeout(resolve, 600));
      TemporaryNotification.setProgress(uuid, progress);
    }

    TemporaryNotification.show("All files uploaded successfully!", {
      type: "success",
      actionText: "View Files",
      action: () => {
        TemporaryNotification.show("Opening file manager...", { type: "basic" });
      },
      cancelUUID: uuid
    });
  }

  async simulateBackup() {
    const uuid = TemporaryNotification.show("Creating backup...", {
      type: "progress"
    });

    const steps = [15, 40, 70, 85, 100];
    for (const progress of steps) {
      await new Promise(resolve => setTimeout(resolve, 700));
      TemporaryNotification.setProgress(uuid, progress);
    }

    TemporaryNotification.show("Backup created successfully.", {
      type: "success",
      cancelUUID: uuid
    });
  }

  async simulateExport() {
    const uuid = TemporaryNotification.show("Exporting data...", {
      type: "indeterminate"
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    TemporaryNotification.show("Data exported to CSV file.", {
      type: "success",
      actionText: "Download",
      action: () => {
        TemporaryNotification.show("Download started...", { type: "basic" });
      },
      cancelUUID: uuid
    });
  }

  // System operations
  async simulateSystemCheck() {
    const uuid = TemporaryNotification.show("Running system health check...", {
      type: "indeterminate"
    });

    await new Promise(resolve => setTimeout(resolve, 3000));

    TemporaryNotification.show("System health check completed - All systems operational.", {
      type: "success",
      cancelUUID: uuid
    });
  }

  async simulateConfigUpdate() {
    const uuid = TemporaryNotification.show("Updating configuration...", {
      type: "indeterminate"
    });

    await new Promise(resolve => setTimeout(resolve, 1800));

    TemporaryNotification.show("Configuration updated. Restart required.", {
      type: "basic",
      actionText: "Restart Now",
      action: () => {
        TemporaryNotification.show("Scheduling restart...", { type: "basic" });
      },
      cancelUUID: uuid
    });
  }

  async simulateCacheRefresh() {
    const uuid = TemporaryNotification.show("Refreshing cache...", {
      type: "indeterminate"
    });

    await new Promise(resolve => setTimeout(resolve, 1500));

    TemporaryNotification.show("Cache refreshed successfully.", {
      type: "success",
      cancelUUID: uuid
    });
  }

  // Error handling examples
  simulateNetworkError() {
    TemporaryNotification.show("Network connection failed. Please check your internet connection.", {
      type: "failure",
      duration: "long",
      actionText: "Retry",
      action: () => {
        TemporaryNotification.show("Retrying connection...", { type: "basic" });
      }
    });
  }

  simulateValidationError() {
    TemporaryNotification.show("Form validation failed. Please check required fields.", {
      type: "failure",
      duration: "medium",
      actionText: "Show Errors",
      action: () => {
        TemporaryNotification.show("Highlighting form errors...", { type: "basic" });
      }
    });
  }

  simulatePermissionError() {
    TemporaryNotification.show("Access denied. You don't have permission to perform this action.", {
      type: "failure",
      duration: "long",
      actionText: "Contact Admin",
      action: () => {
        TemporaryNotification.show("Opening contact form...", { type: "basic" });
      }
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  GoabContainer, 
  GoabCircularProgress, 
  GoabSpacer, 
  GoabButton, 
  GoabButtonGroup,
  GoabText,
  GoabBlock
} from '@abgov/angular-components';

@Component({
  selector: 'app-progress-indicator-examples',
  standalone: true,
  imports: [
    CommonModule, 
    GoabContainer, 
    GoabCircularProgress, 
    GoabSpacer, 
    GoabButton, 
    GoabButtonGroup,
    GoabText,
    GoabBlock
  ],
  template: `
    <goab-container>
      <h1>Progress Indicator Component Examples</h1>
      <p>Provide visual feedback to users while loading.</p>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Progress Indicator Variants</h2>
      <p>Different variants and sizes of progress indicators:</p>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Inline Progress Indicators</h3>
      <p>Use inline variants for loading content within a section:</p>
      
      <h4>Large Size</h4>
      <goab-circular-progress 
        variant="inline" 
        size="large" 
        message="Loading large content..." 
        [visible]="inlineLargeVisible">
      </goab-circular-progress>
      
      <goab-button-group alignment="start" mt="m">
        <goab-button type="tertiary" (onClick)="toggleInlineLarge()">
          {{ inlineLargeVisible ? 'Hide' : 'Show' }} Large Inline
        </goab-button>
      </goab-button-group>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h4>Small Size</h4>
      <goab-circular-progress 
        variant="inline" 
        size="small" 
        message="Loading small content..." 
        [visible]="inlineSmallVisible">
      </goab-circular-progress>
      
      <goab-button-group alignment="start" mt="m">
        <goab-button type="tertiary" (onClick)="toggleInlineSmall()">
          {{ inlineSmallVisible ? 'Hide' : 'Show' }} Small Inline
        </goab-button>
      </goab-button-group>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h3>Fullscreen Progress Indicators</h3>
      <p>Use fullscreen variants for page-wide loading states:</p>
      
      <h4>Large Fullscreen</h4>
      <goab-button-group alignment="start" mb="m">
        <goab-button (onClick)="showFullscreenLarge()">
          Show Large Fullscreen Progress
        </goab-button>
      </goab-button-group>
      
      <goab-circular-progress 
        variant="fullscreen" 
        size="large" 
        message="Loading application..." 
        [visible]="fullscreenLargeVisible">
      </goab-circular-progress>
      
      <h4>Small Fullscreen</h4>
      <goab-button-group alignment="start" mb="m">
        <goab-button (onClick)="showFullscreenSmall()">
          Show Small Fullscreen Progress
        </goab-button>
      </goab-button-group>
      
      <goab-circular-progress 
        variant="fullscreen" 
        size="small" 
        message="Processing request..." 
        [visible]="fullscreenSmallVisible">
      </goab-circular-progress>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Progress with Specific Values</h2>
      <p>Progress indicators showing specific progress percentages:</p>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Determinate Progress</h3>
      <p>Current progress: {{ currentProgress }}%</p>
      
      <goab-circular-progress 
        variant="inline" 
        size="large" 
        [progress]="currentProgress" 
        message="Uploading file... {{ currentProgress }}% complete" 
        [visible]="determinateVisible">
      </goab-circular-progress>
      
      <goab-button-group alignment="start" mt="m" gap="compact">
        <goab-button type="primary" (onClick)="startProgress()" *ngIf="!progressRunning">
          Start Upload Progress
        </goab-button>
        <goab-button type="secondary" (onClick)="pauseProgress()" *ngIf="progressRunning">
          Pause Progress
        </goab-button>
        <goab-button type="tertiary" (onClick)="resetProgress()">
          Reset Progress
        </goab-button>
        <goab-button type="tertiary" (onClick)="toggleDeterminate()">
          {{ determinateVisible ? 'Hide' : 'Show' }} Progress
        </goab-button>
      </goab-button-group>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Different Progress Values</h3>
      <p>Examples with various progress percentages:</p>
      
      <goab-block gap="s" direction="column">
        <div>
          <goab-text tag="span" weight="semibold">25% Complete:</goab-text>
          <goab-circular-progress 
            variant="inline" 
            size="small" 
            [progress]="25" 
            message="25% complete" 
            [visible]="true">
          </goab-circular-progress>
        </div>
        
        <div>
          <goab-text tag="span" weight="semibold">50% Complete:</goab-text>
          <goab-circular-progress 
            variant="inline" 
            size="small" 
            [progress]="50" 
            message="Halfway there..." 
            [visible]="true">
          </goab-circular-progress>
        </div>
        
        <div>
          <goab-text tag="span" weight="semibold">75% Complete:</goab-text>
          <goab-circular-progress 
            variant="inline" 
            size="small" 
            [progress]="75" 
            message="Almost done!" 
            [visible]="true">
          </goab-circular-progress>
        </div>
        
        <div>
          <goab-text tag="span" weight="semibold">90% Complete:</goab-text>
          <goab-circular-progress 
            variant="inline" 
            size="small" 
            [progress]="90" 
            message="Finishing up..." 
            [visible]="true">
          </goab-circular-progress>
        </div>
      </goab-block>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Interactive Examples</h2>
      <p>Realistic scenarios for using progress indicators:</p>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>File Upload Simulation</h3>
      <goab-button-group alignment="start" mb="m" gap="compact">
        <goab-button (onClick)="simulateFileUpload()" [disabled]="fileUploadRunning">
          {{ fileUploadRunning ? 'Uploading...' : 'Start File Upload' }}
        </goab-button>
        <goab-button type="secondary" (onClick)="cancelFileUpload()" *ngIf="fileUploadRunning">
          Cancel Upload
        </goab-button>
      </goab-button-group>
      
      <div *ngIf="fileUploadVisible">
        <goab-circular-progress 
          variant="inline" 
          size="large" 
          [progress]="fileUploadProgress" 
          [message]="fileUploadMessage" 
          [visible]="fileUploadVisible">
        </goab-circular-progress>
      </div>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Data Processing Simulation</h3>
      <goab-button-group alignment="start" mb="m" gap="compact">
        <goab-button (onClick)="simulateDataProcessing()" [disabled]="dataProcessingRunning">
          {{ dataProcessingRunning ? 'Processing...' : 'Start Data Processing' }}
        </goab-button>
        <goab-button type="secondary" (onClick)="cancelDataProcessing()" *ngIf="dataProcessingRunning">
          Cancel Processing
        </goab-button>
      </goab-button-group>
      
      <div *ngIf="dataProcessingVisible">
        <goab-circular-progress 
          variant="inline" 
          size="large" 
          [progress]="dataProcessingProgress" 
          [message]="dataProcessingMessage" 
          [visible]="dataProcessingVisible">
        </goab-circular-progress>
      </div>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Variant:</strong> Use "inline" for section loading, "fullscreen" for page loading</li>
        <li><strong>Size:</strong> "large" for primary loading states, "small" for secondary content</li>
        <li><strong>Progress:</strong> Omit for infinite progress, set value (0-100) for determinate progress</li>
        <li><strong>Message:</strong> Provide clear, helpful loading messages</li>
        <li><strong>Visible:</strong> Control visibility for smooth fade transitions</li>
        <li><strong>Accessibility:</strong> Messages are announced to screen readers</li>
      </ul>
    </goab-container>
  `,
})
export class ProgressIndicatorExamplesComponent {
  // Basic visibility states
  inlineLargeVisible = true;
  inlineSmallVisible = false;
  fullscreenLargeVisible = false;
  fullscreenSmallVisible = false;
  determinateVisible = true;
  
  // Progress simulation states
  currentProgress = 0;
  progressRunning = false;
  progressInterval: any;
  
  // File upload simulation
  fileUploadVisible = false;
  fileUploadProgress = 0;
  fileUploadRunning = false;
  fileUploadMessage = 'Preparing upload...';
  fileUploadInterval: any;
  
  // Data processing simulation
  dataProcessingVisible = false;
  dataProcessingProgress = 0;
  dataProcessingRunning = false;
  dataProcessingMessage = 'Initializing...';
  dataProcessingInterval: any;

  // Basic toggle methods
  toggleInlineLarge() {
    this.inlineLargeVisible = !this.inlineLargeVisible;
  }

  toggleInlineSmall() {
    this.inlineSmallVisible = !this.inlineSmallVisible;
  }

  showFullscreenLarge() {
    this.fullscreenLargeVisible = true;
    // Auto-hide after 3 seconds for demo
    setTimeout(() => {
      this.fullscreenLargeVisible = false;
    }, 3000);
  }

  showFullscreenSmall() {
    this.fullscreenSmallVisible = true;
    // Auto-hide after 3 seconds for demo
    setTimeout(() => {
      this.fullscreenSmallVisible = false;
    }, 3000);
  }

  toggleDeterminate() {
    this.determinateVisible = !this.determinateVisible;
  }

  // Progress simulation methods
  startProgress() {
    if (this.progressRunning) return;
    
    this.progressRunning = true;
    this.determinateVisible = true;
    
    this.progressInterval = setInterval(() => {
      if (this.currentProgress < 100) {
        this.currentProgress += Math.random() * 10;
        if (this.currentProgress > 100) {
          this.currentProgress = 100;
        }
      } else {
        this.pauseProgress();
      }
    }, 500);
  }

  pauseProgress() {
    this.progressRunning = false;
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  resetProgress() {
    this.pauseProgress();
    this.currentProgress = 0;
  }

  // File upload simulation
  simulateFileUpload() {
    if (this.fileUploadRunning) return;
    
    this.fileUploadRunning = true;
    this.fileUploadVisible = true;
    this.fileUploadProgress = 0;
    this.fileUploadMessage = 'Preparing upload...';
    
    const messages = [
      'Preparing upload...',
      'Uploading file...',
      'Processing file...',
      'Finalizing upload...',
      'Upload complete!'
    ];
    
    this.fileUploadInterval = setInterval(() => {
      if (this.fileUploadProgress < 100) {
        this.fileUploadProgress += Math.random() * 8 + 2;
        if (this.fileUploadProgress > 100) {
          this.fileUploadProgress = 100;
        }
        
        // Update message based on progress
        if (this.fileUploadProgress < 20) {
          this.fileUploadMessage = messages[0];
        } else if (this.fileUploadProgress < 60) {
          this.fileUploadMessage = messages[1];
        } else if (this.fileUploadProgress < 90) {
          this.fileUploadMessage = messages[2];
        } else if (this.fileUploadProgress < 100) {
          this.fileUploadMessage = messages[3];
        } else {
          this.fileUploadMessage = messages[4];
        }
      } else {
        this.cancelFileUpload();
        // Auto-hide after completion
        setTimeout(() => {
          this.fileUploadVisible = false;
        }, 2000);
      }
    }, 300);
  }

  cancelFileUpload() {
    this.fileUploadRunning = false;
    if (this.fileUploadInterval) {
      clearInterval(this.fileUploadInterval);
    }
  }

  // Data processing simulation
  simulateDataProcessing() {
    if (this.dataProcessingRunning) return;
    
    this.dataProcessingRunning = true;
    this.dataProcessingVisible = true;
    this.dataProcessingProgress = 0;
    this.dataProcessingMessage = 'Initializing...';
    
    const steps = [
      'Initializing...',
      'Loading data...',
      'Validating records...',
      'Processing entries...',
      'Generating report...',
      'Finalizing results...',
      'Processing complete!'
    ];
    
    this.dataProcessingInterval = setInterval(() => {
      if (this.dataProcessingProgress < 100) {
        this.dataProcessingProgress += Math.random() * 6 + 1;
        if (this.dataProcessingProgress > 100) {
          this.dataProcessingProgress = 100;
        }
        
        // Update message based on progress
        const stepIndex = Math.min(
          Math.floor((this.dataProcessingProgress / 100) * steps.length),
          steps.length - 1
        );
        this.dataProcessingMessage = steps[stepIndex];
      } else {
        this.cancelDataProcessing();
        // Auto-hide after completion
        setTimeout(() => {
          this.dataProcessingVisible = false;
        }, 2000);
      }
    }, 400);
  }

  cancelDataProcessing() {
    this.dataProcessingRunning = false;
    if (this.dataProcessingInterval) {
      clearInterval(this.dataProcessingInterval);
    }
  }

  ngOnDestroy() {
    // Clean up intervals
    this.pauseProgress();
    this.cancelFileUpload();
    this.cancelDataProcessing();
  }
}
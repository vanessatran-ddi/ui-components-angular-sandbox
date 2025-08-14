import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  GoabContainer,
  GoabButton,
  GoabButtonGroup,
  GoabSpacer,
  GoabText,
  GoabBlock,
  GoabCard,
  GoabModal,
  GoabFormItem,
  GoabInput
} from '@abgov/angular-components';

@Component({
  selector: 'app-button-examples',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoabContainer,
    GoabButton,
    GoabButtonGroup,
    GoabSpacer,
    GoabText,
    GoabBlock,
    GoabCard,
    GoabModal,
    GoabFormItem,
    GoabInput
  ],
  template: `
    <goab-container>
      <h1>Button Component Examples</h1>
      <p>Carry out an important action or to navigate to another page.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Button Types</h2>
      <p>Different button types for various use cases and hierarchy:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Primary Button</h3>
      <p>Use for the most important action on a page or section. There should typically be only one primary button per view.</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="onButtonClick('Primary button clicked')">
          Primary Action
        </goab-button>
        <goab-button type="primary" leadingIcon="add" (onClick)="onButtonClick('Add button clicked')">
          Add Item
        </goab-button>
        <goab-button type="primary" trailingIcon="arrow-forward" (onClick)="onButtonClick('Continue button clicked')">
          Continue
        </goab-button>
      </goab-button-group>

      <h3>Submit Button</h3>
      <p>Use for form submissions. Functionally similar to primary but semantically different.</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="submit" (onClick)="onButtonClick('Submit button clicked')">
          Submit Form
        </goab-button>
        <goab-button type="submit" leadingIcon="save" (onClick)="onButtonClick('Save button clicked')">
          Save Changes
        </goab-button>
        <goab-button type="submit" trailingIcon="send" (onClick)="onButtonClick('Send button clicked')">
          Send Application
        </goab-button>
      </goab-button-group>

      <h3>Secondary Button</h3>
      <p>Use for important but secondary actions. Often paired with primary buttons.</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="secondary" (onClick)="onButtonClick('Secondary button clicked')">
          Cancel
        </goab-button>
        <goab-button type="secondary" leadingIcon="arrow-back" (onClick)="onButtonClick('Back button clicked')">
          Go Back
        </goab-button>
        <goab-button type="secondary" trailingIcon="open" (onClick)="onButtonClick('Preview button clicked')">
          Preview
        </goab-button>
      </goab-button-group>

      <h3>Tertiary Button</h3>
      <p>Use for less prominent actions or when you need more subtle styling.</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="tertiary" (onClick)="onButtonClick('Tertiary button clicked')">
          Learn More
        </goab-button>
        <goab-button type="tertiary" leadingIcon="information-circle" (onClick)="onButtonClick('Info button clicked')">
          More Info
        </goab-button>
        <goab-button type="tertiary" trailingIcon="chevron-down" (onClick)="onButtonClick('Expand button clicked')">
          Expand Details
        </goab-button>
      </goab-button-group>

      <h3>Start Button</h3>
      <p>Use for beginning processes or workflows.</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="start" (onClick)="onButtonClick('Start button clicked')">
          Get Started
        </goab-button>
        <goab-button type="start" leadingIcon="play" (onClick)="onButtonClick('Begin button clicked')">
          Begin Process
        </goab-button>
        <goab-button type="start" trailingIcon="arrow-forward" (onClick)="onButtonClick('Start application clicked')">
          Start Application
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Button Sizes</h2>
      <p>Two sizes available for different contexts:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Normal Size (Default)</h3>
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" size="normal" (onClick)="onButtonClick('Normal primary clicked')">
          Normal Primary
        </goab-button>
        <goab-button type="secondary" size="normal" (onClick)="onButtonClick('Normal secondary clicked')">
          Normal Secondary
        </goab-button>
        <goab-button type="tertiary" size="normal" (onClick)="onButtonClick('Normal tertiary clicked')">
          Normal Tertiary
        </goab-button>
      </goab-button-group>

      <h3>Compact Size</h3>
      <p>Use when space is limited or for less prominent actions:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" size="compact" (onClick)="onButtonClick('Compact primary clicked')">
          Compact Primary
        </goab-button>
        <goab-button type="secondary" size="compact" (onClick)="onButtonClick('Compact secondary clicked')">
          Compact Secondary
        </goab-button>
        <goab-button type="tertiary" size="compact" (onClick)="onButtonClick('Compact tertiary clicked')">
          Compact Tertiary
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Button Variants</h2>
      <p>Special variants for different contexts:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Normal Variant (Default)</h3>
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" variant="normal" (onClick)="onButtonClick('Normal variant clicked')">
          Normal Action
        </goab-button>
        <goab-button type="secondary" variant="normal" (onClick)="onButtonClick('Normal secondary clicked')">
          Normal Secondary
        </goab-button>
      </goab-button-group>

      <h3>Destructive Variant</h3>
      <p>Use for destructive actions like deleting, removing, or canceling:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" variant="destructive" (onClick)="showDeleteModal()" leadingIcon="trash">
          Delete Account
        </goab-button>
        <goab-button type="secondary" variant="destructive" (onClick)="onButtonClick('Remove item clicked')" leadingIcon="close">
          Remove Item
        </goab-button>
        <goab-button type="tertiary" variant="destructive" (onClick)="onButtonClick('Cancel subscription clicked')">
          Cancel Subscription
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Button States</h2>
      <p>Different states for user interaction feedback:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Enabled vs Disabled</h3>
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" [disabled]="false" (onClick)="onButtonClick('Enabled button clicked')">
          Enabled Button
        </goab-button>
        <goab-button type="primary" [disabled]="true" (onClick)="onButtonClick('This should not fire')">
          Disabled Button
        </goab-button>
        <goab-button type="secondary" [disabled]="isProcessing" (onClick)="simulateProcessing()">
          {{ isProcessing ? 'Processing...' : 'Start Process' }}
        </goab-button>
      </goab-button-group>

      <h3>Loading States</h3>
      <p>Interactive examples showing loading behavior:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" [disabled]="isUploading" (onClick)="simulateUpload()">
          {{ isUploading ? 'Uploading...' : 'Upload File' }}
        </goab-button>
        <goab-button type="secondary" [disabled]="isSaving" (onClick)="simulateSave()">
          {{ isSaving ? 'Saving...' : 'Save Draft' }}
        </goab-button>
        <goab-button type="tertiary" [disabled]="isLoading" (onClick)="simulateLoad()">
          {{ isLoading ? 'Loading...' : 'Load Data' }}
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Icons in Buttons</h2>
      <p>Enhance buttons with leading and trailing icons:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Leading Icons</h3>
      <p>Icons that appear before the button text:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" leadingIcon="add" (onClick)="onButtonClick('Add new clicked')">
          Add New
        </goab-button>
        <goab-button type="secondary" leadingIcon="download" (onClick)="onButtonClick('Download clicked')">
          Download
        </goab-button>
        <goab-button type="tertiary" leadingIcon="search" (onClick)="onButtonClick('Search clicked')">
          Search
        </goab-button>
        <goab-button type="primary" leadingIcon="save" (onClick)="onButtonClick('Save clicked')">
          Save
        </goab-button>
      </goab-button-group>

      <h3>Trailing Icons</h3>
      <p>Icons that appear after the button text:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" trailingIcon="arrow-forward" (onClick)="onButtonClick('Next clicked')">
          Next Step
        </goab-button>
        <goab-button type="secondary" trailingIcon="open" (onClick)="onButtonClick('External clicked')">
          External Link
        </goab-button>
        <goab-button type="tertiary" trailingIcon="chevron-down" (onClick)="onButtonClick('More clicked')">
          More Options
        </goab-button>
        <goab-button type="primary" trailingIcon="send" (onClick)="onButtonClick('Submit clicked')">
          Submit
        </goab-button>
      </goab-button-group>

      <h3>Common Icon Combinations</h3>
      <p>Practical examples of buttons with appropriate icons:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" leadingIcon="checkmark" (onClick)="onButtonClick('Approve clicked')">
          Approve
        </goab-button>
        <goab-button type="secondary" leadingIcon="close" (onClick)="onButtonClick('Reject clicked')">
          Reject
        </goab-button>
        <goab-button type="tertiary" leadingIcon="pencil" (onClick)="onButtonClick('Edit clicked')">
          Edit
        </goab-button>
        <goab-button type="primary" variant="destructive" leadingIcon="trash" (onClick)="onButtonClick('Delete clicked')">
          Delete
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Button Width Examples</h2>
      <p>Control button width for different layouts:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Auto Width (Default)</h3>
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="onButtonClick('Short clicked')">
          OK
        </goab-button>
        <goab-button type="secondary" (onClick)="onButtonClick('Medium clicked')">
          Cancel Action
        </goab-button>
        <goab-button type="tertiary" (onClick)="onButtonClick('Long clicked')">
          View Detailed Information
        </goab-button>
      </goab-button-group>

      <h3>Fixed Width</h3>
      <goab-block direction="column" gap="m" mb="l">
        <goab-button type="primary" width="200px" (onClick)="onButtonClick('Fixed width clicked')">
          Fixed Width
        </goab-button>
        <goab-button type="secondary" width="300px" (onClick)="onButtonClick('Wider fixed clicked')">
          Wider Fixed Width
        </goab-button>
      </goab-block>

      <h3>Full Width</h3>
      <goab-block direction="column" gap="m" mb="l">
        <goab-button type="primary" width="100%" (onClick)="onButtonClick('Full width clicked')">
          Full Width Button
        </goab-button>
        <goab-button type="secondary" width="100%" (onClick)="onButtonClick('Full width secondary clicked')">
          Full Width Secondary
        </goab-button>
      </goab-block>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Realistic Usage Examples</h2>
      <p>Common patterns and use cases for buttons in applications:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Form Actions</h3>
      <p>Typical button combinations for forms:</p>

      <goab-card mb="l">
        <goab-text tag="h4" mb="m">Contact Information</goab-text>
        <goab-form-item label="Full Name" mb="m">
          <goab-input name="fullName" type="text" width="100%" [(ngModel)]="formData.fullName"></goab-input>
        </goab-form-item>
        <goab-form-item label="Email Address" mb="l">
          <goab-input name="email" type="email" width="100%" [(ngModel)]="formData.email"></goab-input>
        </goab-form-item>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="submit" [disabled]="!isFormValid()" (onClick)="onButtonClick('Form submitted')">
            Save Changes
          </goab-button>
          <goab-button type="secondary" (onClick)="resetForm()">
            Reset Form
          </goab-button>
          <goab-button type="tertiary" (onClick)="onButtonClick('Cancel form')">
            Cancel
          </goab-button>
        </goab-button-group>
      </goab-card>

      <h3>Card Actions</h3>
      <p>Buttons in card contexts:</p>

      <goab-block direction="row" gap="l" mb="l">
        <goab-card style="flex: 1;">
          <goab-text tag="h4" mb="s">Document Upload</goab-text>
          <goab-text tag="p" size="body-s" color="secondary" mb="m">
            Upload your supporting documents for review.
          </goab-text>
          <goab-button-group alignment="start" gap="compact">
            <goab-button type="primary" leadingIcon="cloud-upload" size="compact" (onClick)="onButtonClick('Upload clicked')">
              Upload Files
            </goab-button>
            <goab-button type="tertiary" size="compact" (onClick)="onButtonClick('Learn more clicked')">
              Learn More
            </goab-button>
          </goab-button-group>
        </goab-card>

        <goab-card style="flex: 1;">
          <goab-text tag="h4" mb="s">Application Status</goab-text>
          <goab-text tag="p" size="body-s" color="secondary" mb="m">
            Your application is currently under review.
          </goab-text>
          <goab-button-group alignment="start" gap="compact">
            <goab-button type="secondary" leadingIcon="eye" size="compact" (onClick)="onButtonClick('View status clicked')">
              View Status
            </goab-button>
            <goab-button type="tertiary" size="compact" (onClick)="onButtonClick('Edit application clicked')">
              Edit
            </goab-button>
          </goab-button-group>
        </goab-card>
      </goab-block>

      <h3>Navigation Actions</h3>
      <p>Buttons for navigation and workflow progression:</p>

      <goab-button-group alignment="end" mb="l">
        <goab-button type="secondary" leadingIcon="arrow-back" (onClick)="onButtonClick('Previous step clicked')">
          Previous Step
        </goab-button>
        <goab-button type="primary" trailingIcon="arrow-forward" (onClick)="onButtonClick('Next step clicked')">
          Continue to Review
        </goab-button>
      </goab-button-group>

      <h3>Confirmation Actions</h3>
      <p>Button combinations for confirmation dialogs:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="showConfirmationModal()">
          Trigger Confirmation
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Accessibility Features</h2>
      <p>Examples demonstrating accessibility best practices:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Descriptive Button Text</h3>
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="onButtonClick('Download report clicked')">
          Download Monthly Report
        </goab-button>
        <goab-button type="secondary" (onClick)="onButtonClick('Delete account clicked')">
          Delete User Account
        </goab-button>
        <goab-button type="tertiary" (onClick)="onButtonClick('Contact support clicked')">
          Contact Customer Support
        </goab-button>
      </goab-button-group>

      <h3>Focus Management</h3>
      <p>Buttons maintain proper focus indicators and keyboard navigation.</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="focusNextButton(1)">
          Focus Button 1
        </goab-button>
        <goab-button type="secondary" (onClick)="focusNextButton(2)" #button2>
          Focus Button 2
        </goab-button>
        <goab-button type="tertiary" (onClick)="focusNextButton(3)" #button3>
          Focus Button 3
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Button Types:</strong> Use "primary" for main actions, "secondary" for alternatives, "tertiary" for less important actions</li>
        <li><strong>Hierarchy:</strong> Limit to one primary button per view to maintain clear action hierarchy</li>
        <li><strong>Icons:</strong> Use meaningful icons that enhance understanding, not decoration</li>
        <li><strong>Loading States:</strong> Disable buttons and show loading text during async operations</li>
        <li><strong>Destructive Actions:</strong> Use the destructive variant for dangerous actions</li>
        <li><strong>Button Text:</strong> Use clear, action-oriented language that describes what will happen</li>
        <li><strong>Width:</strong> Allow buttons to size naturally unless specific layout requires fixed widths</li>
        <li><strong>Grouping:</strong> Use button groups to organize related actions with consistent spacing</li>
      </ul>

      <!-- Modals for interactive examples -->
      <goab-modal 
        [open]="deleteModalOpen" 
        role="alertdialog"
        heading="Confirm Account Deletion"
        [actions]="deleteActions"
        (onClose)="closeDeleteModal()">
        <p>Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.</p>
        <ng-template #deleteActions>
          <goab-button-group alignment="end" gap="compact">
            <goab-button type="secondary" (onClick)="closeDeleteModal()">
              Cancel
            </goab-button>
            <goab-button type="primary" variant="destructive" (onClick)="confirmDelete()">
              Delete Account
            </goab-button>
          </goab-button-group>
        </ng-template>
      </goab-modal>

      <goab-modal 
        [open]="confirmationModalOpen" 
        heading="Confirm Action"
        [actions]="confirmationActions"
        (onClose)="closeConfirmationModal()">
        <p>Are you sure you want to proceed with this action?</p>
        <ng-template #confirmationActions>
          <goab-button-group alignment="end" gap="compact">
            <goab-button type="tertiary" (onClick)="closeConfirmationModal()">
              Cancel
            </goab-button>
            <goab-button type="primary" (onClick)="confirmAction()">
              Confirm
            </goab-button>
          </goab-button-group>
        </ng-template>
      </goab-modal>
    </goab-container>
  `,
})
export class ButtonExamplesComponent {
  // Component state
  isProcessing = false;
  isUploading = false;
  isSaving = false;
  isLoading = false;
  deleteModalOpen = false;
  confirmationModalOpen = false;

  // Form data
  formData = {
    fullName: '',
    email: ''
  };

  // Event handlers
  onButtonClick(message: string) {
    console.log(message);
    // In a real app, you might show a toast notification or update UI state
  }

  // Simulation methods
  async simulateProcessing() {
    this.isProcessing = true;
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.isProcessing = false;
    this.onButtonClick('Processing completed');
  }

  async simulateUpload() {
    this.isUploading = true;
    await new Promise(resolve => setTimeout(resolve, 3000));
    this.isUploading = false;
    this.onButtonClick('Upload completed');
  }

  async simulateSave() {
    this.isSaving = true;
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.isSaving = false;
    this.onButtonClick('Save completed');
  }

  async simulateLoad() {
    this.isLoading = true;
    await new Promise(resolve => setTimeout(resolve, 2500));
    this.isLoading = false;
    this.onButtonClick('Load completed');
  }

  // Form methods
  isFormValid(): boolean {
    return this.formData.fullName.trim().length > 0 && 
           this.formData.email.trim().length > 0 && 
           this.formData.email.includes('@');
  }

  resetForm() {
    this.formData = {
      fullName: '',
      email: ''
    };
    this.onButtonClick('Form reset');
  }

  // Modal methods
  showDeleteModal() {
    this.deleteModalOpen = true;
  }

  closeDeleteModal() {
    this.deleteModalOpen = false;
  }

  confirmDelete() {
    this.deleteModalOpen = false;
    this.onButtonClick('Account deletion confirmed');
  }

  showConfirmationModal() {
    this.confirmationModalOpen = true;
  }

  closeConfirmationModal() {
    this.confirmationModalOpen = false;
  }

  confirmAction() {
    this.confirmationModalOpen = false;
    this.onButtonClick('Action confirmed');
  }

  // Focus management
  focusNextButton(buttonNumber: number) {
    this.onButtonClick(`Button ${buttonNumber} clicked`);
    // In a real app, you might programmatically focus the next element
  }
}
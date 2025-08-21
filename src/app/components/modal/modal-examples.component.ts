import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GoabContainer,
  GoabModal,
  GoabButton,
  GoabButtonGroup,
  GoabSpacer,
  GoabFormItem,
  GoabInput,
  GoabText
} from '@abgov/angular-components';
import { GoabModalCalloutVariant } from '@abgov/ui-components-common';

@Component({
  selector: 'app-modal-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabContainer,
    GoabModal,
    GoabButton,
    GoabButtonGroup,
    GoabSpacer,
    GoabFormItem,
    GoabInput,
    GoabText
  ],
  template: `
    <goab-container>
      <h1>Modal Component Examples</h1>
      <p>An overlay that appears in front of all other content, and requires a user to take an action before continuing.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Modal Properties</h2>
      <p>Basic modal examples showing different properties:</p>

      <goab-button-group alignment="start">
        <goab-button (onClick)="openBasicModal()">
          Open Basic Modal
        </goab-button>
        <goab-button (onClick)="openClosableModal()">
          Open Closable Modal
        </goab-button>
        <goab-button (onClick)="openAlertModal()">
          Open Alert Dialog
        </goab-button>
        <goab-button (onClick)="openCustomWidthModal()">
          Open Custom Width Modal
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Callout Modals</h2>
      <p>Modal with callout variants for different contexts:</p>

      <goab-button-group alignment="start">
        <goab-button (onClick)="openInfoCalloutModal()">
          Information Modal
        </goab-button>
        <goab-button (onClick)="openSuccessCalloutModal()">
          Success Modal
        </goab-button>
        <goab-button (onClick)="openImportantCalloutModal()">
          Important Modal
        </goab-button>
        <goab-button (onClick)="openEmergencyCalloutModal()">
          Emergency Modal
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Interactive Examples</h2>
      <p>Modals with forms and different interaction patterns:</p>

      <goab-button-group alignment="start">
        <goab-button (onClick)="openFormModal()">
          Form Modal
        </goab-button>
        <goab-button (onClick)="openConfirmDeleteModal()">
          Delete Confirmation
        </goab-button>
        <goab-button (onClick)="openSaveChangesModal()">
          Save Changes
        </goab-button>
      </goab-button-group>

      <!-- Basic Modal -->
      <goab-modal
        heading="Basic Modal Example"
        role="dialog"
        [open]="basicModalOpen"
        (onClose)="closeBasicModal()">
        <p>This is a basic modal with a heading and content. It demonstrates the default modal behavior with manual close handling.</p>
        <p>You need to click one of the action buttons to close this modal since it's not closable by default.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="tertiary" (onClick)="closeBasicModal()">
            Close
          </goab-button>
          <goab-button type="primary" (onClick)="closeBasicModal()">
            OK
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Closable Modal -->
      <goab-modal
        heading="Closable Modal"
        role="dialog"
        [open]="closableModalOpen"
        [closable]="true"
        (onClose)="closeClosableModal()">
        <p>This modal can be closed by clicking the X button or clicking outside the modal area.</p>
        <p>Notice the close button in the top right corner and try clicking outside the modal.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="primary" (onClick)="closeClosableModal()">
            Got it
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Alert Dialog Modal -->
      <goab-modal
        heading="Are you sure you want to exit?"
        role="alertdialog"
        [open]="alertModalOpen"
        (onClose)="closeAlertModal()">
        <p>This is an alert dialog that will announce all content to screen readers. Use this role when the modal doesn't contain interactive elements or when you need the full content to be read.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="tertiary" (onClick)="closeAlertModal()">
            Cancel
          </goab-button>
          <goab-button type="primary" (onClick)="closeAlertModal()">
            Exit
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Custom Width Modal -->
      <goab-modal
        heading="Custom Width Modal"
        role="dialog"
        [open]="customWidthModalOpen"
        maxWidth="800px"
        [closable]="true"
        (onClose)="closeCustomWidthModal()">
        <p>This modal has a custom maximum width of 800px. You can control the modal width using the maxWidth property.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="primary" (onClick)="closeCustomWidthModal()">
            Close
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Information Callout Modal -->
      <goab-modal
        heading="Information"
        role="dialog"
        [open]="infoCalloutModalOpen"
        calloutVariant="information"
        [closable]="true"
        (onClose)="closeInfoCalloutModal()">
        <p>This is an information callout modal. Use this variant to display informational content that needs user attention.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="primary" (onClick)="closeInfoCalloutModal()">
            Understood
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Success Callout Modal -->
      <goab-modal
        heading="Success!"
        role="dialog"
        [open]="successCalloutModalOpen"
        calloutVariant="success"
        [closable]="true"
        (onClose)="closeSuccessCalloutModal()">
        <p>Your changes have been saved successfully! This success modal confirms that the operation completed without errors.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="primary" (onClick)="closeSuccessCalloutModal()">
            Continue
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Important Callout Modal -->
      <goab-modal
        heading="Important Notice"
        role="alertdialog"
        [open]="importantCalloutModalOpen"
        calloutVariant="important"
        (onClose)="closeImportantCalloutModal()">
        <p>This is an important notice that requires your immediate attention. Please read this information carefully before proceeding.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="tertiary" (onClick)="closeImportantCalloutModal()">
            Cancel
          </goab-button>
          <goab-button type="primary" (onClick)="closeImportantCalloutModal()">
            Acknowledge
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Emergency Callout Modal -->
      <goab-modal
        heading="Critical Error"
        role="alertdialog"
        [open]="emergencyCalloutModalOpen"
        calloutVariant="emergency"
        (onClose)="closeEmergencyCalloutModal()">
        <p>A critical error has occurred that requires immediate action. This emergency modal indicates a serious system issue.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="primary" (onClick)="closeEmergencyCalloutModal()">
            OK
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Form Modal -->
      <goab-modal
        heading="Edit User Information"
        role="dialog"
        [open]="formModalOpen"
        [closable]="true"
        maxWidth="600px"
        (onClose)="closeFormModal()">
        <goab-form-item label="First Name" mb="m">
          <goab-input
            [value]="formData.firstName"
            (onChange)="updateFormField('firstName', $event)"
            placeholder="Enter first name"
            width="100%">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Last Name" mb="m">
          <goab-input
            [value]="formData.lastName"
            (onChange)="updateFormField('lastName', $event)"
            placeholder="Enter last name"
            width="100%">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Email Address" mb="m">
          <goab-input
            [value]="formData.email"
            (onChange)="updateFormField('email', $event)"
            type="email"
            placeholder="Enter email address"
            width="100%">
          </goab-input>
        </goab-form-item>

        <goab-button-group alignment="end" mt="xl">
          <goab-button type="tertiary" (onClick)="closeFormModal()">
            Cancel
          </goab-button>
          <goab-button type="primary" (onClick)="saveFormData()">
            Save Changes
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Delete Confirmation Modal -->
      <goab-modal
        heading="Delete Record"
        role="alertdialog"
        [open]="deleteModalOpen"
        calloutVariant="emergency"
        (onClose)="closeDeleteModal()">
        <p><strong>Are you sure you want to delete this record?</strong></p>
        <p>This action cannot be undone. All data associated with this record will be permanently removed from the system.</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="tertiary" (onClick)="closeDeleteModal()">
            Cancel
          </goab-button>
          <goab-button type="primary" (onClick)="confirmDelete()">
            Delete
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <!-- Save Changes Modal -->
      <goab-modal
        heading="Unsaved Changes"
        role="dialog"
        [open]="saveChangesModalOpen"
        calloutVariant="important"
        (onClose)="closeSaveChangesModal()">
        <p>You have unsaved changes that will be lost if you continue. Would you like to save your changes before leaving?</p>
        <goab-button-group alignment="end" mt="xl">
          <goab-button type="tertiary" (onClick)="discardChanges()">
            Don't Save
          </goab-button>
          <goab-button type="secondary" (onClick)="closeSaveChangesModal()">
            Cancel
          </goab-button>
          <goab-button type="primary" (onClick)="saveAndContinue()">
            Save & Continue
          </goab-button>
        </goab-button-group>
      </goab-modal>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Role:</strong> Use "dialog" for interactive modals, "alertdialog" for critical messages</li>
        <li><strong>Closable:</strong> Set to true to show close button and allow background clicks</li>
        <li><strong>Callout Variants:</strong> Use information, success, important, emergency, or event</li>
        <li><strong>Max Width:</strong> Control modal width with maxWidth property</li>
        <li><strong>Actions:</strong> Use button groups aligned to the end for consistent spacing</li>
      </ul>
    </goab-container>
  `,
})
export class ModalExamplesComponent {
  // Basic modal states
  basicModalOpen = false;
  closableModalOpen = false;
  alertModalOpen = false;
  customWidthModalOpen = false;

  // Callout modal states
  infoCalloutModalOpen = false;
  successCalloutModalOpen = false;
  importantCalloutModalOpen = false;
  emergencyCalloutModalOpen = false;

  // Interactive modal states
  formModalOpen = false;
  deleteModalOpen = false;
  saveChangesModalOpen = false;

  // Form data
  formData = {
    firstName: '',
    lastName: '',
    email: ''
  };

  // Basic modal methods
  openBasicModal() {
    this.basicModalOpen = true;
  }

  closeBasicModal() {
    this.basicModalOpen = false;
  }

  openClosableModal() {
    this.closableModalOpen = true;
  }

  closeClosableModal() {
    this.closableModalOpen = false;
  }

  openAlertModal() {
    this.alertModalOpen = true;
  }

  closeAlertModal() {
    this.alertModalOpen = false;
  }

  openCustomWidthModal() {
    this.customWidthModalOpen = true;
  }

  closeCustomWidthModal() {
    this.customWidthModalOpen = false;
  }

  // Callout modal methods
  openInfoCalloutModal() {
    this.infoCalloutModalOpen = true;
  }

  closeInfoCalloutModal() {
    this.infoCalloutModalOpen = false;
  }

  openSuccessCalloutModal() {
    this.successCalloutModalOpen = true;
  }

  closeSuccessCalloutModal() {
    this.successCalloutModalOpen = false;
  }

  openImportantCalloutModal() {
    this.importantCalloutModalOpen = true;
  }

  closeImportantCalloutModal() {
    this.importantCalloutModalOpen = false;
  }

  openEmergencyCalloutModal() {
    this.emergencyCalloutModalOpen = true;
  }

  closeEmergencyCalloutModal() {
    this.emergencyCalloutModalOpen = false;
  }

  // Interactive modal methods
  openFormModal() {
    this.formData = { firstName: 'John', lastName: 'Doe', email: 'john.doe&#64;example.com' };
    this.formModalOpen = true;
  }

  closeFormModal() {
    this.formModalOpen = false;
  }

  updateFormField(field: keyof typeof this.formData, event: any) {
    this.formData[field] = event.value;
  }

  saveFormData() {
    console.log('Form data saved:', this.formData);
    this.formModalOpen = false;
    // Here you would typically save the data to a service
  }

  openConfirmDeleteModal() {
    this.deleteModalOpen = true;
  }

  closeDeleteModal() {
    this.deleteModalOpen = false;
  }

  confirmDelete() {
    console.log('Record deleted');
    this.deleteModalOpen = false;
    // Here you would typically call a delete service
  }

  openSaveChangesModal() {
    this.saveChangesModalOpen = true;
  }

  closeSaveChangesModal() {
    this.saveChangesModalOpen = false;
  }

  saveAndContinue() {
    console.log('Changes saved and continuing');
    this.saveChangesModalOpen = false;
    // Here you would typically save changes and navigate
  }

  discardChanges() {
    console.log('Changes discarded');
    this.saveChangesModalOpen = false;
    // Here you would typically discard changes and navigate
  }
}

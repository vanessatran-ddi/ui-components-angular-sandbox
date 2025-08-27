import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';
import {
  GoabButton,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem
} from '@abgov/angular-components';
import { GoabRadioGroupOnChangeDetail } from '@abgov/ui-components-common';

@Component({
  selector: 'app-radio-examples',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DecimalPipe,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabButton
  ],
  templateUrl: './radio-examples.component.html',
  styleUrls: ['./radio-examples.component.css']
})
export class RadioExamplesComponent {
  // Basic radio values
  basicValue = '';
  deliveryValue = '';
  ratingValue = '';
  termsValue = '';
  termsError = false;
  termsValidationMessage = '';
  contactMethod = '';
  selectedService = '';
  newsletterValue = '';

  // Event tracking
  eventLog: Array<{timestamp: string, message: string}> = [];

  // Dynamic services
  availableServices = [
    { id: 'service1', name: 'Document Processing', description: 'Process government documents' },
    { id: 'service2', name: 'License Renewal', description: 'Renew various licenses' },
    { id: 'service3', name: 'Certificate Request', description: 'Request official certificates' }
  ];

  private serviceCounter = 4;

  // Forms
  reactiveForm: FormGroup;
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      employmentStatus: ['', Validators.required],
      province: ['', Validators.required]
    });

    this.applicationForm = this.fb.group({
      applicationType: ['', Validators.required],
      priority: ['standard']
    });
  }

  // Basic event handlers
  onBasicChange(event: GoabRadioGroupOnChangeDetail): void {
    this.basicValue = event.value;
    this.logEvent('Basic radio changed to: ' + event.value);
  }

  onDeliveryChange(event: GoabRadioGroupOnChangeDetail): void {
    this.deliveryValue = event.value;
    this.logEvent('Delivery method changed to: ' + event.value);
  }

  onRatingChange(event: GoabRadioGroupOnChangeDetail): void {
    this.ratingValue = event.value;
    this.logEvent('Rating changed to: ' + event.value);
  }

  onTermsChange(event: GoabRadioGroupOnChangeDetail): void {
    this.termsValue = event.value;
    this.termsError = false;
    this.termsValidationMessage = '';
    this.logEvent('Terms selection changed to: ' + event.value);
  }

  onSubscriptionChange(event: GoabRadioGroupOnChangeDetail): void {
    this.logEvent('Subscription changed to: ' + event.value + ' (disabled)');
  }

  onContactMethodChange(event: GoabRadioGroupOnChangeDetail): void {
    this.contactMethod = event.value;
    this.logEvent('Contact method changed to: ' + event.value);
  }

  onServiceChange(event: GoabRadioGroupOnChangeDetail): void {
    this.selectedService = event.value;
    this.logEvent('Service changed to: ' + event.value);
  }

  onNewsletterChange(event: GoabRadioGroupOnChangeDetail): void {
    this.newsletterValue = event.value;
    this.logEvent('Newsletter preference changed to: ' + event.value);
  }

  // Helper methods
  getDeliveryLabel(): string {
    const labels: {[key: string]: string} = {
      standard: 'Standard Delivery (5-7 days)',
      express: 'Express Delivery (2-3 days, +$15)',
      overnight: 'Overnight Delivery (next day, +$25)'
    };
    return labels[this.deliveryValue] || 'None selected';
  }

  getProvinceName(): string {
    const provinces: {[key: string]: string} = {
      ab: 'Alberta',
      bc: 'British Columbia',
      sk: 'Saskatchewan',
      mb: 'Manitoba',
      on: 'Ontario',
      qc: 'Quebec',
      other: 'Other'
    };
    const value = this.reactiveForm.get('province')?.value;
    return provinces[value] || 'None selected';
  }

  getFormValue(): string {
    return JSON.stringify(this.reactiveForm.value, null, 2);
  }

  getSelectedServiceName(): string {
    const service = this.availableServices.find(s => s.id === this.selectedService);
    return service ? service.name + ' - ' + service.description : 'None selected';
  }

  getApplicationTypeName(): string {
    const types: {[key: string]: string} = {
      passport: 'Passport Application',
      license: 'Driver\'s License',
      health: 'Health Card',
      business: 'Business License'
    };
    const value = this.applicationForm.get('applicationType')?.value;
    return types[value] || '';
  }

  getPriorityName(): string {
    const priorities: {[key: string]: string} = {
      standard: 'Standard Processing (4-6 weeks)',
      expedited: 'Expedited Processing (2-3 weeks)',
      urgent: 'Urgent Processing (5-10 days)'
    };
    const value = this.applicationForm.get('priority')?.value;
    return priorities[value] || 'Standard Processing';
  }

  getEstimatedFee(): number {
    const applicationType = this.applicationForm.get('applicationType')?.value;
    const priority = this.applicationForm.get('priority')?.value;

    const baseFees: {[key: string]: number} = {
      passport: 120,
      license: 75,
      health: 0,
      business: 350
    };

    const priorityFees: {[key: string]: number} = {
      standard: 0,
      expedited: 50,
      urgent: 150
    };

    const baseFee = baseFees[applicationType] || 0;
    const priorityFee = priorityFees[priority] || 0;

    return baseFee + priorityFee;
  }

  // Form validation methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.reactiveForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  isApplicationFieldInvalid(fieldName: string): boolean {
    const field = this.applicationForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  validateTerms(): void {
    if (!this.termsValue) {
      this.termsError = true;
      this.termsValidationMessage = 'Please select an option for terms and conditions.';
    } else if (this.termsValue === 'decline') {
      this.termsError = true;
      this.termsValidationMessage = 'You must accept the terms and conditions to proceed.';
    } else {
      this.termsError = false;
      this.termsValidationMessage = 'Terms accepted successfully!';
    }
  }

  // Form submission methods
  onTemplateSubmit(form: any): void {
    if (form.valid) {
      this.logEvent('Template form submitted: Contact method = ' + this.contactMethod);
      alert('Template form submitted successfully!');
    } else {
      this.logEvent('Template form submission failed - form invalid');
    }
  }

  onReactiveSubmit(): void {
    console.log("Reactive submitted");
    if (this.reactiveForm.valid) {
      const formData = this.reactiveForm.value;
      this.logEvent('Reactive form submitted: ' + JSON.stringify(formData));
      alert('Reactive form submitted successfully!');
    } else {
      this.logEvent('Reactive form submission failed - form invalid');
      this.markFormGroupTouched(this.reactiveForm);
    }
  }

  onApplicationSubmit(): void {
    if (this.applicationForm.valid) {
      const formData = this.applicationForm.value;
      const fee = this.getEstimatedFee();
      this.logEvent('Application submitted: ' + JSON.stringify(formData) + ', Fee: $' + fee);
      alert('Application submitted successfully! Estimated fee: $' + fee + ' CAD');
    } else {
      this.logEvent('Application submission failed - form invalid');
      this.markFormGroupTouched(this.applicationForm);
    }
  }

  resetReactiveForm(): void {
    this.reactiveForm.reset();
    this.logEvent('Reactive form reset');
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  // Dynamic services methods
  addService(): void {
    const newService = {
      id: 'service' + this.serviceCounter,
      name: 'Service ' + this.serviceCounter,
      description: 'Description for service ' + this.serviceCounter
    };
    this.availableServices.push(newService);
    this.serviceCounter++;
    this.logEvent('Added new service: ' + newService.name);
  }

  removeLastService(): void {
    if (this.availableServices.length > 0) {
      const removed = this.availableServices.pop();
      if (this.selectedService === removed?.id) {
        this.selectedService = '';
      }
      this.logEvent('Removed service: ' + (removed?.name || 'Unknown'));
    }
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

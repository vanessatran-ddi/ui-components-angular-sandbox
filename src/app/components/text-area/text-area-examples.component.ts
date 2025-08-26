import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  GoabFormItem,
  GoabTextArea
} from '@abgov/angular-components';
@Component({
  selector: 'app-text-area-examples',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    GoabFormItem,
    GoabTextArea
  ],
  templateUrl: './text-area-examples.component.html',
  styleUrls: ['./text-area-examples.component.css']
})
export class TextAreaExamplesComponent {
  // Basic text area values
  basicValue = '';
  placeholderValue = '';
  charCountValue = '';
  wordCountValue = '';
  feedbackValue = '';
  feedbackError = false;
  feedbackValidationMessage = '';
  contactMessage = '';
  additionalComments = '';
  eventTrackingValue = '';

  // Dynamic text area properties
  dynamicValue = '';
  dynamicRows = 3;
  dynamicWidth = '60ch';
  dynamicPlaceholder = 'Type something...';
  dynamicDisabled = false;
  dynamicReadOnly = false;

  // Event tracking
  eventLog: Array<{timestamp: string, message: string}> = [];

  // Terms and conditions text
  termsAndConditions = `Terms and Conditions of Service

1. Acceptance of Terms
By using this service, you agree to be bound by these terms and conditions.

2. Service Description
This service provides government application processing and related services.

3. User Responsibilities
- Provide accurate and complete information
- Maintain confidentiality of your account
- Comply with all applicable laws and regulations

4. Privacy and Data Protection
Your personal information will be handled in accordance with our Privacy Policy and applicable privacy legislation.

5. Limitation of Liability
The service is provided "as is" without warranties of any kind.`;

  // Forms
  reactiveForm: FormGroup;
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      projectDescription: ['', [Validators.required, Validators.minLength(20)]],
      budgetJustification: ['', Validators.required],
      riskAssessment: ['']
    });

    this.applicationForm = this.fb.group({
      businessPlan: ['', [Validators.required, this.wordCountValidator(100)]],
      environmentalImpact: ['', Validators.required],
      communityBenefits: ['']
    });
  }

  // Custom validator for word count
  wordCountValidator(minWords: number) {
    return (control: any) => {
      if (!control.value) return { required: true };
      const wordCount = this.getWordCount(control.value);
      return wordCount < minWords ? { minWordCount: { requiredWords: minWords, actualWords: wordCount } } : null;
    };
  }

  // Basic event handlers
  onBasicChange(event: any): void {
    this.basicValue = event.value;
    this.logEvent('Basic text area changed, length: ' + event.value.length);
  }

  onPlaceholderChange(event: any): void {
    this.placeholderValue = event.value;
    this.logEvent('Placeholder text area changed, length: ' + event.value.length);
  }

  onCharCountChange(event: any): void {
    this.charCountValue = event.value;
    this.logEvent('Character count text area changed, chars: ' + event.value.length + '/200');
  }

  onWordCountChange(event: any): void {
    this.wordCountValue = event.value;
    const wordCount = this.getWordCount(event.value);
    this.logEvent('Word count text area changed, words: ' + wordCount + '/50');
  }

  onFeedbackChange(event: any): void {
    this.feedbackValue = event.value;
    this.feedbackError = false;
    this.feedbackValidationMessage = '';
    this.logEvent('Feedback changed, length: ' + event.value.length);
  }

  onContactMessageChange(event: any): void {
    this.contactMessage = event.value;
    this.logEvent('Contact message changed (template-driven), length: ' + event.value.length);
  }

  onAdditionalCommentsChange(event: any): void {
    this.additionalComments = event.value;
    this.logEvent('Additional comments changed, length: ' + event.value.length);
  }

  onDynamicChange(event: any): void {
    this.dynamicValue = event.value;
    this.logEvent('Dynamic text area changed, length: ' + event.value.length);
  }

  onEventTrackingChange(event: any): void {
    this.eventTrackingValue = event.value;
    this.logEvent('Event tracking change: length = ' + event.value.length + ', last char = "' + event.value.slice(-1) + '"');
  }

  onKeyPress(event: any): void {
    this.logEvent('Key pressed: ' + event.key + ' (value length: ' + event.value.length + ')');
  }

  // Helper methods
  getWordCount(text: string): number {
    if (!text || text.trim().length === 0) return 0;
    return text.trim().split(/\s+/).length;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }

  validateFeedback(): void {
    if (!this.feedbackValue || this.feedbackValue.trim().length === 0) {
      this.feedbackError = true;
      this.feedbackValidationMessage = 'Please provide your feedback before submitting.';
    } else if (this.feedbackValue.trim().length < 10) {
      this.feedbackError = true;
      this.feedbackValidationMessage = 'Feedback must be at least 10 characters long.';
    } else {
      this.feedbackError = false;
      this.feedbackValidationMessage = 'Feedback validated successfully!';
    }
  }

  getTotalWordCount(): number {
    const businessPlan = this.applicationForm.get('businessPlan')?.value || '';
    const environmentalImpact = this.applicationForm.get('environmentalImpact')?.value || '';
    const communityBenefits = this.applicationForm.get('communityBenefits')?.value || '';

    return this.getWordCount(businessPlan) +
           this.getWordCount(environmentalImpact) +
           this.getWordCount(communityBenefits);
  }

  getFormValue(): string {
    return JSON.stringify(this.reactiveForm.value, null, 2);
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

  // Form submission methods
  onTemplateSubmit(form: any): void {
    if (form.valid) {
      const data = {
        contactMessage: this.contactMessage,
        additionalComments: this.additionalComments
      };
      this.logEvent('Template form submitted: ' + JSON.stringify(data));
      alert('Template form submitted successfully!');
    } else {
      this.logEvent('Template form submission failed - form invalid');
    }
  }

  onReactiveSubmit(): void {
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
      const totalWords = this.getTotalWordCount();
      this.logEvent('Application submitted: Total words = ' + totalWords + ', Data: ' + JSON.stringify(formData));
      alert('Application submitted successfully! Total word count: ' + totalWords);
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

  // Event logging
  private logEvent(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.unshift({ timestamp, message });

    // Keep only last 15 events
    if (this.eventLog.length > 15) {
      this.eventLog = this.eventLog.slice(0, 15);
    }
  }

  clearEventLog(): void {
    this.eventLog = [];
  }
}

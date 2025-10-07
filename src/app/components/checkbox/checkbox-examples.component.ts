import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  GoabContainer,
  GoabCheckbox,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabText,
  GoabBlock,
  GoabCard,
  GoabFormItem, GoabInput
} from '@abgov/angular-components';

@Component({
  selector: 'app-checkbox-examples',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoabContainer,
    GoabCheckbox,
    GoabSpacer,
    GoabButton,
    GoabButtonGroup,
    GoabText,
    GoabBlock,
    GoabCard,
    GoabFormItem,
    GoabInput
  ],
  templateUrl: './checkbox-examples.component.html',
})
export class CheckboxExamplesComponent {
  // Reactive form instances
  basicReactiveForm: FormGroup;
  validationForm: FormGroup;
  dynamicForm: FormGroup;

  // Template-driven form data
  templateData = {
    twoFactor: false,
    emailAlerts: true,
    sessionTimeout: false
  };

  templateValidationData = {
    userAgreement: false,
    dataPolicy: false,
    analytics: false,
    cookies: true
  };

  // Advanced examples data
  advancedData = {
    premiumPlan: false,
    backupService: true,
    mobileApp: false
  };

  conditionalData = {
    enableNotifications: false,
    emailNotifications: false,
    smsNotifications: false,
    pushNotifications: false,
    enableSharing: false,
    shareAnalytics: false,
    shareFeedback: false
  };

  interactiveData = {
    checkbox1: false,
    checkbox2: true,
    checkbox3: false,
    checkbox4: true
  };

  // Dynamic services list for reactive form
  services = [
    { id: 'health', name: 'Health Services', description: 'Medical records and healthcare management' },
    { id: 'education', name: 'Education Portal', description: 'Student information and academic records' },
    { id: 'employment', name: 'Employment Services', description: 'Job search and career development' },
    { id: 'business', name: 'Business Registration', description: 'Business licensing and permits' },
    { id: 'tax', name: 'Tax Services', description: 'Tax filing and payment processing' }
  ];

  // reveal slot
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize reactive forms
    this.basicReactiveForm = this.fb.group({
      newsletter: [false],
      notifications: [true],
      marketing: [false]
    });

    this.form = this.fb.group({
      emailContactMethod: [false],
      phoneContactMethod: [false],
      textContactMethod: [false],
      emailAddress: [""],
      phoneNumber: [""],
      item: [""],
    });

    this.validationForm = this.fb.group({
      terms: [false, Validators.requiredTrue],
      privacy: [false, Validators.requiredTrue]
    });

    // Handle GoA checkbox value format conversion
    this.validationForm.get('terms')?.valueChanges.subscribe(value => {
      if (value === 'checked') {
        this.validationForm.get('terms')?.setValue(true, { emitEvent: false });
      } else if (value === '' || value === false) {
        this.validationForm.get('terms')?.setValue(false, { emitEvent: false });
      }
    });

    this.validationForm.get('privacy')?.valueChanges.subscribe(value => {
      if (value === 'checked') {
        this.validationForm.get('privacy')?.setValue(true, { emitEvent: false });
      } else if (value === '' || value === false) {
        this.validationForm.get('privacy')?.setValue(false, { emitEvent: false });
      }
    });

    // Handle GoA checkbox value format conversion for Basic Reactive Form
    this.basicReactiveForm.get('newsletter')?.valueChanges.subscribe(value => {
      if (value === 'checked') {
        this.basicReactiveForm.get('newsletter')?.setValue(true, { emitEvent: false });
      } else if (value === '' || value === false) {
        this.basicReactiveForm.get('newsletter')?.setValue(false, { emitEvent: false });
      }
    });

    this.basicReactiveForm.get('notifications')?.valueChanges.subscribe(value => {
      if (value === 'checked') {
        this.basicReactiveForm.get('notifications')?.setValue(true, { emitEvent: false });
      } else if (value === '' || value === false) {
        this.basicReactiveForm.get('notifications')?.setValue(false, { emitEvent: false });
      }
    });

    this.basicReactiveForm.get('marketing')?.valueChanges.subscribe(value => {
      if (value === 'checked') {
        this.basicReactiveForm.get('marketing')?.setValue(true, { emitEvent: false });
      } else if (value === '' || value === false) {
        this.basicReactiveForm.get('marketing')?.setValue(false, { emitEvent: false });
      }
    });

    this.dynamicForm = this.createDynamicForm();
  }

  // Reactive form methods
  createDynamicForm(): FormGroup {
    const group: { [key: string]: FormControl } = {};
    this.services.forEach(service => {
      group[service.id] = new FormControl(false);
    });
    return this.fb.group(group);
  }

  onReactiveFormSubmit() {
    if (this.basicReactiveForm.valid) {
      console.log('Basic Reactive Form Values:', this.basicReactiveForm.value);
    }
  }

  resetReactiveForm() {
    this.basicReactiveForm.reset({
      newsletter: false,
      notifications: false,
      marketing: false
    });
  }

  onValidationFormSubmit() {
    if (this.validationForm.valid) {
      console.log('Validation Form Values:', this.validationForm.value);
    } else {
      this.markFormGroupTouched(this.validationForm);
    }
  }

  resetValidationForm() {
    this.validationForm.reset({
      terms: false,
      privacy: false
    });
  }

  onValidationCheckboxChange(fieldName: string, event: any) {
    console.log(`Validation ${fieldName} changed:`, event);
    // Handle the GoA checkbox onChange event format
    const isChecked = event.checked === "checked" || event.checked === true;
    this.validationForm.get(fieldName)?.setValue(isChecked);
    this.validationForm.get(fieldName)?.markAsTouched();
  }

  onDynamicFormSubmit() {
    const selectedServices = this.getSelectedServices();
    console.log('Selected Services:', selectedServices);
  }

  onDynamicServiceChange(serviceId: string, event: any) {
    console.log(`Dynamic service ${serviceId} changed:`, event);
    // Handle the GoA checkbox onChange event format
    const isChecked = event.checked === "checked" || event.checked === true;
    this.dynamicForm.get(serviceId)?.setValue(isChecked);
  }

  selectAllServices() {
    this.services.forEach(service => {
      this.dynamicForm.get(service.id)?.setValue(true);
    });
  }

  clearAllServices() {
    this.services.forEach(service => {
      this.dynamicForm.get(service.id)?.setValue(false);
    });
  }

  getSelectedServices() {
    return this.services.filter(service =>
      this.dynamicForm.get(service.id)?.value === true
    );
  }

  trackByService(index: number, service: any) {
    return service.id;
  }

  // Template-driven form methods
  onTemplateCheckboxChange(field: string, event: any) {
    console.log(`Template checkbox ${field} changed:`, event);
    // Handle the GoA checkbox onChange event format
    const isChecked = event.checked === "checked" || event.checked === true;
    (this.templateData as any)[field] = isChecked;
  }

  onTemplateFormSubmit() {
    console.log('Template Form Data:', this.templateData);
  }

  resetTemplateForm() {
    this.templateData = {
      twoFactor: false,
      emailAlerts: false,
      sessionTimeout: false
    };
  }

  onTemplateValidationChange(field: string, event: any) {
    console.log(`Template validation ${field} changed:`, event);
    // Handle the GoA checkbox onChange event format
    const isChecked = event.checked === "checked" || event.checked === true;
    (this.templateValidationData as any)[field] = isChecked;
  }

  onTemplateValidationSubmit() {
    console.log('Template Validation Data:', this.templateValidationData);
  }

  resetTemplateValidationForm() {
    this.templateValidationData = {
      userAgreement: false,
      dataPolicy: false,
      analytics: false,
      cookies: false
    };
  }

  // Advanced examples methods
  onAdvancedChange(field: string, event: any) {
    console.log(`Advanced ${field} changed:`, event);
  }

  onConditionalChange(field: string, event: any) {
    console.log(`Conditional ${field} changed:`, event);

    // Reset child options when parent is unchecked
    if (field === 'enableNotifications' && !event.checked) {
      this.conditionalData.emailNotifications = false;
      this.conditionalData.smsNotifications = false;
      this.conditionalData.pushNotifications = false;
    }

    if (field === 'enableSharing' && !event.checked) {
      this.conditionalData.shareAnalytics = false;
      this.conditionalData.shareFeedback = false;
    }
  }

  onInteractiveChange(field: string, event: any) {
    console.log(`Interactive ${field} changed:`, event);
    // Handle the GoA checkbox onChange event format
    // event.checked can be "checked" (string) or "" (empty string)
    const isChecked = event.checked === "checked" || event.checked === true;
    (this.interactiveData as any)[field] = isChecked;
  }

  checkAllBoxes() {
    this.interactiveData = {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: true
    };
  }

  uncheckAllBoxes() {
    this.interactiveData = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  }

  toggleAllBoxes() {
    this.interactiveData = {
      checkbox1: !this.interactiveData.checkbox1,
      checkbox2: !this.interactiveData.checkbox2,
      checkbox3: !this.interactiveData.checkbox3,
      checkbox4: !this.interactiveData.checkbox4
    };
  }

  randomizeBoxes() {
    this.interactiveData = {
      checkbox1: Math.random() > 0.5,
      checkbox2: Math.random() > 0.5,
      checkbox3: Math.random() > 0.5,
      checkbox4: Math.random() > 0.5
    };
  }

  getCheckedCount(): number {
    return Object.values(this.interactiveData).filter(value => value === true).length;
  }

  // Utility methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.validationForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string | undefined {
    const field = this.validationForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) {
        return 'This field is required';
      }
    }
    return undefined;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}

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
  GoabFormItem
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
    GoabFormItem
  ],
  template: `
    <goab-container>
      <h1>Checkbox Component Examples</h1>
      <p>Let the user select one or more options.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Basic Checkbox Examples</h2>
      <p>Simple checkbox examples with different states:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic States</h3>
      <goab-block direction="column" gap="m" mb="l">
        <goab-checkbox
          name="basic-checked"
          text="Checked checkbox"
          [checked]="true">
        </goab-checkbox>

        <goab-checkbox
          name="basic-unchecked"
          text="Unchecked checkbox"
          [checked]="false">
        </goab-checkbox>

        <goab-checkbox
          name="basic-disabled"
          text="Disabled checkbox"
          [disabled]="true">
        </goab-checkbox>

        <goab-checkbox
          name="basic-disabled-checked"
          text="Disabled checked checkbox"
          [checked]="true"
          [disabled]="true">
        </goab-checkbox>
      </goab-block>

      <h3>Error States</h3>
      <goab-block direction="column" gap="m" mb="l">
        <goab-checkbox
          name="error-checkbox"
          text="Checkbox with error"
          [error]="true">
        </goab-checkbox>

        <goab-checkbox
          name="error-checked-checkbox"
          text="Checked checkbox with error"
          [checked]="true"
          [error]="true">
        </goab-checkbox>
      </goab-block>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Reactive Forms Examples</h2>
      <p>Using checkboxes with Angular reactive forms (FormControl):</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic Reactive Form</h3>
      <form [formGroup]="basicReactiveForm">
        <goab-form-item label="Preferences">
          <goab-block direction="column" gap="s">
            <goab-checkbox
              name="newsletter"
              text="Subscribe to newsletter"
              formControlName="newsletter"
              [checked]="basicReactiveForm.get('newsletter')?.value">
            </goab-checkbox>

            <goab-checkbox
              name="notifications"
              text="Enable email notifications"
              formControlName="notifications"
              [checked]="basicReactiveForm.get('notifications')?.value">
            </goab-checkbox>

            <goab-checkbox
              name="marketing"
              text="Receive marketing communications"
              formControlName="marketing"
              [checked]="basicReactiveForm.get('marketing')?.value">
            </goab-checkbox>
          </goab-block>
        </goab-form-item>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onReactiveFormSubmit()">
            Submit Preferences
          </goab-button>
          <goab-button type="secondary" (onClick)="resetReactiveForm()">
            Reset Form
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Form Values:</h4>
          <pre>{{ basicReactiveForm.value | json }}</pre>
          <p><strong>Form Valid:</strong> {{ basicReactiveForm.valid }}</p>
        </goab-card>
      </form>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Required Checkbox with Validation</h3>
      <form [formGroup]="validationForm">
        <goab-form-item label="Terms and Conditions" [error]="getFieldError('terms')">
          <goab-checkbox
            name="terms"
            text="I agree to the terms and conditions"
            formControlName="terms"
            [checked]="validationForm.get('terms')?.value"
            [error]="isFieldInvalid('terms')"
            (onChange)="onValidationCheckboxChange('terms', $event)">
          </goab-checkbox>
        </goab-form-item>

        <goab-form-item label="Privacy Policy" [error]="getFieldError('privacy')">
          <goab-checkbox
            name="privacy"
            text="I acknowledge the privacy policy"
            formControlName="privacy"
            [checked]="validationForm.get('privacy')?.value"
            [error]="isFieldInvalid('privacy')"
            (onChange)="onValidationCheckboxChange('privacy', $event)">
          </goab-checkbox>
        </goab-form-item>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onValidationFormSubmit()" [disabled]="validationForm.invalid">
            Accept Agreement
          </goab-button>
          <goab-button type="secondary" (onClick)="resetValidationForm()">
            Clear
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Validation Status:</h4>
          <p><strong>Terms Valid:</strong> {{ validationForm.get('terms')?.valid }}</p>
          <p><strong>Privacy Valid:</strong> {{ validationForm.get('privacy')?.valid }}</p>
          <p><strong>Form Valid:</strong> {{ validationForm.valid }}</p>
        </goab-card>
      </form>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Dynamic Checkbox List</h3>
      <form [formGroup]="dynamicForm">
        <goab-form-item label="Select Services">
          <goab-block direction="column" gap="s">
            <goab-checkbox
              *ngFor="let service of services; trackBy: trackByService"
              [name]="service.id"
              [text]="service.name"
              [description]="service.description"
              [formControlName]="service.id"
              [checked]="dynamicForm.get(service.id)?.value"
              (onChange)="onDynamicServiceChange(service.id, $event)">
            </goab-checkbox>
          </goab-block>
        </goab-form-item>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onDynamicFormSubmit()">
            Select Services
          </goab-button>
          <goab-button type="tertiary" (onClick)="selectAllServices()">
            Select All
          </goab-button>
          <goab-button type="tertiary" (onClick)="clearAllServices()">
            Clear All
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Selected Services:</h4>
          <ul>
            <li *ngFor="let service of getSelectedServices()">
              {{ service.name }} - {{ service.description }}
            </li>
          </ul>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Template-Driven Forms Examples</h2>
      <p>Using checkboxes with Angular template-driven forms (ngModel):</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic Template-Driven Form</h3>
      <form #templateForm="ngForm">
        <goab-form-item label="Account Settings">
          <goab-block direction="column" gap="s">
            <goab-checkbox
              name="twoFactor"
              text="Enable two-factor authentication"
              [(ngModel)]="templateData.twoFactor"
              [checked]="templateData.twoFactor"
              (onChange)="onTemplateCheckboxChange('twoFactor', $event)">
            </goab-checkbox>

            <goab-checkbox
              name="emailAlerts"
              text="Email security alerts"
              [(ngModel)]="templateData.emailAlerts"
              [checked]="templateData.emailAlerts"
              (onChange)="onTemplateCheckboxChange('emailAlerts', $event)">
            </goab-checkbox>

            <goab-checkbox
              name="sessionTimeout"
              text="Auto logout after inactivity"
              [(ngModel)]="templateData.sessionTimeout"
              [checked]="templateData.sessionTimeout"
              (onChange)="onTemplateCheckboxChange('sessionTimeout', $event)">
            </goab-checkbox>
          </goab-block>
        </goab-form-item>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onTemplateFormSubmit()">
            Save Settings
          </goab-button>
          <goab-button type="secondary" (onClick)="resetTemplateForm()">
            Reset
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Template Form Data:</h4>
          <pre>{{ templateData | json }}</pre>
          <p><strong>Form Valid:</strong> {{ templateForm.valid }}</p>
        </goab-card>
      </form>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Template Form with Validation</h3>
      <form #validationTemplateForm="ngForm">
        <goab-form-item label="Required Agreements">
          <goab-block direction="column" gap="s">
            <goab-checkbox
              name="userAgreement"
              text="I accept the user agreement"
              [(ngModel)]="templateValidationData.userAgreement"
              [checked]="templateValidationData.userAgreement"
              (onChange)="onTemplateValidationChange('userAgreement', $event)"
              required
              #userAgreement="ngModel"
              [error]="userAgreement.invalid && userAgreement.touched">
            </goab-checkbox>

            <goab-checkbox
              name="dataPolicy"
              text="I agree to the data processing policy"
              [(ngModel)]="templateValidationData.dataPolicy"
              [checked]="templateValidationData.dataPolicy"
              (onChange)="onTemplateValidationChange('dataPolicy', $event)"
              required
              #dataPolicy="ngModel"
              [error]="dataPolicy.invalid && dataPolicy.touched">
            </goab-checkbox>
          </goab-block>
        </goab-form-item>

        <goab-form-item label="Optional Preferences">
          <goab-block direction="column" gap="s">
            <goab-checkbox
              name="analytics"
              text="Allow analytics tracking"
              [(ngModel)]="templateValidationData.analytics"
              [checked]="templateValidationData.analytics"
              (onChange)="onTemplateValidationChange('analytics', $event)">
            </goab-checkbox>

            <goab-checkbox
              name="cookies"
              text="Accept all cookies"
              [(ngModel)]="templateValidationData.cookies"
              [checked]="templateValidationData.cookies"
              (onChange)="onTemplateValidationChange('cookies', $event)">
            </goab-checkbox>
          </goab-block>
        </goab-form-item>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button
            type="primary"
            (onClick)="onTemplateValidationSubmit()"
            [disabled]="!validationTemplateForm.valid">
            Confirm Selections
          </goab-button>
          <goab-button type="secondary" (onClick)="resetTemplateValidationForm()">
            Reset
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Validation State:</h4>
          <p><strong>User Agreement Valid:</strong> {{ userAgreement.valid }}</p>
          <p><strong>Data Policy Valid:</strong> {{ dataPolicy.valid }}</p>
          <p><strong>Form Valid:</strong> {{ validationTemplateForm.valid }}</p>
          <pre>{{ templateValidationData | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Advanced Examples</h2>
      <p>More complex checkbox scenarios and patterns:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Checkboxes with Descriptions</h3>
      <goab-block direction="column" gap="m" mb="l">
        <goab-checkbox
          name="premium-plan"
          text="Premium Plan"
          description="Includes advanced features, priority support, and unlimited usage"
          [(ngModel)]="advancedData.premiumPlan"
          (onChange)="onAdvancedChange('premiumPlan', $event)">
        </goab-checkbox>

        <goab-checkbox
          name="backup-service"
          text="Automatic Backup Service"
          description="Daily automated backups of your data with 30-day retention"
          [(ngModel)]="advancedData.backupService"
          (onChange)="onAdvancedChange('backupService', $event)">
        </goab-checkbox>

        <goab-checkbox
          name="mobile-app"
          text="Mobile App Access"
          description="Download our mobile apps for iOS and Android devices"
          [(ngModel)]="advancedData.mobileApp"
          (onChange)="onAdvancedChange('mobileApp', $event)">
        </goab-checkbox>
      </goab-block>

      <h3>Conditional Checkboxes</h3>
      <p>Checkboxes that enable or disable other options based on selection:</p>

      <goab-block direction="column" gap="m" mb="l">
        <goab-checkbox
          name="enable-notifications"
          text="Enable notifications"
          [(ngModel)]="conditionalData.enableNotifications"
          (onChange)="onConditionalChange('enableNotifications', $event)">
        </goab-checkbox>

        <div *ngIf="conditionalData.enableNotifications" style="margin-left: 24px;">
          <goab-block direction="column" gap="s">
            <goab-checkbox
              name="email-notifications"
              text="Email notifications"
              [(ngModel)]="conditionalData.emailNotifications"
              (onChange)="onConditionalChange('emailNotifications', $event)">
            </goab-checkbox>

            <goab-checkbox
              name="sms-notifications"
              text="SMS notifications"
              [(ngModel)]="conditionalData.smsNotifications"
              (onChange)="onConditionalChange('smsNotifications', $event)">
            </goab-checkbox>

            <goab-checkbox
              name="push-notifications"
              text="Push notifications"
              [(ngModel)]="conditionalData.pushNotifications"
              (onChange)="onConditionalChange('pushNotifications', $event)">
            </goab-checkbox>
          </goab-block>
        </div>

        <goab-checkbox
          name="enable-sharing"
          text="Enable data sharing"
          [(ngModel)]="conditionalData.enableSharing"
          (onChange)="onConditionalChange('enableSharing', $event)">
        </goab-checkbox>

        <div *ngIf="conditionalData.enableSharing" style="margin-left: 24px;">
          <goab-block direction="column" gap="s">
            <goab-checkbox
              name="share-analytics"
              text="Share usage analytics"
              [(ngModel)]="conditionalData.shareAnalytics"
              (onChange)="onConditionalChange('shareAnalytics', $event)">
            </goab-checkbox>

            <goab-checkbox
              name="share-feedback"
              text="Share feedback and reviews"
              [(ngModel)]="conditionalData.shareFeedback"
              (onChange)="onConditionalChange('shareFeedback', $event)">
            </goab-checkbox>
          </goab-block>
        </div>
      </goab-block>

      <h3>Interactive Examples</h3>
      <p>Test checkbox behavior and state management:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="checkAllBoxes()">
          Check All Interactive
        </goab-button>
        <goab-button type="secondary" (onClick)="uncheckAllBoxes()">
          Uncheck All Interactive
        </goab-button>
        <goab-button type="tertiary" (onClick)="toggleAllBoxes()">
          Toggle All Interactive
        </goab-button>
        <goab-button type="tertiary" (onClick)="randomizeBoxes()">
          Randomize
        </goab-button>
      </goab-button-group>

      <goab-block direction="column" gap="s" mb="l">
        <goab-checkbox
          name="interactive-1"
          text="Interactive checkbox 1"
          [(ngModel)]="interactiveData.checkbox1"
          [checked]="interactiveData.checkbox1"
          (onChange)="onInteractiveChange('checkbox1', $event)">
        </goab-checkbox>

        <goab-checkbox
          name="interactive-2"
          text="Interactive checkbox 2"
          [(ngModel)]="interactiveData.checkbox2"
          [checked]="interactiveData.checkbox2"
          (onChange)="onInteractiveChange('checkbox2', $event)">
        </goab-checkbox>

        <goab-checkbox
          name="interactive-3"
          text="Interactive checkbox 3"
          [(ngModel)]="interactiveData.checkbox3"
          [checked]="interactiveData.checkbox3"
          (onChange)="onInteractiveChange('checkbox3', $event)">
        </goab-checkbox>

        <goab-checkbox
          name="interactive-4"
          text="Interactive checkbox 4"
          [(ngModel)]="interactiveData.checkbox4"
          [checked]="interactiveData.checkbox4"
          (onChange)="onInteractiveChange('checkbox4', $event)">
        </goab-checkbox>
      </goab-block>

      <goab-card>
        <h4>Interactive State:</h4>
        <pre>{{ interactiveData | json }}</pre>
        <p><strong>Checked Count:</strong> {{ getCheckedCount() }} / 4</p>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Reactive Forms:</strong> Use <code>formControlName</code> for reactive forms with <code>FormControl</code></li>
        <li><strong>Template Forms:</strong> Use <code>[(ngModel)]</code> and <code>(onChange)</code> for template-driven forms</li>
        <li><strong>Validation:</strong> Apply validators to <code>FormControl</code> or use <code>required</code> attribute in templates</li>
        <li><strong>Error States:</strong> Set <code>[error]="true"</code> to show error styling</li>
        <li><strong>Disabled State:</strong> Use <code>[disabled]="true"</code> to disable interaction</li>
        <li><strong>Descriptions:</strong> Use the <code>description</code> property to provide additional context</li>
        <li><strong>Accessibility:</strong> Use <code>ariaLabel</code> for screen reader support when needed</li>
        <li><strong>Event Handling:</strong> Listen to <code>(onChange)</code> events for custom logic</li>
      </ul>
    </goab-container>
  `,
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

  constructor(private fb: FormBuilder) {
    // Initialize reactive forms
    this.basicReactiveForm = this.fb.group({
      newsletter: [false],
      notifications: [true],
      marketing: [false]
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

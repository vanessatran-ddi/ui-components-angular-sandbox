import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  GoabContainer,
  GoabInput,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabBlock,
  GoabCard,
  GoabFormItem
} from '@abgov/angular-components';
import { GoabInputOnChangeDetail, GoabInputOnFocusDetail, GoabInputOnBlurDetail, GoabInputOnKeyPressDetail } from '@abgov/ui-components-common';

@Component({
  selector: 'app-input-examples',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoabContainer,
    GoabInput,
    GoabSpacer,
    GoabButton,
    GoabButtonGroup,
    GoabBlock,
    GoabCard,
    GoabFormItem
  ],
  template: `
    <goab-container>
      <h1>Input Component Examples</h1>
      <p>Allow users to enter and edit text with various input types and validation.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Basic Input Examples</h2>
      <p>Simple input examples with different states and types:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic States</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Default Input">
          <goab-input
            name="basic-default"
            placeholder="Enter text here"
            width="20rem"
            (onChange)="onBasicChange('default', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Input with Initial Value">
          <goab-input
            name="basic-with-value"
            [value]="'Sample text'"
            width="20rem"
            (onChange)="onBasicChange('withValue', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Disabled Input">
          <goab-input
            name="basic-disabled"
            [value]="'Cannot edit this'"
            [disabled]="true"
            width="20rem">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Readonly Input">
          <goab-input
            name="basic-readonly"
            [value]="'Read-only text'"
            [readonly]="true"
            width="20rem">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Input with Error" error="Please enter a valid value">
          <goab-input
            name="basic-error"
            [error]="true"
            width="20rem"
            (onChange)="onBasicChange('error', $event)">
          </goab-input>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Basic Examples State:</h4>
        <pre>{{ basicState | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Input Types Examples</h2>
      <p>Different input types for various data formats:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Common Input Types</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Text Input">
          <goab-input
            name="type-text"
            type="text"
            placeholder="Enter text"
            width="20rem"
            (onChange)="onTypeChange('text', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Email Input">
          <goab-input
            name="type-email"
            type="email"
            placeholder="Enter email address"
            width="20rem"
            (onChange)="onTypeChange('email', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Password Input">
          <goab-input
            name="type-password"
            type="password"
            placeholder="Enter password"
            width="20rem"
            (onChange)="onTypeChange('password', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Phone Input">
          <goab-input
            name="type-tel"
            type="tel"
            placeholder="(555) 123-4567"
            width="20rem"
            (onChange)="onTypeChange('tel', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="URL Input">
          <goab-input
            name="type-url"
            type="url"
            placeholder="https://example.com"
            width="20rem"
            (onChange)="onTypeChange('url', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Number Input">
          <goab-input
            name="type-number"
            type="number"
            placeholder="Enter number"
            [min]="0"
            [max]="100"
            [step]="1"
            width="20rem"
            (onChange)="onTypeChange('number', $event)">
          </goab-input>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Input Types State:</h4>
        <pre>{{ typeState | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Input Features Examples</h2>
      <p>Advanced input features and styling options:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Icons and Styling</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Input with Leading Icon">
          <goab-input
            name="leading-icon"
            placeholder="Search..."
            leadingIcon="search"
            width="20rem"
            (onChange)="onFeatureChange('leadingIcon', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Input with Trailing Icon">
          <goab-input
            name="trailing-icon"
            placeholder="Enter password"
            type="password"
            trailingIcon="eye"
            width="20rem"
            (onChange)="onFeatureChange('trailingIcon', $event)"
            (onTrailingIconClick)="togglePasswordVisibility()">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Input with Prefix">
          <goab-input
            name="with-prefix"
            placeholder="0.00"
            prefix="$"
            type="number"
            textAlign="right"
            width="20rem"
            (onChange)="onFeatureChange('prefix', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Input with Suffix">
          <goab-input
            name="with-suffix"
            placeholder="Enter weight"
            suffix="kg"
            type="number"
            width="20rem"
            (onChange)="onFeatureChange('suffix', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Input with Max Length">
          <goab-input
            name="max-length"
            placeholder="Max 10 characters"
            [maxLength]="10"
            width="20rem"
            (onChange)="onFeatureChange('maxLength', $event)">
          </goab-input>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Feature Examples State:</h4>
        <pre>{{ featureState | json }}</pre>
        <p><strong>Password Visible:</strong> {{ passwordVisible }}</p>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Reactive Forms Examples</h2>
      <p>Using inputs with Angular reactive forms and validation:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>User Registration Form</h3>
      <form [formGroup]="registrationForm">
        <goab-block direction="column" gap="l">
          <goab-form-item 
            label="First Name" 
            [error]="getFieldError('firstName')"
            helpText="Enter your first name">
            <goab-input
              name="firstName"
              formControlName="firstName"
              placeholder="First name"
              [error]="isFieldInvalid('firstName')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Last Name" 
            [error]="getFieldError('lastName')"
            helpText="Enter your last name">
            <goab-input
              name="lastName"
              formControlName="lastName"
              placeholder="Last name"
              [error]="isFieldInvalid('lastName')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Email Address" 
            [error]="getFieldError('email')"
            helpText="Enter a valid email address">
            <goab-input
              name="email"
              formControlName="email"
              type="email"
              placeholder="email@example.com"
              leadingIcon="mail"
              [error]="isFieldInvalid('email')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Phone Number" 
            [error]="getFieldError('phone')"
            helpText="Enter your phone number">
            <goab-input
              name="phone"
              formControlName="phone"
              type="tel"
              placeholder="(555) 123-4567"
              leadingIcon="call"
              [error]="isFieldInvalid('phone')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Age" 
            [error]="getFieldError('age')"
            helpText="Enter your age (18-120)">
            <goab-input
              name="age"
              formControlName="age"
              type="number"
              placeholder="Age"
              [min]="18"
              [max]="120"
              suffix="years"
              [error]="isFieldInvalid('age')"
              width="20rem">
            </goab-input>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onRegistrationSubmit()"
            [disabled]="registrationForm.invalid">
            Register
          </goab-button>
          <goab-button type="secondary" (onClick)="resetRegistrationForm()">
            Reset Form
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Registration Form Values:</h4>
          <pre>{{ registrationForm.value | json }}</pre>
          <p><strong>Form Valid:</strong> {{ registrationForm.valid }}</p>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Template-Driven Forms Examples</h2>
      <p>Using inputs with Angular template-driven forms:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Contact Information Form</h3>
      <form #contactForm="ngForm">
        <goab-block direction="column" gap="l">
          <goab-form-item label="Company Name">
            <goab-input
              name="companyName"
              [(ngModel)]="templateData.companyName"
              placeholder="Enter company name"
              width="20rem"
              (onChange)="onTemplateChange('companyName', $event)">
            </goab-input>
          </goab-form-item>

          <goab-form-item label="Contact Person">
            <goab-input
              name="contactPerson"
              [(ngModel)]="templateData.contactPerson"
              placeholder="Enter contact person name"
              width="20rem"
              (onChange)="onTemplateChange('contactPerson', $event)">
            </goab-input>
          </goab-form-item>

          <goab-form-item label="Business Email">
            <goab-input
              name="businessEmail"
              [(ngModel)]="templateData.businessEmail"
              type="email"
              placeholder="business@company.com"
              leadingIcon="mail"
              width="20rem"
              (onChange)="onTemplateChange('businessEmail', $event)">
            </goab-input>
          </goab-form-item>

          <goab-form-item label="Website URL">
            <goab-input
              name="website"
              [(ngModel)]="templateData.website"
              type="url"
              placeholder="https://company.com"
              prefix="https://"
              width="20rem"
              (onChange)="onTemplateChange('website', $event)">
            </goab-input>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onContactFormSubmit()">
            Save Contact Info
          </goab-button>
          <goab-button type="secondary" (onClick)="resetContactForm()">
            Reset
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Contact Form Data:</h4>
          <pre>{{ templateData | json }}</pre>
          <p><strong>Form Valid:</strong> {{ contactForm.valid }}</p>
        </goab-card>
      </form>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Template Form with Validation</h3>
      <form #validationTemplateForm="ngForm">
        <goab-block direction="column" gap="l">
          <goab-form-item 
            label="Username" 
            [error]="usernameField.invalid && usernameField.touched ? 'Username is required (min 3 characters)' : undefined">
            <goab-input
              name="username"
              [(ngModel)]="templateValidationData.username"
              placeholder="Enter username"
              width="20rem"
              required
              minlength="3"
              #usernameField="ngModel"
              [error]="usernameField.invalid && usernameField.touched"
              (onChange)="onTemplateValidationChange('username', $event)">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Email Address" 
            [error]="emailField.invalid && emailField.touched ? 'Please enter a valid email address' : undefined">
            <goab-input
              name="email"
              [(ngModel)]="templateValidationData.email"
              type="email"
              placeholder="user@example.com"
              leadingIcon="mail"
              width="20rem"
              required
              email
              #emailField="ngModel"
              [error]="emailField.invalid && emailField.touched"
              (onChange)="onTemplateValidationChange('email', $event)">
            </goab-input>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onTemplateValidationSubmit()"
            [disabled]="!validationTemplateForm.valid">
            Create Account
          </goab-button>
          <goab-button type="secondary" (onClick)="resetTemplateValidationForm()">
            Reset
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Template Validation State:</h4>
          <p><strong>Username Valid:</strong> {{ usernameField.valid }}</p>
          <p><strong>Email Valid:</strong> {{ emailField.valid }}</p>
          <p><strong>Form Valid:</strong> {{ validationTemplateForm.valid }}</p>
          <pre>{{ templateValidationData | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Advanced Input Examples</h2>
      <p>Complex input scenarios with custom validation and formatting:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Financial Information Form</h3>
      <form [formGroup]="financialForm">
        <goab-block direction="column" gap="l">
          <goab-form-item 
            label="Annual Salary" 
            [error]="getFieldError('salary')"
            helpText="Enter your annual salary">
            <goab-input
              name="salary"
              formControlName="salary"
              type="number"
              placeholder="0"
              prefix="$"
              suffix="CAD"
              textAlign="right"
              [min]="0"
              [max]="1000000"
              [error]="isFieldInvalid('salary')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Social Insurance Number" 
            [error]="getFieldError('sin')"
            helpText="Enter your 9-digit SIN (xxx-xxx-xxx)">
            <goab-input
              name="sin"
              formControlName="sin"
              placeholder="123-456-789"
              [maxLength]="11"
              [error]="isFieldInvalid('sin')"
              width="20rem"
              (onChange)="formatSIN($event)">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Bank Account Number" 
            [error]="getFieldError('accountNumber')"
            helpText="Enter your bank account number">
            <goab-input
              name="accountNumber"
              formControlName="accountNumber"
              type="number"
              placeholder="Account number"
              leadingIcon="card"
              [error]="isFieldInvalid('accountNumber')"
              width="20rem">
            </goab-input>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onFinancialFormSubmit()"
            [disabled]="financialForm.invalid">
            Save Financial Info
          </goab-button>
          <goab-button type="secondary" (onClick)="resetFinancialForm()">
            Clear Form
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Financial Form Status:</h4>
          <p><strong>Salary Valid:</strong> {{ financialForm.get('salary')?.valid }}</p>
          <p><strong>SIN Valid:</strong> {{ financialForm.get('sin')?.valid }}</p>
          <p><strong>Account Valid:</strong> {{ financialForm.get('accountNumber')?.valid }}</p>
          <p><strong>Form Valid:</strong> {{ financialForm.valid }}</p>
          <pre>{{ financialForm.value | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Address Information Form</h3>
      <form [formGroup]="addressForm">
        <goab-block direction="column" gap="l">
          <goab-form-item 
            label="Street Address" 
            [error]="getAddressFieldError('streetAddress')"
            helpText="Enter your street address">
            <goab-input
              name="streetAddress"
              formControlName="streetAddress"
              placeholder="123 Main Street"
              leadingIcon="pin"
              [error]="isAddressFieldInvalid('streetAddress')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="City" 
            [error]="getAddressFieldError('city')"
            helpText="Enter your city">
            <goab-input
              name="city"
              formControlName="city"
              placeholder="Calgary"
              [error]="isAddressFieldInvalid('city')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Postal Code" 
            [error]="getAddressFieldError('postalCode')"
            helpText="Enter Canadian postal code (A1A 1A1)">
            <goab-input
              name="postalCode"
              formControlName="postalCode"
              placeholder="T2P 1A1"
              [maxLength]="7"
              [error]="isAddressFieldInvalid('postalCode')"
              width="20rem"
              (onChange)="formatPostalCode($event)">
            </goab-input>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onAddressFormSubmit()"
            [disabled]="addressForm.invalid">
            Save Address
          </goab-button>
          <goab-button type="secondary" (onClick)="resetAddressForm()">
            Clear Address
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Address Form Values:</h4>
          <pre>{{ addressForm.value | json }}</pre>
          <p><strong>Form Valid:</strong> {{ addressForm.valid }}</p>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Interactive Examples</h2>
      <p>Test input behavior and event handling:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Event Tracking Example</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Event Test Input">
          <goab-input
            name="event-test"
            [(ngModel)]="eventTestValue"
            placeholder="Type here to see events"
            width="20rem"
            (onChange)="onEventTestChange($event)"
            (onFocus)="onEventTestFocus($event)"
            (onBlur)="onEventTestBlur($event)"
            (onKeyPress)="onEventTestKeyPress($event)">
          </goab-input>
        </goab-form-item>
      </goab-block>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="fillSampleData()">
          Fill Sample Data
        </goab-button>
        <goab-button type="secondary" (onClick)="clearEventTest()">
          Clear Input
        </goab-button>
        <goab-button type="tertiary" (onClick)="focusEventTest()">
          Focus Input
        </goab-button>
        <goab-button type="tertiary" (onClick)="clearEventLog()">
          Clear Event Log
        </goab-button>
      </goab-button-group>

      <goab-card>
        <h4>Event Log:</h4>
        <p><strong>Current Value:</strong> "{{ eventTestValue }}"</p>
        <p><strong>Character Count:</strong> {{ eventTestValue?.length || 0 }}</p>
        <p><strong>Last Event:</strong> {{ lastEvent }}</p>
        <div style="max-height: 200px; overflow-y: auto;">
          <pre>{{ eventLog.slice(-10).join('\\n') }}</pre>
        </div>
      </goab-card>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Dynamic Input Controls</h3>
      <p>Programmatically control input properties:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="toggleInputProperties()">
          Toggle Properties
        </goab-button>
        <goab-button type="secondary" (onClick)="randomizeInputValues()">
          Random Values
        </goab-button>
        <goab-button type="tertiary" (onClick)="clearAllInputs()">
          Clear All
        </goab-button>
        <goab-button type="tertiary" (onClick)="resetToDefaults()">
          Reset Defaults
        </goab-button>
      </goab-button-group>

      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Dynamic Input 1">
          <goab-input
            name="dynamic-1"
            [(ngModel)]="dynamicData.input1"
            [placeholder]="dynamicProperties.placeholder1"
            [disabled]="dynamicProperties.disabled1"
            [readonly]="dynamicProperties.readonly1"
            [maxLength]="dynamicProperties.maxLength1"
            width="20rem"
            (onChange)="onDynamicChange('input1', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Dynamic Input 2">
          <goab-input
            name="dynamic-2"
            [(ngModel)]="dynamicData.input2"
            [placeholder]="dynamicProperties.placeholder2"
            leadingIcon="search"
            width="20rem"
            (onChange)="onDynamicChange('input2', $event)">
          </goab-input>
        </goab-form-item>

        <goab-form-item label="Dynamic Input 3">
          <goab-input
            name="dynamic-3"
            [(ngModel)]="dynamicData.input3"
            type="text"
            [prefix]="dynamicProperties.prefix3"
            [suffix]="dynamicProperties.suffix3"
            width="20rem"
            (onChange)="onDynamicChange('input3', $event)">
          </goab-input>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Dynamic Controls State:</h4>
        <p><strong>Properties Changed:</strong> {{ propertiesChanged }} times</p>
        <pre>{{ dynamicData | json }}</pre>
        <h5>Current Properties:</h5>
        <pre>{{ dynamicProperties | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Real-world Use Cases</h2>
      <p>Common patterns for input usage in government forms:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Government Service Application</h3>
      <form [formGroup]="serviceForm">
        <goab-block direction="column" gap="l">
          <goab-form-item 
            label="Application ID" 
            [error]="getServiceFieldError('applicationId')"
            helpText="Enter your application reference number">
            <goab-input
              name="applicationId"
              formControlName="applicationId"
              placeholder="APP-2025-001234"
              [maxLength]="15"
              [error]="isServiceFieldInvalid('applicationId')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Applicant Name" 
            [error]="getServiceFieldError('applicantName')"
            helpText="Enter full legal name">
            <goab-input
              name="applicantName"
              formControlName="applicantName"
              placeholder="Full legal name"
              [error]="isServiceFieldInvalid('applicantName')"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Service Fee" 
            [error]="getServiceFieldError('serviceFee')"
            helpText="Service processing fee">
            <goab-input
              name="serviceFee"
              formControlName="serviceFee"
              type="number"
              prefix="$"
              suffix="CAD"
              textAlign="right"
              [min]="0"
              [readonly]="true"
              [value]="calculateServiceFee()"
              width="20rem">
            </goab-input>
          </goab-form-item>

          <goab-form-item 
            label="Contact Phone" 
            [error]="getServiceFieldError('contactPhone')"
            helpText="Primary contact number">
            <goab-input
              name="contactPhone"
              formControlName="contactPhone"
              type="tel"
              placeholder="(403) 555-0123"
              leadingIcon="call"
              [error]="isServiceFieldInvalid('contactPhone')"
              width="20rem"
              (onChange)="formatPhoneNumber($event)">
            </goab-input>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onServiceFormSubmit()"
            [disabled]="serviceForm.invalid">
            Submit Application
          </goab-button>
          <goab-button type="secondary" (onClick)="resetServiceForm()">
            Reset Application
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Service Application Status:</h4>
          <p><strong>Application ID Valid:</strong> {{ serviceForm.get('applicationId')?.valid }}</p>
          <p><strong>Applicant Name Valid:</strong> {{ serviceForm.get('applicantName')?.valid }}</p>
          <p><strong>Contact Phone Valid:</strong> {{ serviceForm.get('contactPhone')?.valid }}</p>
          <p><strong>Form Valid:</strong> {{ serviceForm.valid }}</p>
          <p><strong>Calculated Fee:</strong> {{ '$' + (calculateServiceFee() | number:'1.2-2') + ' CAD' }}</p>
          <pre>{{ serviceForm.value | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Types:</strong> Use appropriate input types: <code>text</code>, <code>email</code>, <code>password</code>, <code>tel</code>, <code>url</code>, <code>number</code></li>
        <li><strong>Reactive Forms:</strong> Use formControlName for reactive forms and FormControl</li>
        <li><strong>Template Forms:</strong> Use [(ngModel)] and (onChange) for template-driven forms</li>
        <li><strong>Validation:</strong> Apply validators to FormControl or use validation attributes in templates</li>
        <li><strong>Icons:</strong> Use leadingIcon and trailingIcon to add visual context</li>
        <li><strong>Formatting:</strong> Use prefix and suffix for currency, units, or context</li>
        <li><strong>Alignment:</strong> Use textAlign="right" for numerical inputs</li>
        <li><strong>Constraints:</strong> Set min, max, maxLength, and step for validation</li>
        <li><strong>States:</strong> Use disabled, readonly, and error for different states</li>
        <li><strong>Events:</strong> Listen to (onChange), (onFocus), (onBlur), (onKeyPress)</li>
        <li><strong>Width:</strong> Set appropriate width using the width property</li>
        <li><strong>Accessibility:</strong> Use ariaLabel and ariaLabelledBy for screen readers</li>
        <li><strong>Auto-completion:</strong> Use autoComplete to help users fill forms faster</li>
        <li><strong>Security:</strong> Never store sensitive data in component state or logs</li>
      </ul>
    </goab-container>
  `,
})
export class InputExamplesComponent implements OnInit {
  // Form instances
  registrationForm: FormGroup;
  financialForm: FormGroup;
  addressForm: FormGroup;
  serviceForm: FormGroup;

  // Basic state tracking
  basicState = {
    default: '',
    withValue: 'Sample text',
    error: ''
  };

  typeState = {
    text: '',
    email: '',
    password: '',
    tel: '',
    url: '',
    number: null
  };

  featureState = {
    leadingIcon: '',
    trailingIcon: '',
    prefix: null,
    suffix: null,
    maxLength: ''
  };

  // Template-driven form data
  templateData = {
    companyName: '',
    contactPerson: '',
    businessEmail: '',
    website: ''
  };

  templateValidationData = {
    username: '',
    email: ''
  };

  // Interactive data
  eventTestValue = '';
  eventLog: string[] = [];
  lastEvent = '';
  passwordVisible = false;

  dynamicData = {
    input1: '',
    input2: '',
    input3: ''
  };

  dynamicProperties = {
    placeholder1: 'Type here...',
    disabled1: false,
    readonly1: false,
    maxLength1: 50,
    placeholder2: 'Search...',
    leadingIcon2: 'search',
    trailingIcon2: undefined as string | undefined,
    type3: 'text',
    prefix3: '',
    suffix3: ''
  };

  propertiesChanged = 0;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]],
      age: [null, [Validators.required, Validators.min(18), Validators.max(120)]]
    });

    this.financialForm = this.fb.group({
      salary: [null, [Validators.required, Validators.min(0)]],
      sin: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{3}$/)]],
      accountNumber: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.addressForm = this.fb.group({
      streetAddress: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      postalCode: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/)]]
    });

    this.serviceForm = this.fb.group({
      applicationId: ['', [Validators.required, Validators.pattern(/^APP-\d{4}-\d{6}$/)]],
      applicantName: ['', [Validators.required, Validators.minLength(3)]],
      serviceFee: [{ value: this.calculateServiceFee(), disabled: true }],
      contactPhone: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.logEvent('Component initialized');
  }

  // Basic examples methods
  onBasicChange(type: string, event: GoabInputOnChangeDetail) {
    console.log(`Basic ${type} changed:`, event);
    (this.basicState as any)[type] = event.value;
    this.logEvent(`Basic ${type}: ${event.value}`);
  }

  onTypeChange(type: string, event: GoabInputOnChangeDetail) {
    console.log(`Type ${type} changed:`, event);
    (this.typeState as any)[type] = event.value;
    this.logEvent(`Type ${type}: ${event.value}`);
  }

  onFeatureChange(feature: string, event: GoabInputOnChangeDetail) {
    console.log(`Feature ${feature} changed:`, event);
    (this.featureState as any)[feature] = event.value;
    this.logEvent(`Feature ${feature}: ${event.value}`);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.logEvent(`Password visibility: ${this.passwordVisible ? 'visible' : 'hidden'}`);
  }

  // Reactive form methods
  onRegistrationSubmit() {
    if (this.registrationForm.valid) {
      console.log('Registration Form Submitted:', this.registrationForm.value);
      this.logEvent('Registration form submitted successfully');
    } else {
      this.markFormGroupTouched(this.registrationForm);
      this.logEvent('Registration form submission failed - validation errors');
    }
  }

  resetRegistrationForm() {
    this.registrationForm.reset();
    this.logEvent('Registration form reset');
  }

  onFinancialFormSubmit() {
    if (this.financialForm.valid) {
      console.log('Financial Form Submitted:', this.financialForm.value);
      this.logEvent('Financial form submitted successfully');
    } else {
      this.markFormGroupTouched(this.financialForm);
      this.logEvent('Financial form submission failed - validation errors');
    }
  }

  resetFinancialForm() {
    this.financialForm.reset();
    this.logEvent('Financial form reset');
  }

  onAddressFormSubmit() {
    if (this.addressForm.valid) {
      console.log('Address Form Submitted:', this.addressForm.value);
      this.logEvent('Address form submitted successfully');
    } else {
      this.markFormGroupTouched(this.addressForm);
      this.logEvent('Address form submission failed - validation errors');
    }
  }

  resetAddressForm() {
    this.addressForm.reset();
    this.logEvent('Address form reset');
  }

  onServiceFormSubmit() {
    if (this.serviceForm.valid) {
      console.log('Service Form Submitted:', this.serviceForm.value);
      this.logEvent('Service application submitted successfully');
    } else {
      this.markFormGroupTouched(this.serviceForm);
      this.logEvent('Service form submission failed - validation errors');
    }
  }

  resetServiceForm() {
    this.serviceForm.reset();
    this.serviceForm.patchValue({ serviceFee: this.calculateServiceFee() });
    this.logEvent('Service form reset');
  }

  // Template form methods
  onTemplateChange(field: string, event: GoabInputOnChangeDetail) {
    console.log(`Template ${field} changed:`, event);
    (this.templateData as any)[field] = event.value;
    this.logEvent(`Template ${field}: ${event.value}`);
  }

  onContactFormSubmit() {
    console.log('Contact Form Submitted:', this.templateData);
    this.logEvent('Contact form submitted');
  }

  resetContactForm() {
    this.templateData = {
      companyName: '',
      contactPerson: '',
      businessEmail: '',
      website: ''
    };
    this.logEvent('Contact form reset');
  }

  onTemplateValidationChange(field: string, event: GoabInputOnChangeDetail) {
    console.log(`Template validation ${field} changed:`, event);
    (this.templateValidationData as any)[field] = event.value;
    this.logEvent(`Template validation ${field}: ${event.value}`);
  }

  onTemplateValidationSubmit() {
    console.log('Template Validation Submitted:', this.templateValidationData);
    this.logEvent('Template validation form submitted');
  }

  resetTemplateValidationForm() {
    this.templateValidationData = {
      username: '',
      email: ''
    };
    this.logEvent('Template validation form reset');
  }

  // Event tracking methods
  onEventTestChange(event: GoabInputOnChangeDetail) {
    this.logEvent(`Change: "${event.value}"`);
    this.lastEvent = 'change';
  }

  onEventTestFocus(event: GoabInputOnFocusDetail) {
    this.logEvent(`Focus: "${event.value}"`);
    this.lastEvent = 'focus';
  }

  onEventTestBlur(event: GoabInputOnBlurDetail) {
    this.logEvent(`Blur: "${event.value}"`);
    this.lastEvent = 'blur';
  }

  onEventTestKeyPress(event: GoabInputOnKeyPressDetail) {
    this.logEvent(`KeyPress: "${event.key}" (value: "${event.value}")`);
    this.lastEvent = 'keypress';
  }

  fillSampleData() {
    this.eventTestValue = 'Sample test data for events';
    this.logEvent('Sample data filled');
  }

  clearEventTest() {
    this.eventTestValue = '';
    this.logEvent('Event test input cleared');
  }

  focusEventTest() {
    this.logEvent('Focus requested programmatically');
  }

  clearEventLog() {
    this.eventLog = [];
    this.lastEvent = '';
    this.logEvent('Event log cleared');
  }

  // Dynamic control methods
  onDynamicChange(field: string, event: GoabInputOnChangeDetail) {
    console.log(`Dynamic ${field} changed:`, event);
    (this.dynamicData as any)[field] = event.value;
    this.logEvent(`Dynamic ${field}: ${event.value}`);
  }

  toggleInputProperties() {
    this.dynamicProperties = {
      placeholder1: this.dynamicProperties.placeholder1 === 'Type here...' ? 'Enter data...' : 'Type here...',
      disabled1: !this.dynamicProperties.disabled1,
      readonly1: !this.dynamicProperties.readonly1,
      maxLength1: this.dynamicProperties.maxLength1 === 50 ? 20 : 50,
      placeholder2: this.dynamicProperties.placeholder2 === 'Search...' ? 'Find...' : 'Search...',
      leadingIcon2: 'search',
      trailingIcon2: undefined as string | undefined,
      type3: 'text',
      prefix3: this.dynamicProperties.prefix3 === '' ? '$' : '',
      suffix3: this.dynamicProperties.suffix3 === '' ? 'CAD' : ''
    };
    this.propertiesChanged++;
    this.logEvent('Input properties toggled');
  }

  randomizeInputValues() {
    const samples = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
    this.dynamicData = {
      input1: samples[Math.floor(Math.random() * samples.length)],
      input2: samples[Math.floor(Math.random() * samples.length)],
      input3: Math.random() > 0.5 ? Math.floor(Math.random() * 1000).toString() : samples[Math.floor(Math.random() * samples.length)]
    };
    this.logEvent('Input values randomized');
  }

  clearAllInputs() {
    this.dynamicData = { input1: '', input2: '', input3: '' };
    this.logEvent('All dynamic inputs cleared');
  }

  resetToDefaults() {
    this.dynamicProperties = {
      placeholder1: 'Type here...',
      disabled1: false,
      readonly1: false,
      maxLength1: 50,
      placeholder2: 'Search...',
      leadingIcon2: 'search',
      trailingIcon2: undefined,
      type3: 'text',
      prefix3: '',
      suffix3: ''
    };
    this.dynamicData = { input1: '', input2: '', input3: '' };
    this.propertiesChanged = 0;
    this.logEvent('Properties and values reset to defaults');
  }

  // Formatting methods
  formatSIN(event: GoabInputOnChangeDetail) {
    const value = event.value?.replace(/\D/g, '') || '';
    if (value.length <= 9) {
      const formatted = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
      this.financialForm.patchValue({ sin: formatted }, { emitEvent: false });
    }
  }

  formatPostalCode(event: GoabInputOnChangeDetail) {
    const value = event.value?.toUpperCase().replace(/[^A-Z0-9]/g, '') || '';
    if (value.length <= 6) {
      const formatted = value.replace(/([A-Z]\d[A-Z])(\d[A-Z]\d)/, '$1 $2');
      this.addressForm.patchValue({ postalCode: formatted }, { emitEvent: false });
    }
  }

  formatPhoneNumber(event: GoabInputOnChangeDetail) {
    const value = event.value?.replace(/\D/g, '') || '';
    if (value.length <= 10) {
      const formatted = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      this.serviceForm.patchValue({ contactPhone: formatted }, { emitEvent: false });
    }
  }

  calculateServiceFee(): number {
    return 25.00; // Fixed government service fee
  }

  // Utility methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.registrationForm.get(fieldName) || this.financialForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string | undefined {
    const field = this.registrationForm.get(fieldName) || this.financialForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) return 'This field is required';
      if (field.errors?.['email']) return 'Please enter a valid email address';
      if (field.errors?.['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters required`;
      if (field.errors?.['pattern']) return 'Please enter a valid format';
      if (field.errors?.['min']) return `Minimum value is ${field.errors['min'].min}`;
      if (field.errors?.['max']) return `Maximum value is ${field.errors['max'].max}`;
    }
    return undefined;
  }

  isAddressFieldInvalid(fieldName: string): boolean {
    const field = this.addressForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getAddressFieldError(fieldName: string): string | undefined {
    const field = this.addressForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) return 'This field is required';
      if (field.errors?.['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters required`;
      if (field.errors?.['pattern']) return 'Please enter a valid postal code (A1A 1A1)';
    }
    return undefined;
  }

  isServiceFieldInvalid(fieldName: string): boolean {
    const field = this.serviceForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getServiceFieldError(fieldName: string): string | undefined {
    const field = this.serviceForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      if (field.errors?.['required']) return 'This field is required';
      if (field.errors?.['pattern']) {
        if (fieldName === 'applicationId') return 'Format: APP-YYYY-XXXXXX';
        return 'Please enter a valid format';
      }
      if (field.errors?.['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters required`;
    }
    return undefined;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  private logEvent(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.push(`[${timestamp}] ${message}`);
    if (this.eventLog.length > 100) {
      this.eventLog = this.eventLog.slice(-50); // Keep last 50 events
    }
  }
}
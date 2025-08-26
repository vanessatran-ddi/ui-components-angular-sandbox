import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  GoabContainer,
  GoabDatePicker,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabText,
  GoabBlock,
  GoabCard,
  GoabFormItem
} from '@abgov/angular-components';

@Component({
  selector: 'app-date-picker-examples',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoabContainer,
    GoabDatePicker,
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
      <h1>Date Picker Component Examples</h1>
      <p>Allow users to select a date from a calendar interface or enter it manually.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Basic Date Picker Examples</h2>
      <p>Simple date picker examples with different states:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic States</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Default Date Picker">
          <goab-date-picker
            name="basic-default"
            width="20rem"
            (onChange)="onBasicChange('default', $event)">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item label="Date Picker with Initial Value">
          <goab-date-picker
            name="basic-with-value"
            [value]="initialDate"
            width="20rem"
            (onChange)="onBasicChange('withValue', $event)">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item label="Disabled Date Picker">
          <goab-date-picker
            name="basic-disabled"
            [value]="initialDate"
            [disabled]="true"
            width="20rem">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item label="Date Picker with Error" error="Please select a valid date">
          <goab-date-picker
            name="basic-error"
            [error]="true"
            width="20rem"
            (onChange)="onBasicChange('error', $event)">
          </goab-date-picker>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Basic Examples State:</h4>
        <pre>{{ basicState | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Date Range and Constraints</h2>
      <p>Date pickers with minimum and maximum date constraints:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Date Range Examples</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item
          label="Past Dates Only"
          helpText="Select any date before today">
          <goab-date-picker
            name="past-only"
            [max]="today"
            width="20rem"
            (onChange)="onRangeChange('pastOnly', $event)">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item
          label="Future Dates Only"
          helpText="Select any date from today onwards">
          <goab-date-picker
            name="future-only"
            [min]="today"
            width="20rem"
            (onChange)="onRangeChange('futureOnly', $event)">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item
          label="Current Month Only"
          helpText="Select any date within this month">
          <goab-date-picker
            name="current-month"
            [min]="monthStart"
            [max]="monthEnd"
            width="20rem"
            (onChange)="onRangeChange('currentMonth', $event)">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item
          label="Working Days Only"
          helpText="Next 30 working days only">
          <goab-date-picker
            name="working-days"
            [min]="today"
            [max]="workingDaysEnd"
            width="20rem"
            (onChange)="onRangeChange('workingDays', $event)">
          </goab-date-picker>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Range Examples State:</h4>
        <pre>{{ rangeState | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Reactive Forms Examples</h2>
      <p>Using date pickers with Angular reactive forms:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic Reactive Form</h3>
      <form [formGroup]="basicReactiveForm">
        <goab-block direction="column" gap="l">
          <goab-form-item label="Birth Date">
            <goab-date-picker
              name="birthDate"
              formControlName="birthDate"
              [max]="today"
              width="20rem">
            </goab-date-picker>
          </goab-form-item>

          <goab-form-item label="Start Date">
            <goab-date-picker
              name="startDate"
              formControlName="startDate"
              [min]="today"
              width="20rem">
            </goab-date-picker>
          </goab-form-item>

          <goab-form-item label="End Date">
            <goab-date-picker
              name="endDate"
              formControlName="endDate"
              [min]="getMinEndDate()"
              width="20rem">
            </goab-date-picker>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onReactiveFormSubmit()">
            Submit Dates
          </goab-button>
          <goab-button type="secondary" (onClick)="resetReactiveForm()">
            Reset Form
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Reactive Form Values:</h4>
          <pre>{{ basicReactiveForm.value | json }}</pre>
          <p><strong>Form Valid:</strong> {{ basicReactiveForm.valid }}</p>
        </goab-card>
      </form>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Date Picker with Validation</h3>
      <form [formGroup]="validationForm">
        <goab-block direction="column" gap="l">
          <goab-form-item
            label="Event Date"
            [error]="getFieldError('eventDate')"
            helpText="Select a date for your event (must be in the future)">
            <goab-date-picker
              name="eventDate"
              formControlName="eventDate"
              [min]="today"
              [error]="isFieldInvalid('eventDate')"
              width="20rem">
            </goab-date-picker>
          </goab-form-item>

          <goab-form-item
            label="Registration Deadline"
            [error]="getFieldError('deadline')"
            helpText="Must be at least 7 days before event date">
            <goab-date-picker
              name="deadline"
              formControlName="deadline"
              [min]="today"
              [max]="getMaxDeadlineDate()"
              [error]="isFieldInvalid('deadline')"
              width="20rem">
            </goab-date-picker>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button
            type="primary"
            (onClick)="onValidationFormSubmit()"
            [disabled]="validationForm.invalid">
            Create Event
          </goab-button>
          <goab-button type="secondary" (onClick)="resetValidationForm()">
            Clear
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Validation Status:</h4>
          <p><strong>Event Date Valid:</strong> {{ validationForm.get('eventDate')?.valid }}</p>
          <p><strong>Deadline Valid:</strong> {{ validationForm.get('deadline')?.valid }}</p>
          <p><strong>Form Valid:</strong> {{ validationForm.valid }}</p>
          <pre>{{ validationForm.value | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Template-Driven Forms Examples</h2>
      <p>Using date pickers with Angular template-driven forms:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic Template-Driven Form</h3>
      <form #templateForm="ngForm">
        <goab-block direction="column" gap="l">
          <goab-form-item label="Appointment Date">
            <goab-date-picker
              name="appointmentDate"
              [(ngModel)]="templateData.appointmentDate"
              [min]="today"
              width="20rem"
              (onChange)="onTemplateChange('appointmentDate', $event)">
            </goab-date-picker>
          </goab-form-item>

          <goab-form-item label="Follow-up Date">
            <goab-date-picker
              name="followUpDate"
              [(ngModel)]="templateData.followUpDate"
              [min]="getMinFollowUpDate()"
              width="20rem"
              (onChange)="onTemplateChange('followUpDate', $event)">
            </goab-date-picker>
          </goab-form-item>

          <goab-form-item label="Reminder Date">
            <goab-date-picker
              name="reminderDate"
              [(ngModel)]="templateData.reminderDate"
              width="20rem"
              (onChange)="onTemplateChange('reminderDate', $event)">
            </goab-date-picker>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onTemplateFormSubmit()">
            Schedule Appointment
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
        <goab-block direction="column" gap="l">
          <goab-form-item
            label="Project Start Date"
            [error]="startDateField.invalid && startDateField.touched ? 'Start date is required' : undefined">
            <goab-date-picker
              name="projectStartDate"
              [(ngModel)]="templateValidationData.projectStartDate"
              [min]="today"
              width="20rem"
              required
              #startDateField="ngModel"
              [error]="startDateField.invalid && startDateField.touched"
              (onChange)="onTemplateValidationChange('projectStartDate', $event)">
            </goab-date-picker>
          </goab-form-item>

          <goab-form-item
            label="Project End Date"
            [error]="endDateField.invalid && endDateField.touched ? 'End date is required' : undefined">
            <goab-date-picker
              name="projectEndDate"
              [(ngModel)]="templateValidationData.projectEndDate"
              [min]="getMinProjectEndDate()"
              width="20rem"
              required
              #endDateField="ngModel"
              [error]="endDateField.invalid && endDateField.touched"
              (onChange)="onTemplateValidationChange('projectEndDate', $event)">
            </goab-date-picker>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button
            type="primary"
            (onClick)="onTemplateValidationSubmit()"
            [disabled]="!validationTemplateForm.valid">
            Create Project
          </goab-button>
          <goab-button type="secondary" (onClick)="resetTemplateValidationForm()">
            Reset
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Template Validation State:</h4>
          <p><strong>Start Date Valid:</strong> {{ startDateField.valid }}</p>
          <p><strong>End Date Valid:</strong> {{ endDateField.valid }}</p>
          <p><strong>Form Valid:</strong> {{ validationTemplateForm.valid }}</p>
          <pre>{{ templateValidationData | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Advanced Examples</h2>
      <p>More complex date picker scenarios and patterns:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Date Range Picker</h3>
      <p>Select a date range for reporting or filtering:</p>

      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Report Start Date">
          <goab-date-picker
            name="report-start"
            [(ngModel)]="rangeData.startDate"
            [max]="rangeData.endDate || maxReportDate"
            width="20rem"
            (onChange)="onRangeStartChange($event)">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item label="Report End Date">
          <goab-date-picker
            name="report-end"
            [(ngModel)]="rangeData.endDate"
            [min]="rangeData.startDate || today"
            [max]="maxReportDate"
            width="20rem"
            (onChange)="onRangeEndChange($event)">
          </goab-date-picker>
        </goab-form-item>
      </goab-block>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="generateReport()" [disabled]="!isValidDateRange()">
          Generate Report
        </goab-button>
        <goab-button type="tertiary" (onClick)="setLastWeek()">
          Last Week
        </goab-button>
        <goab-button type="tertiary" (onClick)="setLastMonth()">
          Last Month
        </goab-button>
        <goab-button type="tertiary" (onClick)="setThisYear()">
          This Year
        </goab-button>
      </goab-button-group>

      <goab-card>
        <h4>Date Range:</h4>
        <p><strong>Start:</strong> {{ rangeData.startDate | date:'fullDate' }}</p>
        <p><strong>End:</strong> {{ rangeData.endDate | date:'fullDate' }}</p>
        <p><strong>Valid Range:</strong> {{ isValidDateRange() }}</p>
        <p><strong>Days Selected:</strong> {{ getDaysBetween() }}</p>
      </goab-card>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Interactive Examples</h3>
      <p>Test date picker behavior and state management:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="setToday()">
          Set Today
        </goab-button>
        <goab-button type="secondary" (onClick)="setYesterday()">
          Set Yesterday
        </goab-button>
        <goab-button type="tertiary" (onClick)="setNextWeek()">
          Set Next Week
        </goab-button>
        <goab-button type="tertiary" (onClick)="clearDates()">
          Clear All
        </goab-button>
        <goab-button type="tertiary" (onClick)="randomizeDates()">
          Randomize
        </goab-button>
      </goab-button-group>

      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Interactive Date 1">
          <goab-date-picker
            name="interactive-1"
            [(ngModel)]="interactiveData.date1"
            width="20rem"
            (onChange)="onInteractiveChange('date1', $event)">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item label="Interactive Date 2">
          <goab-date-picker
            name="interactive-2"
            [(ngModel)]="interactiveData.date2"
            width="20rem"
            (onChange)="onInteractiveChange('date2', $event)">
          </goab-date-picker>
        </goab-form-item>

        <goab-form-item label="Interactive Date 3">
          <goab-date-picker
            name="interactive-3"
            [(ngModel)]="interactiveData.date3"
            width="20rem"
            (onChange)="onInteractiveChange('date3', $event)">
          </goab-date-picker>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Interactive State:</h4>
        <pre>{{ interactiveData | json }}</pre>
        <p><strong>Dates Set:</strong> {{ getSetDatesCount() }} / 3</p>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Real-world Use Cases</h2>
      <p>Common patterns for date picker usage:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Booking System</h3>
      <form [formGroup]="bookingForm">
        <goab-block direction="column" gap="l">
          <goab-form-item
            label="Check-in Date"
            [error]="getFieldError('checkIn')"
            helpText="Select your arrival date">
            <goab-date-picker
              name="checkIn"
              formControlName="checkIn"
              [min]="today"
              [error]="isFieldInvalid('checkIn')"
              width="20rem">
            </goab-date-picker>
          </goab-form-item>

          <goab-form-item
            label="Check-out Date"
            [error]="getFieldError('checkOut')"
            helpText="Select your departure date">
            <goab-date-picker
              name="checkOut"
              formControlName="checkOut"
              [min]="getMinCheckOutDate()"
              [error]="isFieldInvalid('checkOut')"
              width="20rem">
            </goab-date-picker>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button
            type="primary"
            (onClick)="onBookingSubmit()"
            [disabled]="bookingForm.invalid">
            Book Now
          </goab-button>
          <goab-button type="secondary" (onClick)="resetBookingForm()">
            Clear Dates
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Booking Details:</h4>
          <p><strong>Check-in:</strong> {{ bookingForm.get('checkIn')?.value | date:'fullDate' }}</p>
          <p><strong>Check-out:</strong> {{ bookingForm.get('checkOut')?.value | date:'fullDate' }}</p>
          <p><strong>Number of Nights:</strong> {{ getNights() }}</p>
          <p><strong>Form Valid:</strong> {{ bookingForm.valid }}</p>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Reactive Forms:</strong> Use <code>formControlName</code> for reactive forms with <code>FormControl</code></li>
        <li><strong>Template Forms:</strong> Use <code>[(ngModel)]</code> and <code>(onChange)</code> for template-driven forms</li>
        <li><strong>Validation:</strong> Apply validators to <code>FormControl</code> or use <code>required</code> attribute in templates</li>
        <li><strong>Date Constraints:</strong> Use <code>[min]</code> and <code>[max]</code> to restrict selectable dates</li>
        <li><strong>Error States:</strong> Set <code>[error]="true"</code> to show error styling</li>
        <li><strong>Disabled State:</strong> Use <code>[disabled]="true"</code> to disable interaction</li>
        <li><strong>Width:</strong> Set appropriate width using the <code>width</code> property</li>
        <li><strong>Event Handling:</strong> Listen to <code>(onChange)</code> events for custom logic</li>
        <li><strong>Date Format:</strong> Component accepts Date objects or ISO date strings</li>
        <li><strong>Accessibility:</strong> Component includes proper ARIA attributes and keyboard navigation</li>
      </ul>
    </goab-container>
  `,
})
export class DatePickerExamplesComponent {
  // Date references
  today = new Date();
  initialDate = new Date(2025, 1, 15); // February 15, 2025
  monthStart = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
  monthEnd = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0);
  workingDaysEnd = this.addWorkingDays(this.today, 30);
  maxReportDate = new Date();

  // Reactive form instances
  basicReactiveForm: FormGroup;
  validationForm: FormGroup;
  bookingForm: FormGroup;

  // Basic state tracking
  basicState = {
    default: null,
    withValue: this.initialDate,
    error: null
  };

  rangeState = {
    pastOnly: null,
    futureOnly: null,
    currentMonth: null,
    workingDays: null
  };

  // Template-driven form data
  templateData = {
    appointmentDate: null as Date | null,
    followUpDate: null as Date | null,
    reminderDate: null as Date | null
  };

  templateValidationData = {
    projectStartDate: null as Date | null,
    projectEndDate: null as Date | null
  };

  // Advanced examples data
  rangeData = {
    startDate: null as Date | null,
    endDate: null as Date | null
  };

  interactiveData = {
    date1: null as Date | null,
    date2: new Date() as Date | null,
    date3: null as Date | null
  };

  constructor(private fb: FormBuilder) {
    // Initialize reactive forms
    this.basicReactiveForm = this.fb.group({
      birthDate: [null],
      startDate: [null],
      endDate: [null]
    });

    this.validationForm = this.fb.group({
      eventDate: [null, Validators.required],
      deadline: [null, Validators.required]
    });

    this.bookingForm = this.fb.group({
      checkIn: [null, Validators.required],
      checkOut: [null, Validators.required]
    });
  }

  // Basic examples methods
  onBasicChange(type: string, event: any) {
    console.log(`Basic ${type} changed:`, event);
    (this.basicState as any)[type] = event.value;
  }

  onRangeChange(type: string, event: any) {
    console.log(`Range ${type} changed:`, event);
    (this.rangeState as any)[type] = event.value;
  }

  // Reactive form methods
  onReactiveFormSubmit() {
    if (this.basicReactiveForm.valid) {
      console.log('Basic Reactive Form Values:', this.basicReactiveForm.value);
    }
  }

  resetReactiveForm() {
    this.basicReactiveForm.reset({
      birthDate: null,
      startDate: null,
      endDate: null
    });
  }

  getMinEndDate(): Date | undefined {
    const startDate = this.basicReactiveForm.get('startDate')?.value;
    return startDate ? new Date(startDate.getTime() + 24 * 60 * 60 * 1000) : this.today;
  }

  // Validation form methods
  onValidationFormSubmit() {
    if (this.validationForm.valid) {
      console.log('Validation Form Values:', this.validationForm.value);
    } else {
      this.markFormGroupTouched(this.validationForm);
    }
  }

  resetValidationForm() {
    this.validationForm.reset({
      eventDate: null,
      deadline: null
    });
  }

  getMaxDeadlineDate(): Date | undefined {
    const eventDate = this.validationForm.get('eventDate')?.value;
    if (eventDate) {
      const maxDate = new Date(eventDate);
      maxDate.setDate(maxDate.getDate() - 7);
      return maxDate;
    }
    return undefined;
  }

  // Template-driven form methods
  onTemplateChange(field: string, event: any) {
    console.log(`Template ${field} changed:`, event);
    (this.templateData as any)[field] = event.value;
  }

  onTemplateFormSubmit() {
    console.log('Template Form Data:', this.templateData);
  }

  resetTemplateForm() {
    this.templateData = {
      appointmentDate: null,
      followUpDate: null,
      reminderDate: null
    };
  }

  getMinFollowUpDate(): Date | undefined {
    return this.templateData.appointmentDate ?
      new Date(this.templateData.appointmentDate.getTime() + 24 * 60 * 60 * 1000) :
      this.today;
  }

  onTemplateValidationChange(field: string, event: any) {
    console.log(`Template validation ${field} changed:`, event);
    (this.templateValidationData as any)[field] = event.value;
  }

  onTemplateValidationSubmit() {
    console.log('Template Validation Data:', this.templateValidationData);
  }

  resetTemplateValidationForm() {
    this.templateValidationData = {
      projectStartDate: null,
      projectEndDate: null
    };
  }

  getMinProjectEndDate(): Date | undefined {
    return this.templateValidationData.projectStartDate ?
      new Date(this.templateValidationData.projectStartDate.getTime() + 24 * 60 * 60 * 1000) :
      this.today;
  }

  // Booking form methods
  onBookingSubmit() {
    if (this.bookingForm.valid) {
      console.log('Booking Form Values:', this.bookingForm.value);
    } else {
      this.markFormGroupTouched(this.bookingForm);
    }
  }

  resetBookingForm() {
    this.bookingForm.reset({
      checkIn: null,
      checkOut: null
    });
  }

  getMinCheckOutDate(): Date | undefined {
    const checkIn = this.bookingForm.get('checkIn')?.value;
    return checkIn ? new Date(checkIn.getTime() + 24 * 60 * 60 * 1000) : this.today;
  }

  getNights(): number {
    const checkIn = this.bookingForm.get('checkIn')?.value;
    const checkOut = this.bookingForm.get('checkOut')?.value;
    if (checkIn && checkOut) {
      const diffTime = checkOut.getTime() - checkIn.getTime();
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  }

  // Range picker methods
  onRangeStartChange(event: any) {
    console.log('Range start changed:', event);
    this.rangeData.startDate = event.value as Date;
    // Clear end date if it's before the new start date
    if (this.rangeData.endDate && this.rangeData.startDate &&
        this.rangeData.endDate < this.rangeData.startDate) {
      this.rangeData.endDate = null;
    }
  }

  onRangeEndChange(event: any) {
    console.log('Range end changed:', event);
    this.rangeData.endDate = event.value as Date;
  }

  generateReport() {
    if (this.isValidDateRange()) {
      console.log('Generating report for:', this.rangeData);
    }
  }

  isValidDateRange(): boolean {
    return !!(this.rangeData.startDate && this.rangeData.endDate &&
              this.rangeData.startDate <= this.rangeData.endDate);
  }

  getDaysBetween(): number {
    if (this.isValidDateRange()) {
      const diffTime = this.rangeData.endDate!.getTime() - this.rangeData.startDate!.getTime();
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    }
    return 0;
  }

  setLastWeek() {
    const end = new Date();
    const start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000);
    this.rangeData = { startDate: start, endDate: end };
  }

  setLastMonth() {
    const end = new Date();
    const start = new Date(end.getFullYear(), end.getMonth() - 1, end.getDate());
    this.rangeData = { startDate: start, endDate: end };
  }

  setThisYear() {
    const start = new Date(this.today.getFullYear(), 0, 1);
    const end = new Date(this.today.getFullYear(), 11, 31);
    this.rangeData = { startDate: start, endDate: end };
  }

  // Interactive examples methods
  onInteractiveChange(field: string, event: any) {
    console.log(`Interactive ${field} changed:`, event);
    (this.interactiveData as any)[field] = event.value;
  }

  setToday() {
    const today = new Date();
    this.interactiveData = {
      date1: today,
      date2: today,
      date3: today
    };
  }

  setYesterday() {
    const yesterday = new Date(this.today.getTime() - 24 * 60 * 60 * 1000);
    this.interactiveData = {
      date1: yesterday,
      date2: yesterday,
      date3: yesterday
    };
  }

  setNextWeek() {
    const nextWeek = new Date(this.today.getTime() + 7 * 24 * 60 * 60 * 1000);
    this.interactiveData = {
      date1: nextWeek,
      date2: nextWeek,
      date3: nextWeek
    };
  }

  clearDates() {
    this.interactiveData = {
      date1: null,
      date2: null,
      date3: null
    };
  }

  randomizeDates() {
    const getRandomDate = () => {
      const start = new Date(2025, 0, 1);
      const end = new Date(2025, 11, 31);
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    this.interactiveData = {
      date1: Math.random() > 0.3 ? getRandomDate() : null,
      date2: Math.random() > 0.3 ? getRandomDate() : null,
      date3: Math.random() > 0.3 ? getRandomDate() : null
    };
  }

  getSetDatesCount(): number {
    return Object.values(this.interactiveData).filter(date => date !== null).length;
  }

  // Utility methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.validationForm.get(fieldName) || this.bookingForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string | undefined {
    const field = this.validationForm.get(fieldName) || this.bookingForm.get(fieldName);
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

  private addWorkingDays(startDate: Date, days: number): Date {
    const result = new Date(startDate);
    let workingDaysAdded = 0;

    while (workingDaysAdded < days) {
      result.setDate(result.getDate() + 1);
      // Skip weekends (Saturday = 6, Sunday = 0)
      if (result.getDay() !== 0 && result.getDay() !== 6) {
        workingDaysAdded++;
      }
    }

    return result;
  }
}

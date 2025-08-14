import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  GoabContainer,
  GoabDropdown,
  GoabDropdownItem,
  GoabSpacer,
  GoabButton,
  GoabButtonGroup,
  GoabText,
  GoabBlock,
  GoabCard,
  GoabFormItem,
  GoabInput
} from '@abgov/angular-components';
import { GoabDropdownOnChangeDetail } from '@abgov/ui-components-common';
import { Countries, CountrySubdivisions } from './countries.data';

@Component({
  selector: 'app-dropdown-examples',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoabContainer,
    GoabDropdown,
    GoabDropdownItem,
    GoabSpacer,
    GoabButton,
    GoabButtonGroup,
    GoabText,
    GoabBlock,
    GoabCard,
    GoabFormItem,
    GoabInput
  ],
  template: `
    <goab-container>
      <h1>Dropdown Component Examples</h1>
      <p>Allow users to select one option from a list of predefined choices.</p>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Basic Dropdown Examples</h2>
      <p>Simple dropdown examples with different states:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic States</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Default Dropdown">
          <goab-dropdown
            name="basic-default"
            placeholder="Select an option"
            width="20rem"
            (onChange)="onBasicChange('default', $event)">
            <goab-dropdown-item value="option1" label="Option 1"></goab-dropdown-item>
            <goab-dropdown-item value="option2" label="Option 2"></goab-dropdown-item>
            <goab-dropdown-item value="option3" label="Option 3"></goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>

        <goab-form-item label="Dropdown with Initial Value">
          <goab-dropdown
            name="basic-with-value"
            [value]="'option2'"
            width="20rem"
            (onChange)="onBasicChange('withValue', $event)">
            <goab-dropdown-item value="option1" label="Option 1"></goab-dropdown-item>
            <goab-dropdown-item value="option2" label="Option 2"></goab-dropdown-item>
            <goab-dropdown-item value="option3" label="Option 3"></goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>

        <goab-form-item label="Disabled Dropdown">
          <goab-dropdown
            name="basic-disabled"
            [value]="'option1'"
            [disabled]="true"
            width="20rem">
            <goab-dropdown-item value="option1" label="Option 1"></goab-dropdown-item>
            <goab-dropdown-item value="option2" label="Option 2"></goab-dropdown-item>
            <goab-dropdown-item value="option3" label="Option 3"></goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>

        <goab-form-item label="Dropdown with Error" error="Please select a valid option">
          <goab-dropdown
            name="basic-error"
            [error]="true"
            width="20rem"
            (onChange)="onBasicChange('error', $event)">
            <goab-dropdown-item value="option1" label="Option 1"></goab-dropdown-item>
            <goab-dropdown-item value="option2" label="Option 2"></goab-dropdown-item>
            <goab-dropdown-item value="option3" label="Option 3"></goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Basic Examples State:</h4>
        <pre>{{ basicState | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Reactive Forms Examples</h2>
      <p>Using dropdowns with Angular reactive forms:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic Reactive Form</h3>
      <form [formGroup]="basicReactiveForm">
        <goab-block direction="column" gap="l">
          <goab-form-item label="Favorite Color">
            <goab-dropdown
              name="favoriteColor"
              formControlName="favoriteColor"
              placeholder="Choose a color"
              width="20rem">
              <goab-dropdown-item value="red" label="Red"></goab-dropdown-item>
              <goab-dropdown-item value="blue" label="Blue"></goab-dropdown-item>
              <goab-dropdown-item value="green" label="Green"></goab-dropdown-item>
              <goab-dropdown-item value="yellow" label="Yellow"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item label="Priority Level">
            <goab-dropdown
              name="priority"
              formControlName="priority"
              placeholder="Select priority"
              width="20rem">
              <goab-dropdown-item value="low" label="Low"></goab-dropdown-item>
              <goab-dropdown-item value="medium" label="Medium"></goab-dropdown-item>
              <goab-dropdown-item value="high" label="High"></goab-dropdown-item>
              <goab-dropdown-item value="urgent" label="Urgent"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item label="Status">
            <goab-dropdown
              name="status"
              formControlName="status"
              placeholder="Select status"
              width="20rem">
              <goab-dropdown-item value="draft" label="Draft"></goab-dropdown-item>
              <goab-dropdown-item value="pending" label="Pending Review"></goab-dropdown-item>
              <goab-dropdown-item value="approved" label="Approved"></goab-dropdown-item>
              <goab-dropdown-item value="rejected" label="Rejected"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onReactiveFormSubmit()">
            Submit Form
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

      <h3>Dropdown with Validation</h3>
      <form [formGroup]="validationForm">
        <goab-block direction="column" gap="l">
          <goab-form-item 
            label="Country" 
            [error]="getFieldError('country')"
            helpText="Select your country">
            <goab-dropdown
              name="country"
              formControlName="country"
              placeholder="Choose a country"
              [error]="isFieldInvalid('country')"
              width="20rem">
              <goab-dropdown-item value="ca" label="Canada"></goab-dropdown-item>
              <goab-dropdown-item value="us" label="United States"></goab-dropdown-item>
              <goab-dropdown-item value="uk" label="United Kingdom"></goab-dropdown-item>
              <goab-dropdown-item value="fr" label="France"></goab-dropdown-item>
              <goab-dropdown-item value="de" label="Germany"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item 
            label="Province/State" 
            [error]="getFieldError('region')"
            helpText="Select your province or state">
            <goab-dropdown
              name="region"
              formControlName="region"
              placeholder="Choose a region"
              [error]="isFieldInvalid('region')"
              width="20rem">
              <goab-dropdown-item value="ab" label="Alberta"></goab-dropdown-item>
              <goab-dropdown-item value="bc" label="British Columbia"></goab-dropdown-item>
              <goab-dropdown-item value="on" label="Ontario"></goab-dropdown-item>
              <goab-dropdown-item value="qc" label="Quebec"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onValidationFormSubmit()"
            [disabled]="validationForm.invalid">
            Save Location
          </goab-button>
          <goab-button type="secondary" (onClick)="resetValidationForm()">
            Clear
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Validation Status:</h4>
          <p><strong>Country Valid:</strong> {{ validationForm.get('country')?.valid }}</p>
          <p><strong>Region Valid:</strong> {{ validationForm.get('region')?.valid }}</p>
          <p><strong>Form Valid:</strong> {{ validationForm.valid }}</p>
          <pre>{{ validationForm.value | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Template-Driven Forms Examples</h2>
      <p>Using dropdowns with Angular template-driven forms:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Basic Template-Driven Form</h3>
      <form #templateForm="ngForm">
        <goab-block direction="column" gap="l">
          <goab-form-item label="Preferred Language">
            <goab-dropdown
              name="language"
              [(ngModel)]="templateData.language"
              placeholder="Select a language"
              width="20rem"
              (onChange)="onTemplateChange('language', $event)">
              <goab-dropdown-item value="en" label="English"></goab-dropdown-item>
              <goab-dropdown-item value="fr" label="French"></goab-dropdown-item>
              <goab-dropdown-item value="es" label="Spanish"></goab-dropdown-item>
              <goab-dropdown-item value="de" label="German"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item label="Time Zone">
            <goab-dropdown
              name="timezone"
              [(ngModel)]="templateData.timezone"
              placeholder="Select timezone"
              width="20rem"
              (onChange)="onTemplateChange('timezone', $event)">
              <goab-dropdown-item value="mst" label="Mountain Standard Time (MST)"></goab-dropdown-item>
              <goab-dropdown-item value="pst" label="Pacific Standard Time (PST)"></goab-dropdown-item>
              <goab-dropdown-item value="cst" label="Central Standard Time (CST)"></goab-dropdown-item>
              <goab-dropdown-item value="est" label="Eastern Standard Time (EST)"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item label="Notification Frequency">
            <goab-dropdown
              name="frequency"
              [(ngModel)]="templateData.frequency"
              placeholder="Select frequency"
              width="20rem"
              (onChange)="onTemplateChange('frequency', $event)">
              <goab-dropdown-item value="never" label="Never"></goab-dropdown-item>
              <goab-dropdown-item value="daily" label="Daily"></goab-dropdown-item>
              <goab-dropdown-item value="weekly" label="Weekly"></goab-dropdown-item>
              <goab-dropdown-item value="monthly" label="Monthly"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="onTemplateFormSubmit()">
            Save Preferences
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
            label="Department" 
            [error]="departmentField.invalid && departmentField.touched ? 'Department is required' : undefined">
            <goab-dropdown
              name="department"
              [(ngModel)]="templateValidationData.department"
              placeholder="Select department"
              width="20rem"
              required
              #departmentField="ngModel"
              [error]="departmentField.invalid && departmentField.touched"
              (onChange)="onTemplateValidationChange('department', $event)">
              <goab-dropdown-item value="it" label="Information Technology"></goab-dropdown-item>
              <goab-dropdown-item value="hr" label="Human Resources"></goab-dropdown-item>
              <goab-dropdown-item value="finance" label="Finance"></goab-dropdown-item>
              <goab-dropdown-item value="marketing" label="Marketing"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item 
            label="Job Level" 
            [error]="levelField.invalid && levelField.touched ? 'Job level is required' : undefined">
            <goab-dropdown
              name="level"
              [(ngModel)]="templateValidationData.level"
              placeholder="Select job level"
              width="20rem"
              required
              #levelField="ngModel"
              [error]="levelField.invalid && levelField.touched"
              (onChange)="onTemplateValidationChange('level', $event)">
              <goab-dropdown-item value="entry" label="Entry Level"></goab-dropdown-item>
              <goab-dropdown-item value="mid" label="Mid Level"></goab-dropdown-item>
              <goab-dropdown-item value="senior" label="Senior Level"></goab-dropdown-item>
              <goab-dropdown-item value="lead" label="Lead/Manager"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onTemplateValidationSubmit()"
            [disabled]="!validationTemplateForm.valid">
            Submit Application
          </goab-button>
          <goab-button type="secondary" (onClick)="resetTemplateValidationForm()">
            Reset
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Template Validation State:</h4>
          <p><strong>Department Valid:</strong> {{ departmentField.valid }}</p>
          <p><strong>Level Valid:</strong> {{ levelField.valid }}</p>
          <p><strong>Form Valid:</strong> {{ validationTemplateForm.valid }}</p>
          <pre>{{ templateValidationData | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Dynamic Dropdown Examples</h2>
      <p>Dropdowns that can add items dynamically:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Add Items Dynamically</h3>
      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Custom Tags">
          <goab-dropdown
            name="dynamic-tags"
            [(ngModel)]="dynamicData.selectedTag"
            placeholder="Select or add a tag"
            width="20rem"
            (onChange)="onDynamicChange('selectedTag', $event)">
            <goab-dropdown-item 
              *ngFor="let tag of dynamicData.tags" 
              [value]="tag.value" 
              [label]="tag.label">
            </goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>

        <goab-form-item label="New Tag Name">
          <goab-input
            name="newTag"
            [(ngModel)]="dynamicData.newTagName"
            placeholder="Enter new tag name"
            width="20rem">
          </goab-input>
        </goab-form-item>
      </goab-block>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button 
          type="primary" 
          (onClick)="addNewTag()"
          [disabled]="!dynamicData.newTagName || dynamicData.newTagName.trim() === ''">
          Add Tag
        </goab-button>
        <goab-button type="tertiary" (onClick)="clearAllTags()">
          Clear All Tags
        </goab-button>
        <goab-button type="tertiary" (onClick)="resetDefaultTags()">
          Reset to Defaults
        </goab-button>
      </goab-button-group>

      <goab-card>
        <h4>Dynamic Tags State:</h4>
        <p><strong>Selected Tag:</strong> {{ dynamicData.selectedTag }}</p>
        <p><strong>Total Tags:</strong> {{ dynamicData.tags.length }}</p>
        <pre>{{ dynamicData | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Dependent Dropdowns</h3>
      <p>Dropdowns where options change based on previous selections:</p>

      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Country">
          <goab-dropdown
            name="dependent-country"
            [(ngModel)]="dependentData.country"
            placeholder="Select a country"
            width="20rem"
            (onChange)="onCountryChange($event)">
            <goab-dropdown-item 
              *ngFor="let country of countries" 
              [value]="country.code" 
              [label]="country.name">
            </goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>

        <goab-form-item label="Province/State">
          <goab-dropdown
            name="dependent-region"
            [(ngModel)]="dependentData.region"
            placeholder="Select a region"
            [disabled]="!dependentData.country"
            width="20rem"
            (onChange)="onRegionChange($event)">
            <goab-dropdown-item 
              *ngFor="let region of availableRegions" 
              [value]="region.code" 
              [label]="region.name">
            </goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>

        <goab-form-item label="City">
          <goab-dropdown
            name="dependent-city"
            [(ngModel)]="dependentData.city"
            placeholder="Select a city"
            [disabled]="!dependentData.region"
            width="20rem"
            (onChange)="onCityChange($event)">
            <goab-dropdown-item 
              *ngFor="let city of availableCities" 
              [value]="city.code" 
              [label]="city.name">
            </goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>
      </goab-block>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="onDependentFormSubmit()">
          Save Location
        </goab-button>
        <goab-button type="secondary" (onClick)="resetDependentForm()">
          Clear Selection
        </goab-button>
      </goab-button-group>

      <goab-card>
        <h4>Dependent Dropdowns State:</h4>
        <p><strong>Country:</strong> {{ getCountryName(dependentData.country) }}</p>
        <p><strong>Region:</strong> {{ getRegionName(dependentData.region) }}</p>
        <p><strong>City:</strong> {{ getCityName(dependentData.city) }}</p>
        <pre>{{ dependentData | json }}</pre>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Advanced Examples</h2>
      <p>More complex dropdown scenarios and patterns:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Multi-Select Alternative</h3>
      <p>Multiple single-select dropdowns for complex filtering:</p>

      <form [formGroup]="advancedForm">
        <goab-block direction="column" gap="l">
          <goab-form-item label="Product Category">
            <goab-dropdown
              name="category"
              formControlName="category"
              placeholder="Select category"
              width="20rem">
              <goab-dropdown-item value="electronics" label="Electronics"></goab-dropdown-item>
              <goab-dropdown-item value="clothing" label="Clothing"></goab-dropdown-item>
              <goab-dropdown-item value="books" label="Books"></goab-dropdown-item>
              <goab-dropdown-item value="home" label="Home & Garden"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item label="Price Range">
            <goab-dropdown
              name="priceRange"
              formControlName="priceRange"
              placeholder="Select price range"
              width="20rem">
              <goab-dropdown-item value="0-25" label="$0 - $25"></goab-dropdown-item>
              <goab-dropdown-item value="25-50" label="$25 - $50"></goab-dropdown-item>
              <goab-dropdown-item value="50-100" label="$50 - $100"></goab-dropdown-item>
              <goab-dropdown-item value="100+" label="$100+"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item label="Sort By">
            <goab-dropdown
              name="sortBy"
              formControlName="sortBy"
              placeholder="Sort by"
              width="20rem">
              <goab-dropdown-item value="name" label="Name (A-Z)"></goab-dropdown-item>
              <goab-dropdown-item value="price-low" label="Price (Low to High)"></goab-dropdown-item>
              <goab-dropdown-item value="price-high" label="Price (High to Low)"></goab-dropdown-item>
              <goab-dropdown-item value="rating" label="Customer Rating"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button type="primary" (onClick)="applyFilters()">
            Apply Filters
          </goab-button>
          <goab-button type="secondary" (onClick)="clearFilters()">
            Clear Filters
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Filter Settings:</h4>
          <p><strong>Results Found:</strong> {{ getFilteredResultsCount() }}</p>
          <pre>{{ advancedForm.value | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>Interactive Examples</h3>
      <p>Test dropdown behavior and state management:</p>

      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button type="primary" (onClick)="selectRandomOptions()">
          Random Selection
        </goab-button>
        <goab-button type="secondary" (onClick)="selectFirstOptions()">
          Select First Options
        </goab-button>
        <goab-button type="tertiary" (onClick)="selectLastOptions()">
          Select Last Options
        </goab-button>
        <goab-button type="tertiary" (onClick)="clearAllSelections()">
          Clear All
        </goab-button>
      </goab-button-group>

      <goab-block direction="column" gap="l" mb="l">
        <goab-form-item label="Interactive Dropdown 1">
          <goab-dropdown
            name="interactive-1"
            [(ngModel)]="interactiveData.option1"
            placeholder="Select option 1"
            width="20rem"
            (onChange)="onInteractiveChange('option1', $event)">
            <goab-dropdown-item value="alpha" label="Alpha"></goab-dropdown-item>
            <goab-dropdown-item value="beta" label="Beta"></goab-dropdown-item>
            <goab-dropdown-item value="gamma" label="Gamma"></goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>

        <goab-form-item label="Interactive Dropdown 2">
          <goab-dropdown
            name="interactive-2"
            [(ngModel)]="interactiveData.option2"
            placeholder="Select option 2"
            width="20rem"
            (onChange)="onInteractiveChange('option2', $event)">
            <goab-dropdown-item value="small" label="Small"></goab-dropdown-item>
            <goab-dropdown-item value="medium" label="Medium"></goab-dropdown-item>
            <goab-dropdown-item value="large" label="Large"></goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>

        <goab-form-item label="Interactive Dropdown 3">
          <goab-dropdown
            name="interactive-3"
            [(ngModel)]="interactiveData.option3"
            placeholder="Select option 3"
            width="20rem"
            (onChange)="onInteractiveChange('option3', $event)">
            <goab-dropdown-item value="morning" label="Morning (9 AM - 12 PM)"></goab-dropdown-item>
            <goab-dropdown-item value="afternoon" label="Afternoon (12 PM - 5 PM)"></goab-dropdown-item>
            <goab-dropdown-item value="evening" label="Evening (5 PM - 9 PM)"></goab-dropdown-item>
          </goab-dropdown>
        </goab-form-item>
      </goab-block>

      <goab-card>
        <h4>Interactive State:</h4>
        <pre>{{ interactiveData | json }}</pre>
        <p><strong>Options Selected:</strong> {{ getSelectedOptionsCount() }} / 3</p>
      </goab-card>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Real-world Use Cases</h2>
      <p>Common patterns for dropdown usage:</p>

      <goab-spacer vSpacing="l"></goab-spacer>

      <h3>User Profile Form</h3>
      <form [formGroup]="profileForm">
        <goab-block direction="column" gap="l">
          <goab-form-item 
            label="Title" 
            [error]="getFieldError('title')"
            helpText="Select your title">
            <goab-dropdown
              name="title"
              formControlName="title"
              placeholder="Select title"
              [error]="isFieldInvalid('title')"
              width="20rem">
              <goab-dropdown-item value="mr" label="Mr."></goab-dropdown-item>
              <goab-dropdown-item value="ms" label="Ms."></goab-dropdown-item>
              <goab-dropdown-item value="mrs" label="Mrs."></goab-dropdown-item>
              <goab-dropdown-item value="dr" label="Dr."></goab-dropdown-item>
              <goab-dropdown-item value="prof" label="Prof."></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item 
            label="Age Group" 
            [error]="getFieldError('ageGroup')"
            helpText="Select your age group">
            <goab-dropdown
              name="ageGroup"
              formControlName="ageGroup"
              placeholder="Select age group"
              [error]="isFieldInvalid('ageGroup')"
              width="20rem">
              <goab-dropdown-item value="18-24" label="18-24 years"></goab-dropdown-item>
              <goab-dropdown-item value="25-34" label="25-34 years"></goab-dropdown-item>
              <goab-dropdown-item value="35-44" label="35-44 years"></goab-dropdown-item>
              <goab-dropdown-item value="45-54" label="45-54 years"></goab-dropdown-item>
              <goab-dropdown-item value="55-64" label="55-64 years"></goab-dropdown-item>
              <goab-dropdown-item value="65+" label="65+ years"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>

          <goab-form-item 
            label="Occupation" 
            [error]="getFieldError('occupation')"
            helpText="Select your occupation">
            <goab-dropdown
              name="occupation"
              formControlName="occupation"
              placeholder="Select occupation"
              [error]="isFieldInvalid('occupation')"
              width="20rem">
              <goab-dropdown-item value="student" label="Student"></goab-dropdown-item>
              <goab-dropdown-item value="employed" label="Employed"></goab-dropdown-item>
              <goab-dropdown-item value="self-employed" label="Self-Employed"></goab-dropdown-item>
              <goab-dropdown-item value="unemployed" label="Unemployed"></goab-dropdown-item>
              <goab-dropdown-item value="retired" label="Retired"></goab-dropdown-item>
            </goab-dropdown>
          </goab-form-item>
        </goab-block>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-button-group alignment="start" gap="compact">
          <goab-button 
            type="primary" 
            (onClick)="onProfileSubmit()"
            [disabled]="profileForm.invalid">
            Save Profile
          </goab-button>
          <goab-button type="secondary" (onClick)="resetProfileForm()">
            Reset Profile
          </goab-button>
        </goab-button-group>

        <goab-spacer vSpacing="m"></goab-spacer>

        <goab-card>
          <h4>Profile Information:</h4>
          <p><strong>Title Valid:</strong> {{ profileForm.get('title')?.valid }}</p>
          <p><strong>Age Group Valid:</strong> {{ profileForm.get('ageGroup')?.valid }}</p>
          <p><strong>Occupation Valid:</strong> {{ profileForm.get('occupation')?.valid }}</p>
          <p><strong>Form Valid:</strong> {{ profileForm.valid }}</p>
          <pre>{{ profileForm.value | json }}</pre>
        </goab-card>
      </form>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Reactive Forms:</strong> Use <code>formControlName</code> for reactive forms with <code>FormControl</code></li>
        <li><strong>Template Forms:</strong> Use <code>[(ngModel)]</code> and <code>(onChange)</code> for template-driven forms</li>
        <li><strong>Validation:</strong> Apply validators to <code>FormControl</code> or use <code>required</code> attribute in templates</li>
        <li><strong>Dynamic Options:</strong> Use <code>*ngFor</code> to generate dropdown items from arrays</li>
        <li><strong>Error States:</strong> Set <code>[error]="true"</code> to show error styling</li>
        <li><strong>Disabled State:</strong> Use <code>[disabled]="true"</code> to disable interaction</li>
        <li><strong>Width:</strong> Set appropriate width using the <code>width</code> property</li>
        <li><strong>Event Handling:</strong> Listen to <code>(onChange)</code> events for custom logic</li>
        <li><strong>Placeholder:</strong> Use <code>placeholder</code> to provide guidance text</li>
        <li><strong>Accessibility:</strong> Component includes proper ARIA attributes and keyboard navigation</li>
        <li><strong>Dependent Logic:</strong> Clear child selections when parent selection changes</li>
        <li><strong>Dynamic Items:</strong> Add/remove items programmatically using array manipulation</li>
      </ul>
    </goab-container>
  `,
})
export class DropdownExamplesComponent implements OnInit {
  // Reactive form instances
  basicReactiveForm: FormGroup;
  validationForm: FormGroup;
  advancedForm: FormGroup;
  profileForm: FormGroup;

  // Basic state tracking
  basicState = {
    default: null,
    withValue: 'option2',
    error: null
  };

  // Template-driven form data
  templateData = {
    language: null as string | null,
    timezone: null as string | null,
    frequency: null as string | null
  };

  templateValidationData = {
    department: null as string | null,
    level: null as string | null
  };

  // Dynamic dropdown data
  dynamicData = {
    selectedTag: null as string | null,
    newTagName: '',
    tags: [
      { value: 'important', label: 'Important' },
      { value: 'urgent', label: 'Urgent' },
      { value: 'review', label: 'Review' },
      { value: 'follow-up', label: 'Follow-up' }
    ]
  };

  // Dependent dropdown data
  dependentData = {
    country: null as string | null,
    region: null as string | null,
    city: null as string | null
  };

  // Interactive examples data
  interactiveData = {
    option1: null as string | null,
    option2: 'medium' as string | null,
    option3: null as string | null
  };

  // Data sources
  countries = Countries;
  subdivisions = CountrySubdivisions;
  availableRegions: any[] = [];
  availableCities: any[] = [];

  constructor(private fb: FormBuilder) {
    // Initialize reactive forms
    this.basicReactiveForm = this.fb.group({
      favoriteColor: [null],
      priority: [null],
      status: [null]
    });

    this.validationForm = this.fb.group({
      country: [null, Validators.required],
      region: [null, Validators.required]
    });

    this.advancedForm = this.fb.group({
      category: [null],
      priceRange: [null],
      sortBy: ['name']
    });

    this.profileForm = this.fb.group({
      title: [null, Validators.required],
      ageGroup: [null, Validators.required],
      occupation: [null, Validators.required]
    });
  }

  ngOnInit() {
    // Initialize available regions for the first country
    this.updateAvailableRegions();
  }

  // Basic examples methods
  onBasicChange(type: string, event: GoabDropdownOnChangeDetail) {
    console.log(`Basic ${type} changed:`, event);
    (this.basicState as any)[type] = event.value;
  }

  // Reactive form methods
  onReactiveFormSubmit() {
    if (this.basicReactiveForm.valid) {
      console.log('Basic Reactive Form Values:', this.basicReactiveForm.value);
    }
  }

  resetReactiveForm() {
    this.basicReactiveForm.reset({
      favoriteColor: null,
      priority: null,
      status: null
    });
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
      country: null,
      region: null
    });
  }

  // Template-driven form methods
  onTemplateChange(field: string, event: GoabDropdownOnChangeDetail) {
    console.log(`Template ${field} changed:`, event);
    (this.templateData as any)[field] = event.value;
  }

  onTemplateFormSubmit() {
    console.log('Template Form Data:', this.templateData);
  }

  resetTemplateForm() {
    this.templateData = {
      language: null,
      timezone: null,
      frequency: null
    };
  }

  onTemplateValidationChange(field: string, event: GoabDropdownOnChangeDetail) {
    console.log(`Template validation ${field} changed:`, event);
    (this.templateValidationData as any)[field] = event.value;
  }

  onTemplateValidationSubmit() {
    console.log('Template Validation Data:', this.templateValidationData);
  }

  resetTemplateValidationForm() {
    this.templateValidationData = {
      department: null,
      level: null
    };
  }

  // Dynamic dropdown methods
  onDynamicChange(field: string, event: GoabDropdownOnChangeDetail) {
    console.log(`Dynamic ${field} changed:`, event);
    (this.dynamicData as any)[field] = event.value;
  }

  addNewTag() {
    if (this.dynamicData.newTagName && this.dynamicData.newTagName.trim() !== '') {
      const newTag = {
        value: this.dynamicData.newTagName.toLowerCase().replace(/\s+/g, '-'),
        label: this.dynamicData.newTagName.trim()
      };
      
      // Check if tag already exists
      const exists = this.dynamicData.tags.some(tag => tag.value === newTag.value);
      if (!exists) {
        this.dynamicData.tags.push(newTag);
        this.dynamicData.selectedTag = newTag.value;
      }
      
      this.dynamicData.newTagName = '';
    }
  }

  clearAllTags() {
    this.dynamicData.tags = [];
    this.dynamicData.selectedTag = null;
  }

  resetDefaultTags() {
    this.dynamicData.tags = [
      { value: 'important', label: 'Important' },
      { value: 'urgent', label: 'Urgent' },
      { value: 'review', label: 'Review' },
      { value: 'follow-up', label: 'Follow-up' }
    ];
    this.dynamicData.selectedTag = null;
  }

  // Dependent dropdown methods
  onCountryChange(event: GoabDropdownOnChangeDetail) {
    console.log('Country changed:', event);
    this.dependentData.country = event.value as string;
    this.dependentData.region = null;
    this.dependentData.city = null;
    this.updateAvailableRegions();
    this.availableCities = [];
  }

  onRegionChange(event: GoabDropdownOnChangeDetail) {
    console.log('Region changed:', event);
    this.dependentData.region = event.value as string;
    this.dependentData.city = null;
    this.updateAvailableCities();
  }

  onCityChange(event: GoabDropdownOnChangeDetail) {
    console.log('City changed:', event);
    this.dependentData.city = event.value as string;
  }

  onDependentFormSubmit() {
    console.log('Dependent Form Data:', this.dependentData);
  }

  resetDependentForm() {
    this.dependentData = {
      country: null,
      region: null,
      city: null
    };
    this.availableRegions = [];
    this.availableCities = [];
    this.updateAvailableRegions();
  }

  private updateAvailableRegions() {
    if (this.dependentData.country) {
      const countryData = this.subdivisions[this.dependentData.country];
      this.availableRegions = countryData ? Object.entries(countryData).map(([code, name]) => ({
        code,
        name
      })) : [];
    } else {
      // Show regions for first country as default
      const firstCountryCode = this.countries[0]?.code;
      if (firstCountryCode) {
        const countryData = this.subdivisions[firstCountryCode];
        this.availableRegions = countryData ? Object.entries(countryData).map(([code, name]) => ({
          code,
          name
        })) : [];
      }
    }
  }

  private updateAvailableCities() {
    // Simulate city data based on region
    const cityData: Record<string, any[]> = {
      'AB': [
        { code: 'calgary', name: 'Calgary' },
        { code: 'edmonton', name: 'Edmonton' },
        { code: 'lethbridge', name: 'Lethbridge' },
        { code: 'red-deer', name: 'Red Deer' }
      ],
      'BC': [
        { code: 'vancouver', name: 'Vancouver' },
        { code: 'victoria', name: 'Victoria' },
        { code: 'kelowna', name: 'Kelowna' },
        { code: 'burnaby', name: 'Burnaby' }
      ],
      'ON': [
        { code: 'toronto', name: 'Toronto' },
        { code: 'ottawa', name: 'Ottawa' },
        { code: 'hamilton', name: 'Hamilton' },
        { code: 'london', name: 'London' }
      ]
    };

    this.availableCities = this.dependentData.region ? (cityData[this.dependentData.region] || []) : [];
  }

  getCountryName(code: string | null): string {
    if (!code) return '';
    const country = this.countries.find(c => c.code === code);
    return country ? country.name : code;
  }

  getRegionName(code: string | null): string {
    if (!code || !this.dependentData.country) return '';
    const countryData = this.subdivisions[this.dependentData.country];
    return countryData ? ((countryData as any)[code] || code) : code;
  }

  getCityName(code: string | null): string {
    if (!code) return '';
    const city = this.availableCities.find(c => c.code === code);
    return city ? city.name : code;
  }

  // Advanced form methods
  applyFilters() {
    console.log('Applying filters:', this.advancedForm.value);
  }

  clearFilters() {
    this.advancedForm.reset({
      category: null,
      priceRange: null,
      sortBy: 'name'
    });
  }

  getFilteredResultsCount(): number {
    // Simulate filtered results count based on selected filters
    const values = this.advancedForm.value;
    let count = 100; // Base count
    
    if (values.category) count = Math.floor(count * 0.7);
    if (values.priceRange) count = Math.floor(count * 0.8);
    
    return count;
  }

  // Profile form methods
  onProfileSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile Form Values:', this.profileForm.value);
    } else {
      this.markFormGroupTouched(this.profileForm);
    }
  }

  resetProfileForm() {
    this.profileForm.reset({
      title: null,
      ageGroup: null,
      occupation: null
    });
  }

  // Interactive examples methods
  onInteractiveChange(field: string, event: GoabDropdownOnChangeDetail) {
    console.log(`Interactive ${field} changed:`, event);
    (this.interactiveData as any)[field] = event.value;
  }

  selectRandomOptions() {
    const options1 = ['alpha', 'beta', 'gamma'];
    const options2 = ['small', 'medium', 'large'];
    const options3 = ['morning', 'afternoon', 'evening'];

    this.interactiveData = {
      option1: options1[Math.floor(Math.random() * options1.length)],
      option2: options2[Math.floor(Math.random() * options2.length)],
      option3: options3[Math.floor(Math.random() * options3.length)]
    };
  }

  selectFirstOptions() {
    this.interactiveData = {
      option1: 'alpha',
      option2: 'small',
      option3: 'morning'
    };
  }

  selectLastOptions() {
    this.interactiveData = {
      option1: 'gamma',
      option2: 'large',
      option3: 'evening'
    };
  }

  clearAllSelections() {
    this.interactiveData = {
      option1: null,
      option2: null,
      option3: null
    };
  }

  getSelectedOptionsCount(): number {
    return Object.values(this.interactiveData).filter(option => option !== null).length;
  }

  // Utility methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.validationForm.get(fieldName) || this.profileForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string | undefined {
    const field = this.validationForm.get(fieldName) || this.profileForm.get(fieldName);
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
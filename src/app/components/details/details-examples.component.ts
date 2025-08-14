import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { 
  GoabDetails, 
  GoabFormItem, 
  GoabRadioGroup, 
  GoabRadioItem, 
  GoabInput, 
  GoabButton, 
  GoabBlock 
} from '@abgov/angular-components';

@Component({
  selector: 'app-details-examples',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GoabDetails,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabInput,
    GoabButton,
    GoabBlock
  ],
  templateUrl: './details-examples.component.html',
  styleUrls: ['./details-examples.component.css']
})
export class DetailsExamplesComponent {
  childCareForm!: FormGroup;
  educationForm!: FormGroup;
  bankForm!: FormGroup;

  // Education expense data
  educationExpenseItems = [
    'Laptop and computer hardware',
    'Computer apps and subscriptions', 
    'Home internet',
    'Testing and exam fees',
    'Work or school clothing, like work boots'
  ];

  excludedItems = [
    'Tuition',
    'Mandatory fees',
    'Books and supplies',
    'School association fees'
  ];

  constructor(private fb: FormBuilder) {
    this.initializeForms();
  }

  initializeForms(): void {
    // Child care form
    this.childCareForm = this.fb.group({
      childCare: ['']
    });

    // Education expense form  
    this.educationForm = this.fb.group({
      additional: ['']
    });

    // Bank information form
    this.bankForm = this.fb.group({
      bankNumber: [''],
      transitNumber: [''], 
      accountNumber: ['']
    });
  }

  onChildCareChange(event: any): void {
    console.log('Child care selection:', event.value);
  }

  onEducationChange(event: any): void {
    console.log('Education expense selection:', event.value);
  }

  onBankFormSubmit(): void {
    console.log('Bank form submitted:', this.bankForm.value);
  }

  goBack(): void {
    console.log('Going back...');
    // Add navigation logic here
  }

  saveAndContinue(): void {
    console.log('Saving and continuing...');
    console.log('Forms data:', {
      childCare: this.childCareForm.value,
      education: this.educationForm.value,
      bank: this.bankForm.value
    });
  }
}
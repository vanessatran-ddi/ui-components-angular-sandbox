import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabCallout, GoabButton, GoabButtonGroup } from '@abgov/angular-components';

@Component({
  selector: 'app-callout-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabCallout,
    GoabButton,
    GoabButtonGroup
  ],
  templateUrl: './callout-examples.component.html'
})
export class CalloutExamplesComponent {
  // Sample data for different callout scenarios
  confirmationNumber = '1234ABC';
  userEmail = 'person@email.com';
  phoneNumber = '780 123 4567';
  supportEmail = 'information@gov.ab.ca';

  // Button click handlers
  goToApplication(): void {
    console.log('Navigate to application');
    // Add navigation logic here
  }

  backToDashboard(): void {
    console.log('Navigate back to dashboard');
    // Add navigation logic here
  }

  onSubmitForm(): void {
    console.log('Form submitted successfully');
    // Add form submission logic here
  }

  onTryAgain(): void {
    console.log('Trying again...');
    // Add retry logic here
  }

  onContactSupport(): void {
    console.log('Contacting support...');
    // Add support contact logic here
  }
}
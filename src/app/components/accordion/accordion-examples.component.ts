import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabAccordion, GoabBadge, GoabButton } from '@abgov/angular-components';

@Component({
  selector: 'app-accordion-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabAccordion,
    GoabBadge,
    GoabButton
  ],
  templateUrl: './accordion-examples.component.html',
  styleUrls: ['./accordion-examples.component.css']
})
export class AccordionExamplesComponent {
  // FAQ example state
  expandedList: boolean[] = [false, false, false, false];
  expandedAll = false;
  accordionStatus = 'Show all sections';

  // FAQ data
  faqItems = [
    {
      question: 'How do I create an account?',
      answer: 'To create an account you will need to contact your office admin.'
    },
    {
      question: 'What verification is needed to sign documents digitally?',
      answer: 'You will need to verify your identity through our two factor authentication in addition to the digital signature.'
    },
    {
      question: 'Can I track the status of my service requests online?',
      answer: 'Yes, you can see the status of your application on the main service dashboard when you login. You will receive updates and notifications in your email as your request progresses.'
    },
    {
      question: 'Are there accessibility features for people with disabilities?',
      answer: 'Yes, our digital service is designed with accessibility in mind. More information on accessibility is available in our documentation.'
    }
  ];

  toggleAccordion(index: number, open: boolean): void {
    this.expandedList[index] = open;
    this.updateAccordionStatus();
  }

  onClick(): void {
    const isExpanding = this.expandedList.some(isOpen => !isOpen);
    this.expandedList = this.expandedList.map(() => isExpanding);
    this.updateAccordionStatus();
  }

  private updateAccordionStatus(): void {
    this.expandedAll = this.expandedList.every(isOpen => isOpen);
    this.accordionStatus = this.expandedList.every(isOpen => isOpen) 
      ? 'Hide all sections' 
      : 'Show all sections';
  }
}
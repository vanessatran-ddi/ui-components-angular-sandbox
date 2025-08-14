import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabPopover, GoabButton, GoabLink, GoabIconButton, GoabBlock } from '@abgov/angular-components';

@Component({
  selector: 'app-popover-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabPopover,
    GoabButton,
    GoabLink,
    GoabIconButton,
    GoabBlock
  ],
  templateUrl: './popover-examples.component.html',
  styleUrls: ['./popover-examples.component.css']
})
export class PopoverExamplesComponent {
  
  // Method for button close action
  closePopoverWithButton(): void {
    console.log('Popover closed with button');
  }

  // Method for link close action
  closePopoverWithLink(): void {
    console.log('Popover closed with link');
  }

  // Method for icon button close action
  closePopoverWithIcon(): void {
    console.log('Popover closed with icon button');
  }

  // Sample data for dynamic content
  popoverContent = {
    title: 'Additional Information',
    description: 'This popover provides helpful context and additional details about the associated element.',
    tips: [
      'Use popovers for non-critical information',
      'Keep content concise and scannable',
      'Provide clear close mechanisms',
      'Ensure keyboard accessibility'
    ]
  };

  // Method for handling popover interactions
  onPopoverAction(action: string): void {
    console.log(`Popover action: ${action}`);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ListItem {
  text: string;
  children?: ListItem[];
}

interface ProcessStep {
  title: string;
  description: string;
  substeps?: string[];
}

@Component({
  selector: 'app-list-examples',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-examples.component.html',
  styleUrls: ['./list-examples.component.css']
})
export class ListExamplesComponent {
  
  // Data for ordered list example (from Alberta Design System)
  orderedItems: ListItem[] = [
    {
      text: 'An ordered item',
      children: [
        { text: 'An unordered item' },
        {
          text: 'A longer item that wraps to a second line',
          children: [
            { text: 'An item on a 3rd level' }
          ]
        }
      ]
    },
    {
      text: 'An ordered item',
      children: [
        {
          text: 'An unordered item',
          children: [
            { text: 'An item on a third level' },
            {
              text: 'A second item on a 3rd level',
              children: [
                { text: 'An item on a 4th level' }
              ]
            }
          ]
        }
      ]
    }
  ];

  // Data for unordered list example (from Alberta Design System)
  unorderedItems: ListItem[] = [
    { text: 'Milk' },
    {
      text: 'Cheese',
      children: [
        { text: 'Blue cheese' },
        { text: 'Feta' }
      ]
    }
  ];

  // Application process example
  applicationSteps: ProcessStep[] = [
    {
      title: 'Prepare your documents',
      description: 'Gather all required documentation before starting your application',
      substeps: [
        'Government-issued photo ID',
        'Proof of income (pay stubs or tax return)',
        'Proof of address (utility bill or lease agreement)'
      ]
    },
    {
      title: 'Complete the online application',
      description: 'Fill out all required fields in the application form',
      substeps: [
        'Personal information section',
        'Contact details',
        'Upload supporting documents'
      ]
    },
    {
      title: 'Submit and pay fees',
      description: 'Review your application and submit with payment',
      substeps: [
        'Review all information for accuracy',
        'Accept terms and conditions',
        'Submit payment online'
      ]
    },
    {
      title: 'Wait for processing',
      description: 'Your application will be reviewed by our team'
    }
  ];

  // Service features example
  serviceFeatures = [
    'Online application processing',
    'Document verification',
    'Status tracking and notifications',
    'Customer support',
    'Secure payment processing',
    'Mobile-friendly interface'
  ];

  // Emergency checklist example
  emergencyChecklist = [
    {
      category: 'Emergency Kit Essentials',
      items: [
        'Water (1 gallon per person per day for 3 days)',
        'Non-perishable food (3-day supply)',
        'Battery-powered or hand crank radio',
        'Flashlight and extra batteries',
        'First aid kit',
        'Whistle for signaling help'
      ]
    },
    {
      category: 'Important Documents',
      items: [
        'Copies of identification',
        'Insurance policies',
        'Bank account records',
        'Credit card information',
        'Medical records and medications'
      ]
    },
    {
      category: 'Communication Plan',
      items: [
        'Contact information for family members',
        'Meeting location if separated',
        'Out-of-area contact person',
        'Local emergency services numbers'
      ]
    }
  ];

  // Programming languages example (nested technical content)
  programmingTopics = [
    {
      language: 'JavaScript',
      topics: [
        'ES6+ Features',
        'Async/Await',
        {
          framework: 'Angular',
          concepts: [
            'Components and Templates',
            'Services and Dependency Injection',
            'Routing and Navigation',
            'Forms and Validation'
          ]
        },
        {
          framework: 'React',
          concepts: [
            'JSX and Virtual DOM',
            'State Management',
            'Hooks and Lifecycle',
            'Component Composition'
          ]
        }
      ]
    },
    {
      language: 'TypeScript',
      topics: [
        'Type Annotations',
        'Interfaces and Classes',
        'Generics',
        'Advanced Types'
      ]
    }
  ];

  // Methods for dynamic interaction
  addItem(category: string): void {
    console.log(`Adding item to ${category}`);
    // Add dynamic list manipulation logic here
  }

  removeItem(category: string, index: number): void {
    console.log(`Removing item ${index} from ${category}`);
    // Add removal logic here
  }

  toggleComplete(step: string): void {
    console.log(`Toggling completion status for: ${step}`);
    // Add completion tracking logic here
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }
}
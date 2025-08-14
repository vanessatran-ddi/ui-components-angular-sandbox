import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabContainer, GoabButton } from '@abgov/angular-components';

interface DueDate {
  task: string;
  date: string;
}

interface ContactInfo {
  title: string;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-container-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabContainer,
    GoabButton
  ],
  templateUrl: './container-examples.component.html',
  styleUrls: ['./container-examples.component.css']
})
export class ContainerExamplesComponent {
  // Sample data for user information example
  housingAdvisor: ContactInfo = {
    title: 'Housing Advisor',
    name: 'Tracy Hero',
    email: 'tracyhero@email.com',
    phone: '283-203-4921'
  };

  // Sample data for upcoming due dates
  upcomingDates: DueDate[] = [
    { task: 'Business plan submission', date: 'June 30, 2024' },
    { task: 'Annual review', date: 'October 3, 2024' },
    { task: 'Application submission', date: 'December 20, 2024' },
    { task: 'Application review', date: 'January 3, 2025' }
  ];

  // Sample data for different container types
  projectInfo = {
    title: 'Project Information',
    status: 'In Progress',
    manager: 'John Smith',
    startDate: 'January 15, 2024',
    endDate: 'June 30, 2024'
  };

  notifications = [
    { type: 'info', message: 'Your application has been received and is being processed.' },
    { type: 'warning', message: 'Please submit required documents by Friday.' },
    { type: 'success', message: 'Payment has been successfully processed.' }
  ];

  // Action handlers
  addToCalendar(): void {
    console.log('Adding dates to calendar...');
    // Add calendar integration logic here
  }

  editContact(): void {
    console.log('Editing contact information...');
    // Add edit functionality here
  }

  viewProject(): void {
    console.log('Viewing project details...');
    // Add navigation logic here
  }

  dismissNotification(index: number): void {
    this.notifications.splice(index, 1);
    console.log('Notification dismissed');
  }
}
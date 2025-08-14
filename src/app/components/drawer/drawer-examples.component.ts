import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  GoabFormItem,
  GoabDrawer,
  GoabButton
} from '@abgov/angular-components';

@Component({
  selector: 'app-drawer-examples',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    GoabFormItem,
    GoabDrawer,
    GoabButton
  ],
  templateUrl: './drawer-examples.component.html',
  styleUrls: ['./drawer-examples.component.css']
})
export class DrawerExamplesComponent {
  // Drawer visibility states
  leftDrawerOpen = false;
  rightDrawerOpen = false;
  bottomDrawerOpen = false;
  smallDrawerOpen = false;
  mediumDrawerOpen = false;
  largeDrawerOpen = false;
  actionsDrawerOpen = false;
  formDrawerOpen = false;
  confirmationDrawerOpen = false;
  customDrawerOpen = false;

  // Form data
  userProfileForm: FormGroup;
  settingsForm: FormGroup;
  feedbackForm: FormGroup;

  // Sample data
  selectedUser = {
    name: 'John Doe',
    email: 'john.doe@gov.ab.ca',
    department: 'Information Technology',
    role: 'Senior Developer',
    phone: '(780) 123-4567',
    office: 'Edmonton Main',
    startDate: '2020-03-15'
  };

  notifications = [
    { id: 1, title: 'System Maintenance', message: 'Scheduled maintenance tonight from 11 PM to 1 AM', time: '2 hours ago', read: false },
    { id: 2, title: 'New Policy Update', message: 'Employee handbook has been updated with new remote work policies', time: '1 day ago', read: true },
    { id: 3, title: 'Training Required', message: 'Complete cybersecurity training by end of month', time: '3 days ago', read: false }
  ];

  // Event tracking
  eventLog: Array<{timestamp: string, message: string}> = [];

  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group({
      name: [this.selectedUser.name, Validators.required],
      email: [this.selectedUser.email, [Validators.required, Validators.email]],
      department: [this.selectedUser.department, Validators.required],
      role: [this.selectedUser.role, Validators.required],
      phone: [this.selectedUser.phone],
      office: [this.selectedUser.office]
    });

    this.settingsForm = this.fb.group({
      emailNotifications: [true],
      smsNotifications: [false],
      darkMode: [false],
      language: ['english', Validators.required],
      timezone: ['america/edmonton', Validators.required]
    });

    this.feedbackForm = this.fb.group({
      category: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      priority: ['medium']
    });
  }

  // Drawer open/close methods
  openLeftDrawer(): void {
    this.leftDrawerOpen = true;
    this.logEvent('Left drawer opened');
  }

  closeLeftDrawer(): void {
    this.leftDrawerOpen = false;
    this.logEvent('Left drawer closed');
  }

  openRightDrawer(): void {
    this.rightDrawerOpen = true;
    this.logEvent('Right drawer opened');
  }

  closeRightDrawer(): void {
    this.rightDrawerOpen = false;
    this.logEvent('Right drawer closed');
  }

  openBottomDrawer(): void {
    this.bottomDrawerOpen = true;
    this.logEvent('Bottom drawer opened');
  }

  closeBottomDrawer(): void {
    this.bottomDrawerOpen = false;
    this.logEvent('Bottom drawer closed');
  }

  openSmallDrawer(): void {
    this.smallDrawerOpen = true;
    this.logEvent('Small drawer opened');
  }

  closeSmallDrawer(): void {
    this.smallDrawerOpen = false;
    this.logEvent('Small drawer closed');
  }

  openMediumDrawer(): void {
    this.mediumDrawerOpen = true;
    this.logEvent('Medium drawer opened');
  }

  closeMediumDrawer(): void {
    this.mediumDrawerOpen = false;
    this.logEvent('Medium drawer closed');
  }

  openLargeDrawer(): void {
    this.largeDrawerOpen = true;
    this.logEvent('Large drawer opened');
  }

  closeLargeDrawer(): void {
    this.largeDrawerOpen = false;
    this.logEvent('Large drawer closed');
  }

  openActionsDrawer(): void {
    this.actionsDrawerOpen = true;
    this.logEvent('Actions drawer opened');
  }

  closeActionsDrawer(): void {
    this.actionsDrawerOpen = false;
    this.logEvent('Actions drawer closed');
  }

  openFormDrawer(): void {
    this.formDrawerOpen = true;
    this.logEvent('Form drawer opened');
  }

  closeFormDrawer(): void {
    this.formDrawerOpen = false;
    this.logEvent('Form drawer closed');
  }

  openConfirmationDrawer(): void {
    this.confirmationDrawerOpen = true;
    this.logEvent('Confirmation drawer opened');
  }

  closeConfirmationDrawer(): void {
    this.confirmationDrawerOpen = false;
    this.logEvent('Confirmation drawer closed');
  }

  openCustomDrawer(): void {
    this.customDrawerOpen = true;
    this.logEvent('Custom drawer opened');
  }

  closeCustomDrawer(): void {
    this.customDrawerOpen = false;
    this.logEvent('Custom drawer closed');
  }

  // Action methods
  saveUserProfile(): void {
    if (this.userProfileForm.valid) {
      const formData = this.userProfileForm.value;
      this.logEvent('User profile saved: ' + JSON.stringify(formData));
      this.closeFormDrawer();
      alert('Profile updated successfully!');
    } else {
      this.logEvent('Profile save failed - form invalid');
      this.markFormGroupTouched(this.userProfileForm);
    }
  }

  saveSettings(): void {
    if (this.settingsForm.valid) {
      const formData = this.settingsForm.value;
      this.logEvent('Settings saved: ' + JSON.stringify(formData));
      alert('Settings saved successfully!');
    } else {
      this.logEvent('Settings save failed - form invalid');
      this.markFormGroupTouched(this.settingsForm);
    }
  }

  submitFeedback(): void {
    if (this.feedbackForm.valid) {
      const formData = this.feedbackForm.value;
      this.logEvent('Feedback submitted: ' + JSON.stringify(formData));
      this.feedbackForm.reset();
      this.closeCustomDrawer();
      alert('Feedback submitted successfully!');
    } else {
      this.logEvent('Feedback submission failed - form invalid');
      this.markFormGroupTouched(this.feedbackForm);
    }
  }

  confirmAction(): void {
    this.logEvent('Action confirmed');
    this.closeConfirmationDrawer();
    alert('Action confirmed successfully!');
  }

  cancelAction(): void {
    this.logEvent('Action cancelled');
    this.closeConfirmationDrawer();
  }

  markNotificationAsRead(notificationId: number): void {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
      this.logEvent('Notification ' + notificationId + ' marked as read');
    }
  }

  deleteNotification(notificationId: number): void {
    this.notifications = this.notifications.filter(n => n.id !== notificationId);
    this.logEvent('Notification ' + notificationId + ' deleted');
  }

  // Helper methods
  isFieldInvalid(form: FormGroup, fieldName: string): boolean {
    const field = form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  getUnreadNotificationCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  // Event logging
  private logEvent(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.unshift({ timestamp, message });
    
    // Keep only last 10 events
    if (this.eventLog.length > 10) {
      this.eventLog = this.eventLog.slice(0, 10);
    }
  }

  clearEventLog(): void {
    this.eventLog = [];
  }
}
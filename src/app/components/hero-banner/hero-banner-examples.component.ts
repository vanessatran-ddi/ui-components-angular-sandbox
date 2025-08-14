import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabHeroBanner, GoabButton } from '@abgov/angular-components';

@Component({
  selector: 'app-hero-banner-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabHeroBanner,
    GoabButton
  ],
  templateUrl: './hero-banner-examples.component.html'
})
export class HeroBannerExamplesComponent {
  
  // Hero banner content data
  businessHero = {
    heading: 'Supporting Businesses',
    content: 'Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.',
    buttonText: 'Call to action'
  };

  educationHero = {
    heading: 'Education and Training',
    content: 'Discover programs and resources to advance your career and develop new skills in Alberta.',
    buttonText: 'Explore Programs'
  };

  healthHero = {
    heading: 'Health Services',
    content: 'Access comprehensive health services and resources to support your wellbeing and that of your family.',
    buttonText: 'Find Services'
  };

  emergencyHero = {
    heading: 'Emergency Information',
    content: 'Get up-to-date information about emergencies, alerts, and safety resources in your area.',
    buttonText: 'View Alerts'
  };

  // Action handlers
  onBusinessAction(): void {
    console.log('Business support action clicked');
    // Add navigation or action logic here
  }

  onEducationAction(): void {
    console.log('Education action clicked');
    // Add navigation or action logic here
  }

  onHealthAction(): void {
    console.log('Health services action clicked');
    // Add navigation or action logic here
  }

  onEmergencyAction(): void {
    console.log('Emergency information action clicked');
    // Add navigation or action logic here
  }

  onSimpleAction(): void {
    console.log('Simple hero action clicked');
    // Add navigation or action logic here
  }
}
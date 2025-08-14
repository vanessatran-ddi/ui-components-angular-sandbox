import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  GoabContainer, 
  GoabSkeleton, 
  GoabSpacer, 
  GoabButton, 
  GoabButtonGroup,
  GoabText,
  GoabBlock,
  GoabCard
} from '@abgov/angular-components';

@Component({
  selector: 'app-skeleton-loader-examples',
  standalone: true,
  imports: [
    CommonModule, 
    GoabContainer, 
    GoabSkeleton, 
    GoabSpacer, 
    GoabButton, 
    GoabButtonGroup,
    GoabText,
    GoabBlock,
    GoabCard
  ],
  template: `
    <goab-container>
      <h1>Skeleton Loader Component Examples</h1>
      <p>Provide visual feedback to users while loading a content heavy page or page element.</p>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Skeleton Types</h2>
      <p>Different types of skeleton loaders for various content layouts:</p>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Card Skeleton</h3>
      <p>Use for loading card-based content:</p>
      <goab-skeleton type="card"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Image Skeleton</h3>
      <p>Use for loading image content:</p>
      <goab-skeleton type="image"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Text Skeleton</h3>
      <p>Use for loading text content:</p>
      <goab-skeleton type="text"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Small Text Skeleton</h3>
      <p>Use for loading smaller text elements:</p>
      <goab-skeleton type="text-small"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Title Skeleton</h3>
      <p>Use for loading title/heading content:</p>
      <goab-skeleton type="title"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Header Skeleton</h3>
      <p>Use for loading header sections:</p>
      <goab-skeleton type="header"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Paragraph Skeleton</h3>
      <p>Use for loading paragraph content:</p>
      <goab-skeleton type="paragraph"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Thumbnail Skeleton</h3>
      <p>Use for loading thumbnail images:</p>
      <goab-skeleton type="thumbnail"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Avatar Skeleton</h3>
      <p>Use for loading user avatars:</p>
      <goab-skeleton type="avatar"></goab-skeleton>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Profile Skeleton</h3>
      <p>Use for loading user profile sections:</p>
      <goab-skeleton type="profile"></goab-skeleton>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Interactive Loading Simulation</h2>
      <p>Toggle between skeleton loading states and actual content:</p>
      
      <goab-button-group alignment="start" gap="compact" mb="l">
        <goab-button (onClick)="toggleLoading()">
          {{ isLoading ? 'Show Content' : 'Show Loading' }}
        </goab-button>
        <goab-button type="secondary" (onClick)="simulateLoading()" [disabled]="isSimulating">
          {{ isSimulating ? 'Loading...' : 'Simulate Loading' }}
        </goab-button>
      </goab-button-group>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Article Loading Example</h3>
      <div *ngIf="isLoading; else actualContent">
        <goab-skeleton type="header"></goab-skeleton>
        <goab-spacer vSpacing="m"></goab-spacer>
        <goab-skeleton type="image"></goab-skeleton>
        <goab-spacer vSpacing="m"></goab-spacer>
        <goab-skeleton type="paragraph"></goab-skeleton>
        <goab-spacer vSpacing="s"></goab-spacer>
        <goab-skeleton type="paragraph"></goab-skeleton>
        <goab-spacer vSpacing="s"></goab-spacer>
        <goab-skeleton type="text"></goab-skeleton>
      </div>
      <ng-template #actualContent>
        <h2>Sample Article Title</h2>
        <div style="width: 100%; height: 200px; background: #f0f0f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin: 16px 0;">
          <span style="color: #666;">Sample Article Image</span>
        </div>
        <p>This is a sample paragraph that would appear after the content has loaded. The skeleton loaders above provide visual feedback to users while the actual content is being fetched from the server.</p>
        <p>Another paragraph of content that demonstrates how multiple skeleton elements can be combined to create a realistic loading experience for users.</p>
        <p>Final paragraph showing the complete loaded state.</p>
      </ng-template>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h3>User Profile Loading Example</h3>
      <div *ngIf="profileLoading; else actualProfile">
        <goab-block direction="row" gap="m" mb="l">
          <goab-skeleton type="avatar"></goab-skeleton>
          <goab-block direction="column" gap="s">
            <goab-skeleton type="title"></goab-skeleton>
            <goab-skeleton type="text-small"></goab-skeleton>
            <goab-skeleton type="text-small"></goab-skeleton>
          </goab-block>
        </goab-block>
        <goab-skeleton type="paragraph"></goab-skeleton>
      </div>
      <ng-template #actualProfile>
        <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: #e0e0e0; display: flex; align-items: center; justify-content: center;">
            <span style="color: #666;">JD</span>
          </div>
          <div>
            <h3 style="margin: 0 0 4px 0;">John Doe</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">Senior Developer</p>
            <p style="margin: 0; color: #666; font-size: 14px;">Calgary, AB</p>
          </div>
        </div>
        <p>John is an experienced developer with over 8 years of experience building web applications. He specializes in Angular and modern web technologies.</p>
      </ng-template>
      
      <goab-button-group alignment="start" gap="compact" mt="m">
        <goab-button type="tertiary" (onClick)="toggleProfile()">
          {{ profileLoading ? 'Show Profile' : 'Show Profile Loading' }}
        </goab-button>
      </goab-button-group>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h3>Card List Loading Example</h3>
      <div *ngIf="cardListLoading; else actualCards">
        <goab-block direction="column" gap="m">
          <goab-skeleton type="card" *ngFor="let item of [1,2,3]"></goab-skeleton>
        </goab-block>
      </div>
      <ng-template #actualCards>
        <goab-block direction="column" gap="m">
          <goab-card *ngFor="let card of sampleCards">
            <h4>{{ card.title }}</h4>
            <p>{{ card.description }}</p>
            <goab-button type="tertiary" size="compact">Learn More</goab-button>
          </goab-card>
        </goab-block>
      </ng-template>
      
      <goab-button-group alignment="start" gap="compact" mt="m">
        <goab-button type="tertiary" (onClick)="toggleCardList()">
          {{ cardListLoading ? 'Show Cards' : 'Show Card Loading' }}
        </goab-button>
      </goab-button-group>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Layout Combinations</h2>
      <p>Examples of combining different skeleton types for complex layouts:</p>
      
      <goab-spacer vSpacing="l"></goab-spacer>
      
      <h3>Dashboard Layout</h3>
      <div *ngIf="dashboardLoading; else actualDashboard">
        <goab-skeleton type="header"></goab-skeleton>
        <goab-spacer vSpacing="m"></goab-spacer>
        <goab-block direction="row" gap="m">
          <div style="flex: 1;">
            <goab-skeleton type="card"></goab-skeleton>
          </div>
          <div style="flex: 1;">
            <goab-skeleton type="card"></goab-skeleton>
          </div>
          <div style="flex: 1;">
            <goab-skeleton type="card"></goab-skeleton>
          </div>
        </goab-block>
        <goab-spacer vSpacing="m"></goab-spacer>
        <goab-skeleton type="paragraph"></goab-skeleton>
      </div>
      <ng-template #actualDashboard>
        <h2>Dashboard Overview</h2>
        <goab-spacer vSpacing="m"></goab-spacer>
        <goab-block direction="row" gap="m">
          <goab-card style="flex: 1;">
            <h4>Total Users</h4>
            <p style="font-size: 24px; font-weight: bold; margin: 8px 0;">1,234</p>
            <p style="color: #666; font-size: 14px;">+12% from last month</p>
          </goab-card>
          <goab-card style="flex: 1;">
            <h4>Revenue</h4>
            <p style="font-size: 24px; font-weight: bold; margin: 8px 0;">$45,678</p>
            <p style="color: #666; font-size: 14px;">+8% from last month</p>
          </goab-card>
          <goab-card style="flex: 1;">
            <h4>Orders</h4>
            <p style="font-size: 24px; font-weight: bold; margin: 8px 0;">567</p>
            <p style="color: #666; font-size: 14px;">+15% from last month</p>
          </goab-card>
        </goab-block>
        <goab-spacer vSpacing="m"></goab-spacer>
        <p>Welcome to your dashboard. Here you can view key metrics and performance indicators for your account.</p>
      </ng-template>
      
      <goab-button-group alignment="start" gap="compact" mt="m">
        <goab-button type="tertiary" (onClick)="toggleDashboard()">
          {{ dashboardLoading ? 'Show Dashboard' : 'Show Dashboard Loading' }}
        </goab-button>
      </goab-button-group>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Usage Notes</h2>
      <ul>
        <li><strong>Type:</strong> Choose the appropriate skeleton type based on the content being loaded</li>
        <li><strong>Layout:</strong> Combine multiple skeleton types to match your actual content structure</li>
        <li><strong>Timing:</strong> Show skeletons immediately while loading, replace with real content when ready</li>
        <li><strong>Animation:</strong> Skeleton loaders include subtle shimmer animations</li>
        <li><strong>Accessibility:</strong> Skeleton loaders are announced to screen readers as loading content</li>
        <li><strong>Performance:</strong> Use skeletons to improve perceived performance during content loading</li>
      </ul>
    </goab-container>
  `,
})
export class SkeletonLoaderExamplesComponent {
  // Loading states
  isLoading = true;
  isSimulating = false;
  profileLoading = false;
  cardListLoading = false;
  dashboardLoading = false;
  
  // Sample data
  sampleCards = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of using our platform with this comprehensive guide.'
    },
    {
      title: 'API Documentation',
      description: 'Complete reference for all available API endpoints and methods.'
    },
    {
      title: 'Best Practices',
      description: 'Tips and recommendations for optimal performance and security.'
    }
  ];

  // Toggle methods
  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  toggleProfile() {
    this.profileLoading = !this.profileLoading;
  }

  toggleCardList() {
    this.cardListLoading = !this.cardListLoading;
  }

  toggleDashboard() {
    this.dashboardLoading = !this.dashboardLoading;
  }

  // Simulation method
  simulateLoading() {
    if (this.isSimulating) return;
    
    this.isSimulating = true;
    this.isLoading = true;
    
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
      this.isSimulating = false;
    }, 3000);
  }
}
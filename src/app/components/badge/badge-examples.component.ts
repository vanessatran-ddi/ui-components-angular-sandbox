import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabContainer, GoabBadge, GoabSpacer, GoabTable, GoabButton, GoabBlock } from '@abgov/angular-components';
import { GoabBadgeType } from '@abgov/ui-components-common';

interface TableRow {
  status: {
    type: GoabBadgeType;
    content: string;
  };
  name: string;
  fileNumber: string;
}

@Component({
  selector: 'app-badge-examples',
  standalone: true,
  imports: [
    CommonModule, 
    GoabContainer, 
    GoabBadge, 
    GoabSpacer, 
    GoabTable, 
    GoabButton, 
    GoabBlock
  ],
  template: `
    <goab-container>
      <h1>Badge Component Examples</h1>
      <p>Small labels which hold small amounts of information, system feedback, or states.</p>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Badge Types</h2>
      <p>All available badge types with their respective colors and meanings:</p>
      
      <goab-block gap="m" mb="xl">
        <goab-badge type="success" content="Success"></goab-badge>
        <goab-badge type="important" content="Important"></goab-badge>
        <goab-badge type="information" content="Information"></goab-badge>
        <goab-badge type="emergency" content="Emergency"></goab-badge>
        <goab-badge type="archived" content="Archived"></goab-badge>
        <goab-badge type="default" content="Default"></goab-badge>
        <goab-badge type="information" content="Subtle" emphasis="subtle"></goab-badge>
      </goab-block>

      <h2>Badges with Icons</h2>
      <p>Badges can optionally include icons for enhanced visual communication:</p>
      
      <goab-block gap="m" mb="xl">
        <goab-badge type="success" content="Success" icon="true"></goab-badge>
        <goab-badge type="important" content="Important" icon="true"></goab-badge>
        <goab-badge type="information" content="Information" icon="true"></goab-badge>
        <goab-badge type="emergency" content="Emergency" icon="true"></goab-badge>
        <goab-badge type="archived" content="Archived" icon="true"></goab-badge>
        <goab-badge type="default" content="Default" icon="true"></goab-badge>
        <goab-badge type="information" content="Subtle" emphasis="subtle" icon="true"></goab-badge>
      </goab-block>

      <h2>Badge Spacing Examples</h2>
      <p>Badges with different margin spacing:</p>
      
      <div>
        <goab-badge type="information" content="No margin" mr="none"></goab-badge>
        <goab-badge type="important" content="Small margin" mr="s"></goab-badge>
        <goab-badge type="success" content="Medium margin" mr="m"></goab-badge>
        <goab-badge type="emergency" content="Large margin" mr="l"></goab-badge>
      </div>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Example 1: Show status in a table</h2>
      <p>Common use case showing badges in a table to represent different statuses:</p>
      
      <goab-table width="100%">
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th class="goa-table-number-header">File number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of tableData">
            <td>
              <goab-badge [type]="row.status.type" [content]="row.status.content"></goab-badge>
            </td>
            <td>{{ row.name }}</td>
            <td class="goa-table-number-column">{{ row.fileNumber }}</td>
            <td>
              <goab-button type="tertiary" (onClick)="onAssignClick()">
                Assign
              </goab-button>
            </td>
          </tr>
        </tbody>
      </goab-table>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Example 2: Show multiple tags together</h2>
      <p>Using multiple badges together to show different aspects of an item:</p>
      
      <goab-block gap="xs">
        <goab-badge type="information" content="In progress"></goab-badge>
        <goab-badge type="important" content="Priority"></goab-badge>
        <goab-badge type="emergency" content="Past deadline"></goab-badge>
      </goab-block>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Example 3: Show a status on a card</h2>
      <p>Badge used as an action item in a card header:</p>
      
      <goab-container type="non-interactive" accent="thick" [title]="titleTemplate" [actions]="actionsTemplate">
        <ng-template #titleTemplate>
          Heading
        </ng-template>
        <ng-template #actionsTemplate>
          <goab-badge type="important" content="Priority"></goab-badge>
        </ng-template>
        Content of the card goes here. This shows how badges can be used in container actions.
      </goab-container>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Accessibility Examples</h2>
      <p>Badges with aria-labels for better accessibility:</p>
      
      <goab-block gap="m">
        <goab-badge 
          type="success" 
          content="✓" 
          ariaLabel="Task completed successfully">
        </goab-badge>
        <goab-badge 
          type="emergency" 
          content="!" 
          ariaLabel="Critical error occurred">
        </goab-badge>
        <goab-badge 
          type="information" 
          content="3" 
          ariaLabel="3 new notifications">
        </goab-badge>
      </goab-block>
    </goab-container>
  `,
})
export class BadgeExamplesComponent {
  tableData: TableRow[] = [
    {
      status: { type: "important" as GoabBadgeType, content: "Pending" },
      name: "Lorem ipsum dolor sit amet consectetur",
      fileNumber: "1234567890"
    },
    {
      status: { type: "emergency" as GoabBadgeType, content: "Failed" },
      name: "Lorem ipsum dolor sit amet consectetur",
      fileNumber: "1234567890"
    },
    {
      status: { type: "success" as GoabBadgeType, content: "Complete" },
      name: "Lorem ipsum dolor sit amet consectetur",
      fileNumber: "1234567890"
    },
    {
      status: { type: "information" as GoabBadgeType, content: "In progress" },
      name: "Lorem ipsum dolor sit amet consectetur",
      fileNumber: "1234567890"
    },
    {
      status: { type: "midtone" as GoabBadgeType, content: "Closed" },
      name: "Lorem ipsum dolor sit amet consectetur",
      fileNumber: "1234567890"
    },
    {
      status: { type: "success" as GoabBadgeType, content: "Complete" },
      name: "Lorem ipsum dolor sit amet consectetur",
      fileNumber: "1234567890"
    }
  ];

  onAssignClick() {
    console.log('Assign button clicked');
  }
}
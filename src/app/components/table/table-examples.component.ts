import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabContainer, GoabSpacer } from '@abgov/angular-components';
import { TableSortComponent } from './table-sort.component';
import { TableNumbersComponent } from './table-numbers.component';
import { TableFilterComponent } from './table-filter.component';

@Component({
  selector: 'app-table-examples',
  standalone: true,
  imports: [
    CommonModule,
    GoabContainer,
    GoabSpacer,
    TableSortComponent,
    TableNumbersComponent,
    TableFilterComponent
  ],
  template: `
    <goab-container>
      <h1>Table Component Examples</h1>
      <p>A set of structured data that is easy for a user to scan, examine, and compare.</p>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      <app-table-sort></app-table-sort>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      <app-table-numbers></app-table-numbers>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      <app-table-filter></app-table-filter>
    </goab-container>
  `,
})
export class TableExamplesComponent {}
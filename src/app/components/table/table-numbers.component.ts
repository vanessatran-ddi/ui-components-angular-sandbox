import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabTable } from '@abgov/angular-components';

@Component({
  selector: 'app-table-numbers',
  standalone: true,
  imports: [CommonModule, GoabTable],
  template: `
    <h3>Display numbers in a table so they can be scanned easily</h3>
    <goab-table width="100%">
      <thead>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
          <th class="goa-table-number-header">Number Column</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Item 1</td>
          <td>Item 2</td>
          <td class="goa-table-number-column">54</td>
        </tr>
        <tr>
          <td>Item 1</td>
          <td>Item 2</td>
          <td class="goa-table-number-column">4567</td>
        </tr>
      </tbody>
    </goab-table>
  `,
})
export class TableNumbersComponent {}
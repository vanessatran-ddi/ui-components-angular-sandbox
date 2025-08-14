import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabTable, GoabTableSortHeader } from '@abgov/angular-components';
import { GoabTableOnSortDetail } from '@abgov/ui-components-common';

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-table-sort',
  standalone: true,
  imports: [CommonModule, GoabTable, GoabTableSortHeader],
  template: `
    <h3>Sort data in a table</h3>
    <goab-table (onSort)="handleSort($event)" width="100%">
      <thead>
        <tr>
          <th>
            <goab-table-sort-header name="firstName">
              First name
            </goab-table-sort-header>
          </th>
          <th>
            <goab-table-sort-header name="lastName">
              Last name
            </goab-table-sort-header>
          </th>
          <th>
            <goab-table-sort-header name="age" direction="asc">
              Age
            </goab-table-sort-header>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users; index as i">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </goab-table>
  `,
})
export class TableSortComponent {
  users: User[] = [];

  constructor() {
    this.users = [
      { firstName: "Christian", lastName: "Batz", age: 18 },
      { firstName: "Brain", lastName: "Wisozk", age: 19 },
      { firstName: "Neha", lastName: "Jones", age: 23 },
      { firstName: "Tristin", lastName: "Buckridge", age: 31 }
    ];
  }

  handleSort(event: GoabTableOnSortDetail) {
    const { sortBy, sortDir } = event;
    this.users.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir);
  }
}
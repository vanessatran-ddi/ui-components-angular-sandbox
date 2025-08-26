import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  GoabPagination,
  GoabButton,
  GoabRadioGroup,
  GoabRadioItem,
  GoabDropdown,
  GoabDropdownItem,
  GoabTable,
  GoabBlock,
  GoabSpacer, GoabPaginationOnChangeDetail
} from '@abgov/angular-components';
import {GoabDropdownOnChangeDetail} from "@abgov/ui-components-common";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-pagination-examples',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoabPagination,
    GoabButton,
    GoabRadioGroup,
    GoabRadioItem,
    GoabDropdown,
    GoabDropdownItem,
    GoabTable,
    GoabBlock,
    GoabSpacer
  ],
  templateUrl: './pagination-examples.component.html',
  styleUrls: ['./pagination-examples.component.css']
})
export class PaginationExamplesComponent {
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;
  perPage = 10;
  total = 100;

  handlePageChange(event: GoabPaginationOnChangeDetail) {
    this.page = event.page;

    const offset: number = (this.page - 1) * this.perPage;
    this.pageUsers = this.users.slice(offset, offset + this.perPage);
  }

  handlePerPageCountChangeEvent(event: GoabDropdownOnChangeDetail) {
    this.page = 1;
    this.perPage = Number(event.value);

    this.pageUsers = this.users.slice(0, this.perPage);
  }

  constructor() {
    this.pageUsers = this.prepareUsers().slice(0, this.perPage);
  }

  prepareUsers() {
    const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Mike', 'Sarah', 'David', 'Emily', 'Chris', 'Lisa', 'Tom', 'Anna', 'Mark', 'Emma', 'Paul'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson'];
    
    for (let i = 0; i < this.total; i++) {
      this.users.push({
        id: `user-${i + 1}`,
        firstName: firstNames[i % firstNames.length],
        lastName: lastNames[Math.floor(i / firstNames.length) % lastNames.length],
        age: 18 + (i % 43),
      });
    }

    return this.users;
  }
}

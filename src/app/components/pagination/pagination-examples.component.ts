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
import { faker } from "@faker-js/faker";
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
    for (let i = 0; i < this.total; i++) {
      this.users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }

    return this.users;
  }
}

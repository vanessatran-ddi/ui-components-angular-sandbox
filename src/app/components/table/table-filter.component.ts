import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoabTable, GoabFormItem, GoabBlock, GoabInput, GoabButton, GoabText, GoabFilterChip, GoabBadge } from '@abgov/angular-components';
import { GoabInputOnChangeDetail, GoabInputOnKeyPressDetail, GoabBadgeType } from '@abgov/ui-components-common';

interface TableData {
  status: {
    type: GoabBadgeType;
    text: string;
  };
  name: string;
  id: string;
}

@Component({
  selector: 'app-table-filter',
  standalone: true,
  imports: [
    CommonModule, 
    GoabTable, 
    GoabFormItem, 
    GoabBlock, 
    GoabInput, 
    GoabButton, 
    GoabText, 
    GoabFilterChip, 
    GoabBadge
  ],
  template: `
    <h3>Filter data in a table</h3>
    
    <goab-form-item id="filterChipInput" [error]="inputError" mb="m">
      <goab-block gap="xs" direction="row" alignment="start">
        <goab-input
          name="filterChipInput"
          aria-labelledby="filterChipInput"
          [value]="inputValue"
          maxlength="100"
          size="default"
          leadingIcon="search"
          (onChange)="handleInputChange($event)"
          (onKeyPress)="handleInputKeyPress($event)">
        </goab-input>
        <goab-button
          type="secondary"
          (onClick)="applyFilter()"
          leadingIcon="filter">
          Filter
        </goab-button>
      </goab-block>
    </goab-form-item>

    <ng-container *ngIf="typedChips.length > 0">
      <goab-text tag="span" color="secondary" mb="xs" mr="xs">
        Filter:
      </goab-text>
      <goab-filter-chip
        *ngFor="let typedChip of typedChips; let index = index"
        [content]="typedChip"
        mb="xs"
        mr="xs"
        (onClick)="removeTypedChip(typedChip)">
      </goab-filter-chip>
      <goab-button
        type="tertiary"
        size="compact"
        mb="xs"
        (onClick)="removeAllTypedChips()">
        Clear all
      </goab-button>
    </ng-container>

    <goab-table width="100%">
      <thead>
        <tr>
          <th>Status</th>
          <th>Name</th>
          <th class="goa-table-number-header">ID Number</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of dataFiltered">
          <td>
            <goab-badge [type]="item.status.type" [content]="item.status.text">
            </goab-badge>
          </td>
          <td>{{ item.name }}</td>
          <td class="goa-table-number-column">{{ item.id }}</td>
        </tr>
      </tbody>
    </goab-table>

    <goab-block mt="l" mb="l" *ngIf="dataFiltered.length === 0 && data.length > 0">
      No results found
    </goab-block>
  `,
})
export class TableFilterComponent {
  typedChips: string[] = [];
  inputValue = "";
  inputError = "";
  readonly errorEmpty = "Empty filter";
  readonly errorDuplicate = "Enter a unique filter";

  readonly data: TableData[] = [
    {
      status: { type: "information" as GoabBadgeType, text: "In progress" },
      name: "Ivan Schmidt",
      id: "7838576954",
    },
    {
      status: { type: "success" as GoabBadgeType, text: "Completed" },
      name: "Luz Lakin",
      id: "8576953364",
    },
    {
      status: { type: "information" as GoabBadgeType, text: "In progress" },
      name: "Keith McGlynn",
      id: "9846041345",
    },
    {
      status: { type: "success" as GoabBadgeType, text: "Completed" },
      name: "Melody Frami",
      id: "7385256175",
    },
    {
      status: { type: "important" as GoabBadgeType, text: "Updated" },
      name: "Frederick Skiles",
      id: "5807570418",
    },
    {
      status: { type: "success" as GoabBadgeType, text: "Completed" },
      name: "Dana Pfannerstill",
      id: "5736306857",
    },
  ];

  dataFiltered = this.getFilteredData(this.typedChips);

  handleInputChange(detail: GoabInputOnChangeDetail): void {
    const newValue = detail.value.trim();
    this.inputValue = newValue;
  }

  handleInputKeyPress(detail: GoabInputOnKeyPressDetail): void {
    if (detail.key === "Enter") {
      this.applyFilter();
    }
  }

  applyFilter() {
    if (this.inputValue === "") {
      this.inputError = this.errorEmpty;
      return;
    }
    if (this.typedChips.includes(this.inputValue)) {
      this.inputError = this.errorDuplicate;
      return;
    }
    this.typedChips = [...this.typedChips, this.inputValue];
    this.inputValue = "";
    this.inputError = "";
    this.dataFiltered = this.getFilteredData(this.typedChips);
  }

  removeTypedChip(chip: string) {
    this.typedChips = this.typedChips.filter((c) => c !== chip);
    this.dataFiltered = this.getFilteredData(this.typedChips);
    this.inputError = "";
  }

  removeAllTypedChips() {
    this.typedChips = [];
    this.dataFiltered = this.getFilteredData(this.typedChips);
    this.inputError = "";
  }

  getFilteredData(typedChips: string[]) {
    if (typedChips.length === 0) {
      return this.data;
    }
    const filteredData = this.data.filter((item) =>
      typedChips.every((chip) => this.checkNested(item, chip))
    );
    return filteredData;
  }

  checkNested(obj: object, chip: string): boolean {
    return Object.values(obj).some((value) =>
      typeof value === "object" && value !== null
        ? this.checkNested(value, chip)
        : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase())
    );
  }
}
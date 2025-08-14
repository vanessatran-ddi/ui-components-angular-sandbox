import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  GoabContainer, 
  GoabFilterChip, 
  GoabSpacer, 
  GoabButton, 
  GoabButtonGroup, 
  GoabFormItem, 
  GoabInput, 
  GoabTable, 
  GoabBadge, 
  GoabText, 
  GoabBlock 
} from '@abgov/angular-components';
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
  selector: 'app-filter-chip-examples',
  standalone: true,
  imports: [
    CommonModule, 
    GoabContainer, 
    GoabFilterChip, 
    GoabSpacer, 
    GoabButton, 
    GoabButtonGroup, 
    GoabFormItem, 
    GoabInput, 
    GoabTable, 
    GoabBadge, 
    GoabText, 
    GoabBlock
  ],
  template: `
    <goab-container>
      <h1>Filter Chip Component Examples</h1>
      <p>Allow the user to filter content.</p>
      
      <goab-spacer vSpacing="xl"></goab-spacer>
      
      <h2>Basic Filter Chips</h2>
      <p>Basic filter chips with different states:</p>
      
      <goab-block gap="s" mb="xl">
        <goab-filter-chip content="Normal Chip" (onClick)="removeBasicChip('Normal Chip')"></goab-filter-chip>
        <goab-filter-chip content="Error Chip" error="true" (onClick)="removeBasicChip('Error Chip')"></goab-filter-chip>
        <goab-filter-chip content="Long Filter Name Example" (onClick)="removeBasicChip('Long Filter Name Example')"></goab-filter-chip>
      </goab-block>

      <h2>Filter Chip Spacing Examples</h2>
      <p>Filter chips with different margin spacing:</p>
      
      <div>
        <goab-filter-chip content="No margin" mr="none" (onClick)="removeBasicChip('No margin')"></goab-filter-chip>
        <goab-filter-chip content="Small margin" mr="s" (onClick)="removeBasicChip('Small margin')"></goab-filter-chip>
        <goab-filter-chip content="Medium margin" mr="m" (onClick)="removeBasicChip('Medium margin')"></goab-filter-chip>
        <goab-filter-chip content="Large margin" mr="l" (onClick)="removeBasicChip('Large margin')"></goab-filter-chip>
      </div>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Example 1: Remove a filter</h2>
      <p>Click on any chip to remove it from the list:</p>
      
      <goab-block gap="s" *ngIf="removableChips.length > 0; else noChipsMessage">
        <goab-filter-chip 
          *ngFor="let chip of removableChips" 
          [content]="chip" 
          mr="s" 
          (onClick)="deleteChip(chip)">
        </goab-filter-chip>
      </goab-block>
      <ng-template #noChipsMessage>
        <goab-text>All chips removed! Use the button below to reset.</goab-text>
      </ng-template>
      
      <goab-button type="tertiary" mt="m" (onClick)="resetRemovableChips()">
        Reset Chips
      </goab-button>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Example 2: Add a filter chip</h2>
      <p>Click the button to add random filter chips:</p>
      
      <goab-block gap="s" mb="m" *ngIf="activeFilters.length > 0">
        <goab-filter-chip 
          *ngFor="let filter of activeFilters" 
          [content]="filter" 
          mr="s" 
          (onClick)="removeFilter(filter)">
        </goab-filter-chip>
      </goab-block>
      
      <goab-button-group alignment="start">
        <goab-button (onClick)="addFilter()">
          Add Random Filter
        </goab-button>
        <goab-button type="tertiary" (onClick)="clearAllFilters()" *ngIf="activeFilters.length > 0">
          Clear All
        </goab-button>
      </goab-button-group>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Example 3: Type to create a new filter</h2>
      <p>Type in the input and press Enter to create filter chips. Use backspace to remove the last chip when input is empty:</p>
      
      <goab-form-item label="Type to create a chip" mb="m">
        <goab-input 
          id="chipInput" 
          [value]="inputValue" 
          (onChange)="handleInputChange($event)" 
          (onKeyPress)="handleInputKeyPress($event)" 
          width="100%"
          placeholder="Type and press Enter to add filter">
        </goab-input>
      </goab-form-item>
      
      <div *ngIf="typedChips.length > 0" mb="m">
        <goab-text tag="span" color="secondary" mb="xs" mr="xs">
          Active Filters:
        </goab-text>
        <goab-filter-chip 
          *ngFor="let typedChip of typedChips" 
          [content]="typedChip" 
          mb="xs" 
          mr="xs" 
          (onClick)="removeTypedChip(typedChip)">
        </goab-filter-chip>
      </div>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <h2>Example 4: Filter data in a table</h2>
      <p>Use the search input and filter button to filter table data. Added filters appear as removable chips:</p>
      
      <goab-form-item id="filterChipInput" [error]="inputError" mb="m">
        <goab-block gap="xs" direction="row" alignment="start">
          <goab-input 
            name="filterChipInput" 
            aria-labelledby="filterChipInput" 
            [value]="tableInputValue" 
            maxlength="100" 
            size="large" 
            leadingIcon="search" 
            placeholder="Search and press Enter or click Filter"
            (onChange)="handleTableInputChange($event)" 
            (onKeyPress)="handleTableInputKeyPress($event)">
          </goab-input>
          <goab-button 
            type="secondary" 
            (onClick)="applyFilter()" 
            leadingIcon="filter">
            Filter
          </goab-button>
        </goab-block>
      </goab-form-item>

      <ng-container *ngIf="tableTypedChips.length > 0">
        <goab-text tag="span" color="secondary" mb="xs" mr="xs">
          Filter:
        </goab-text>
        <goab-filter-chip 
          *ngFor="let typedChip of tableTypedChips; let index = index" 
          [content]="typedChip" 
          mb="xs" 
          mr="xs" 
          (onClick)="removeTableTypedChip(typedChip)">
        </goab-filter-chip>
        <goab-button 
          type="tertiary" 
          size="compact" 
          mb="xs" 
          (onClick)="removeAllTableTypedChips()">
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

      <goab-block mt="l" mb="l" *ngIf="dataFiltered.length === 0 && tableData.length > 0">
        No results found. Try different filter terms or clear all filters.
      </goab-block>
    </goab-container>
  `,
})
export class FilterChipExamplesComponent {
  // Example 1: Remove a filter
  removableChips: string[] = ['Chip 1', 'Chip 2', 'Chip 3'];

  // Example 2: Add a filter chip
  activeFilters: string[] = [];

  // Example 3: Type to create a new filter
  typedChips: string[] = [];
  inputValue = "";

  // Example 4: Filter data in a table
  tableTypedChips: string[] = [];
  tableInputValue = "";
  inputError = "";
  readonly errorEmpty = "Empty filter";
  readonly errorDuplicate = "Enter a unique filter";

  readonly tableData: TableData[] = [
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

  dataFiltered = this.getFilteredData(this.tableTypedChips);

  // Example 1: Remove a filter methods
  deleteChip(chip: string): void {
    this.removableChips = this.removableChips.filter(c => c !== chip);
  }

  resetRemovableChips(): void {
    this.removableChips = ['Chip 1', 'Chip 2', 'Chip 3'];
  }

  // Example 2: Add a filter chip methods
  removeFilter(filter: string): void {
    this.activeFilters = this.activeFilters.filter(f => f !== filter);
  }

  addFilter(): void {
    const randomFilter = "Filter " + Math.floor(Math.random() * 1000);
    if (!this.activeFilters.includes(randomFilter)) {
      this.activeFilters.push(randomFilter);
    }
  }

  clearAllFilters(): void {
    this.activeFilters = [];
  }

  // Example 3: Type to create a new filter methods
  handleInputChange(detail: GoabInputOnChangeDetail): void {
    const newValue = detail.value.trim();
    this.inputValue = newValue;
  }

  handleInputKeyPress(detail: GoabInputOnKeyPressDetail): void {
    const newValue = detail.value.trim();
    if (detail.key === "Enter" && newValue !== "") {
      this.addChip();
    } else if (!this.inputValue && this.typedChips.length > 0 && detail.key === "Backspace") {
      this.typedChips.pop();
    }
  }

  addChip(): void {
    if (this.inputValue.trim()) {
      const newChip = this.inputValue.trim();
      if (!this.typedChips.includes(newChip)) {
        this.typedChips.push(newChip);
        this.inputValue = "";
      }
    }
  }

  removeTypedChip(chip: string): void {
    this.typedChips = this.typedChips.filter(c => c !== chip);
  }

  // Example 4: Filter data in a table methods
  handleTableInputChange(detail: GoabInputOnChangeDetail): void {
    const newValue = detail.value.trim();
    this.tableInputValue = newValue;
  }

  handleTableInputKeyPress(detail: GoabInputOnKeyPressDetail): void {
    if (detail.key === "Enter") {
      this.applyFilter();
    }
  }

  applyFilter(): void {
    if (this.tableInputValue === "") {
      this.inputError = this.errorEmpty;
      return;
    }
    if (this.tableTypedChips.includes(this.tableInputValue)) {
      this.inputError = this.errorDuplicate;
      return;
    }
    this.tableTypedChips = [...this.tableTypedChips, this.tableInputValue];
    this.tableInputValue = "";
    this.inputError = "";
    this.dataFiltered = this.getFilteredData(this.tableTypedChips);
  }

  removeTableTypedChip(chip: string): void {
    this.tableTypedChips = this.tableTypedChips.filter(c => c !== chip);
    this.dataFiltered = this.getFilteredData(this.tableTypedChips);
    this.inputError = "";
  }

  removeAllTableTypedChips(): void {
    this.tableTypedChips = [];
    this.dataFiltered = this.getFilteredData(this.tableTypedChips);
    this.inputError = "";
  }

  getFilteredData(typedChips: string[]) {
    if (typedChips.length === 0) {
      return this.tableData;
    }
    const filteredData = this.tableData.filter(item =>
      typedChips.every(chip => this.checkNested(item, chip))
    );
    return filteredData;
  }

  checkNested(obj: object, chip: string): boolean {
    return Object.values(obj).some(value =>
      typeof value === "object" && value !== null
        ? this.checkNested(value, chip)
        : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase())
    );
  }

  // Basic examples methods
  removeBasicChip(chipName: string): void {
    console.log(`Removed chip: ${chipName}`);
  }
}
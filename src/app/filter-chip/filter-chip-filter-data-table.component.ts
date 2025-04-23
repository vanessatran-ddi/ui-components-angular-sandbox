import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {GoabBadgeType, GoabInputOnChangeDetail, GoabInputOnKeyPressDetail} from "@abgov/ui-components-common";
import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabFilterChip,
  GoabFormItem,
  GoabInput,
  GoabTable
} from "@abgov/angular-components";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: "app-filter-chip-filter-data-table",
  templateUrl: "./filter-chip-filter-data-table.component.html",
  imports: [
    GoabFormItem,
    GoabBlock,
    GoabInput,
    GoabButton,
    NgIf,
    GoabFilterChip,
    NgForOf,
    GoabTable,
    GoabBadge
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterChipFilterDataTableComponent {
  typedChips: string[] = [];
  inputValue = "";
  inputError = "";
  readonly errorEmpty = "Empty filter";
  readonly errorDuplicate = "Enter a unique filter";
  readonly data = [
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
      typedChips.every((chip) => this.checkNested(item, chip)),
    );
    return filteredData;
  }

  checkNested(obj: object, chip: string): boolean {
    return Object.values(obj).some((value) =>
      typeof value === "object" && value !== null
        ? this.checkNested(value, chip)
        : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase()),
    );
  }
}

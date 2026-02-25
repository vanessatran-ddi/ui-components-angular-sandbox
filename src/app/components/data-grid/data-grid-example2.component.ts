import {Component} from "@angular/core";
import {
  GoabBadge,
  GoabCheckbox, GoabDataGrid,
  GoabMenuAction,
  GoabMenuButton,
  GoabTable,
  GoabTableSortHeader
} from "@abgov/angular-components";
import {GoabBadgeType} from "@abgov/ui-components-common";

@Component({
  selector: "app-data-grid-example2",
  templateUrl: "./data-grid-example2.component.html",
  imports: [
    GoabMenuButton,
    GoabMenuAction,
    GoabBadge,
    GoabCheckbox,
    GoabTableSortHeader,
    GoabTable,
    GoabDataGrid
  ],
  standalone: true
})
export class DataGridExample2 {
  applications = [
    { id: "APP-001", applicant: "John Doe", dateSubmitted: "2024-01-15", status: "Approved", amount: "$5,000" },
    { id: "APP-002", applicant: "Jane Smith", dateSubmitted: "2024-01-18", status: "Pending", amount: "$3,500" },
    { id: "APP-003", applicant: "Bob Wilson", dateSubmitted: "2024-01-20", status: "In Review", amount: "$7,200" },
  ];

  selectedIds: string[] = [];
  isSelectedAll = false;

  isSelected(id: string): boolean {
    return this.selectedIds.includes(id);
  }

  toggleSelection(id: string) {
    if (this.selectedIds.includes(id)) {
      this.selectedIds = this.selectedIds.filter(selectedId => selectedId !== id);
    } else {
      this.selectedIds = [...this.selectedIds, id];
    }
  }

  selectAll(checked: boolean) {
    this.isSelectedAll = checked;
    this.selectedIds = checked ? this.applications.map(app => app.id) : [];
  }

  handleSort(event: { sortBy: string; sortDir: number }) {
    const { sortBy, sortDir } = event;
    this.applications = [...this.applications].sort((a: any, b: any) =>
      (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
    );
  }

  getStatusBadgeType(status: string): GoabBadgeType {
    const types: Record<string, GoabBadgeType> = {
      "Approved": "success",
      "Pending": "important",
      "In Review": "information",
      "Denied": "emergency"
    };
    return types[status] || "information";
  }
}

import {Component} from "@angular/core";
import {
  GoabBadgeType,
  GoabCheckboxOnChangeDetail,
  GoabMenuButtonOnActionDetail,
  GoabTableOnSortDetail
} from "@abgov/ui-components-common";
import {
  GoabBadge,
  GoabBlock,
  GoabCheckbox,
  GoabContainer,
  GoabDataGrid,
  GoabMenuAction,
  GoabMenuButton,
  GoabTable,
  GoabTableSortHeader
} from "@abgov/angular-components";
import {DataGridExample1Component} from "./data-grid-example1.component";
import {DataGridExample2} from "./data-grid-example2.component";
import {DataGridExample3} from "./data-grid-example3.component";

type User = {
  id: string;
  name: string;
  status: string;
  email: string;
};

@Component({
  selector: "app-data-grid-sandbox",
  templateUrl: "./data-grid-sandbox.component.html",
  standalone: true,
  imports: [
    GoabBadge,
    GoabBlock,
    GoabCheckbox,
    GoabContainer,
    GoabDataGrid,
    GoabMenuAction,
    GoabMenuButton,
    GoabTable,
    GoabTableSortHeader,
    DataGridExample1Component,
    DataGridExample2,
    DataGridExample3
  ]
})
export class DataGridSandboxComponent {
  users: User[] = [
    { id: "1", name: "Alice Johnson", status: "Active", email: "alice@example.com" },
    { id: "2", name: "Bob Smith", status: "Pending", email: "bob@example.com" },
  ];
  selectedUsers: string[] = [];
  isSelectedAll = false;

  getStatusBadgeType(status: string): GoabBadgeType {
    const types: Record<string, GoabBadgeType> = {
      "Active": "success",
      "Pending": "important"
    };
    return types[status] || "information";
  }

  isSelected(userId: string): boolean {
    return this.selectedUsers.includes(userId);
  }

  handleSort(event: GoabTableOnSortDetail) {
    const { sortBy, sortDir } = event;
    this.users.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir);
  }

  selectAll(event: GoabCheckboxOnChangeDetail) {
    this.isSelectedAll = event.checked;
    this.selectedUsers = event.checked ? this.users.map(u => u.id) : [];
  }

  toggleSelection(userId: string, event: GoabCheckboxOnChangeDetail) {
    if (event.checked) {
      this.selectedUsers.push(userId);
    } else {
      this.selectedUsers = this.selectedUsers.filter(id => id !== userId);
    }
  }

  handleMenuAction(userId: string, event: GoabMenuButtonOnActionDetail) {
    if (event.action === "view") {
      console.log("View user:", userId);
    } else if (event.action === "delete") {
      this.users = this.users.filter(u => u.id !== userId);
    }
  }
}

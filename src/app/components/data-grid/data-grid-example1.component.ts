import {Component} from "@angular/core";
import {GoabBadge, GoabButton, GoabDataGrid, GoabTable} from "@abgov/angular-components";

@Component({
  selector: "app-data-grid-example1",
  standalone: true,
  templateUrl: "./data-grid-example1.component.html",
  imports: [
    GoabDataGrid,
    GoabTable,
    GoabBadge,
    GoabButton
  ]
})
export class DataGridExample1Component {
  users = [
    { id: "1", name: "Alice Johnson", role: "Developer", status: "Active" },
    { id: "2", name: "Bob Smith", role: "Designer", status: "Active" },
    { id: "3", name: "Carol White", role: "Manager", status: "Away" },
    { id: "4", name: "David Brown", role: "Analyst", status: "Active" },
  ];
}

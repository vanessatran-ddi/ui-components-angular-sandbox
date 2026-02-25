import {Component} from "@angular/core";
import {GoabBadgeType, GoabMenuButtonOnActionDetail} from "@abgov/ui-components-common";
import {
  GoabBadge,
  GoabBlock,
  GoabCheckbox,
  GoabContainer,
  GoabDataGrid, GoabMenuAction,
  GoabMenuButton
} from "@abgov/angular-components";

@Component({
  selector: "app-data-grid-example3",
  standalone: true,
  templateUrl: "./data-grid-example3.component.html",
  imports: [
    GoabDataGrid,
    GoabContainer,
    GoabBlock,
    GoabCheckbox,
    GoabBadge,
    GoabMenuButton,
    GoabMenuAction
  ]
})
export class DataGridExample3 {
  users = [
    {
      id: "1",
      name: "Mike Zwei",
      status: "Removed",
      updated: "Jun 30, 2022 at 2:30 PM",
      email: "mike.zwei@gmail.com",
      program: "Wee Wild Ones Curry",
      programId: "74528567",
      serviceAccess: "Claims Adjustments",
    },
    {
      id: "2",
      name: "Emma Stroman",
      status: "To be removed",
      updated: "Nov 28, 2021 at 1:30 PM",
      email: "emma.stroman@gmail.com",
      program: "Fort McMurray",
      programId: "74522643",
      serviceAccess: "Claims Adjustments",
    },
  ];

  getStatusBadgeType(status: string): GoabBadgeType {
    switch (status) {
      case "Removed":
        return "success";
      case "To be removed":
        return "emergency";
      default:
        return "information";
    }
  }

  handleMenuAction(userId: string, event: GoabMenuButtonOnActionDetail) {
    if (event.action === "open") {
      console.log("Open user:", userId);
    } else if (event.action === "delete") {
      console.log("Delete user:", userId);
    }
  }
}

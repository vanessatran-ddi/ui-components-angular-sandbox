import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabAppFooter,
  GoabAppFooterMetaSection,
  GoabAppHeader,
  GoabColumnLayout,
  GoabMicrositeHeader, GoabSideMenu, GoabSideMenuGroup,
} from "@abgov/angular-components";
import {FilterChipExamplesComponent} from "src/app/filter-chip/filter-chip-examples.component";
import {RouterOutlet} from "@angular/router";
import {GoabBadgeType} from "@abgov/ui-components-common";
type User = {
  idNumber: string;
  nameOfChild: string;
  dataStarted: string;
  dateSubmitted: string;
  status: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    GoabColumnLayout,
    GoabMicrositeHeader,
    GoabAppHeader,
    GoabAppFooter,
    GoabAppFooterMetaSection,
    RouterOutlet,
    GoabSideMenu,
    GoabSideMenuGroup
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  users: User[] = [
    {
      idNumber: "ABC126",
      nameOfChild: "Jeanne Volkman",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "Submitted",
    },
    {
      idNumber: "ABC125",
      nameOfChild: "Ronnie Rolfson",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "In review",
    },
    {
      idNumber: "ABC123",
      nameOfChild: "Andrea Cassin",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "Awaiting documentation",
    },
    {
      idNumber: "ABC122",
      nameOfChild: "Casey Dickinson",
      dataStarted: "Feb 19, 2023",
      dateSubmitted: "Feb 24, 2023",
      status: "Denied",
    },
    {
      idNumber: "ABC122",
      nameOfChild: "Jeanette Kulas",
      dataStarted: "Feb 19, 2023",
      dateSubmitted: "Feb 24, 2023",
      status: "Approved",
    },
    {
      idNumber: "ABC121",
      nameOfChild: "Rosalie Willms",
      dataStarted: "Feb 18, 2023",
      dateSubmitted: "Feb 23, 2023",
      status: "Closed",
    },
  ];
  _selectedUsers: string[] = [];

  deleteSelected() {
    this.users = this.users.filter((u) => !this._selectedUsers.includes(u.idNumber));
    this._selectedUsers = [];
  }

  getStatusBadgeType(status: string): GoabBadgeType {
    switch (status) {
      case 'Submitted': return 'information';
      case 'In review': return 'information';
      case 'Awaiting documentation': return "important";
      case 'Denied': return "emergency";
      case 'Approved': return 'success';
      case 'Closed': return 'information';
      default: return 'information';
    }
  }
}

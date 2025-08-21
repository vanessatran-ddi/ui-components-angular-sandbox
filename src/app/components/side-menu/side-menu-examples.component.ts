import {Component} from "@angular/core";
import {GoabBadge, GoabSideMenu, GoabSideMenuGroup, GoabSideMenuHeading} from "@abgov/angular-components";

@Component({
  selector: "app-side-menu-examples",
  standalone: true,
  templateUrl: "./side-menu-examples.component.html",
  imports: [
    GoabSideMenuHeading,
    GoabBadge,
    GoabSideMenuGroup,
    GoabSideMenu
  ]
})
export class SideMenuExamplesComponent {}

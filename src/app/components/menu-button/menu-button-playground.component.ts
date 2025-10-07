import {Component} from "@angular/core";
import {GoabMenuAction, GoabMenuButton} from "@abgov/angular-components";
import {GoabMenuButtonOnActionDetail} from "@abgov/ui-components-common";

@Component({
  selector: "app-menu-button-playground",
  standalone: true,
  templateUrl: "./menu-button-playground.component.html",
  imports: [
    GoabMenuButton,
    GoabMenuAction
  ]
})
export class MenuButtonPlaygroundComponent {
  menuOnAction(action: GoabMenuButtonOnActionDetail) {
    console.log("Last action: ", action);
  }
}

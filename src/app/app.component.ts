import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabAppFooter,
  GoabAppHeader, GoabAppHeaderMenu,
  GoabColumnLayout,
  GoabMicrositeHeader, GoabSideMenu, GoabMenuButton
} from "@abgov/angular-components";
import {RouterOutlet} from "@angular/router";
import {GoabMenuButtonOnActionDetail} from "@abgov/ui-components-common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    GoabMicrositeHeader,
    GoabAppHeader,
    GoabAppFooter,
    RouterOutlet,
    GoabSideMenu,
    GoabAppHeaderMenu,
    GoabColumnLayout,
    GoabMenuButton
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  onMenuAction(detail: GoabMenuButtonOnActionDetail) {
    console.log("Menu action triggered:", detail);
    alert(`Action: ${detail.action}`);
  }
}

import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabAppFooter,
  GoabAppHeader, GoabAppHeaderMenu,
  GoabColumnLayout,
  GoabMicrositeHeader, GoabSideMenu
} from "@abgov/angular-components";
import {RouterOutlet} from "@angular/router";

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
    GoabColumnLayout
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}

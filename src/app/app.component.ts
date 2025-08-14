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
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  imports: [
    GoabMicrositeHeader,
    GoabAppHeader,
    GoabAppFooter,
    RouterOutlet,
    GoabSideMenu,
    GoabMicrositeHeader,
    GoabAppHeader,
    GoabAppHeaderMenu,
    GoabSideMenu,
    GoabAppFooter,
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}

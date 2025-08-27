import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabAppFooter,
  GoabAppFooterMetaSection,
  GoabAppHeader,
  GoabColumnLayout, GoabInput,
  GoabMicrositeHeader, GoabSideMenu, GoabSideMenuGroup,
} from "@abgov/angular-components";
import {FilterChipExamplesComponent} from "src/app/filter-chip/filter-chip-examples.component";
import {RouterOutlet} from "@angular/router";

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
    GoabSideMenuGroup,
    GoabInput
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}

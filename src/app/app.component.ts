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
import {ModalComponent} from "src/app/modal/modal.component";
import {Issue2829Component} from "src/app/2829/issue-2829.component";

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
    ModalComponent,
    Issue2829Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}

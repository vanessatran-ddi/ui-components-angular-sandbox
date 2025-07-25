import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  GoabAppFooter,
  GoabAppFooterMetaSection,
  GoabAppHeader,
  GoabColumnLayout,
  GoabMicrositeHeader, GoabSideMenu, GoabSideMenuGroup,
} from "@abgov/angular-components";
import {FilterChipExamplesComponent} from "./filter-chip/filter-chip-examples.component";
import {RouterOutlet} from "@angular/router";
import {SimpleDatePickerComponent} from "src/app/date-picker/simple-date-picker.component";

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
    SimpleDatePickerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}

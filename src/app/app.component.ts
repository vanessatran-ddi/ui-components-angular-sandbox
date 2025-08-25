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
import {FormControl} from "@angular/forms";

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
  searchTypes = [
    {id: 'pbl', name: 'Plan, Block, Lot'},
    {id: 'titleNumber', name: 'Title number'},
    {id: 'lincNumber', name: 'LINC number'},
    {id: 'ats', name: 'Standard ATS'},
    {id: 'nonStdAts', name: 'Non-standard ATS'},
  ];
  searchTypeFormControl!: FormControl<string>;

  constructor() {}

  onSearchTypeChange(event: any) {
    console.log('TESTING:', event);
  }
}

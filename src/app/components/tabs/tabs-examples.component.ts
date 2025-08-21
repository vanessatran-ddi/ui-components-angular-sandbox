import {Component} from "@angular/core";
import {GoabBadge, GoabButton, GoabTab, GoabTable, GoabTabs} from "@abgov/angular-components";
import {NgForOf} from "@angular/common";

@Component({
  selector: "app-tabs-examples",
  standalone: true,
  templateUrl: "./tabs-examples.component.html",
  imports: [
    GoabTabs,
    GoabTab,
    GoabTable,
    GoabBadge,
    GoabButton,
    NgForOf
  ]
})
export class TabsExamplesComponent {}

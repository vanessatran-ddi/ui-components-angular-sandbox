import {Component} from "@angular/core";
import {FilterChipTypingExampleComponent} from "src/app/filter-chip/filter-chip-typing-example.component";
import {FilterDataInTableExampleComponent} from "src/app/filter-chip/filter-data-in-table-example.component";

@Component({
  selector: "app-filter-chip-examples",
  templateUrl: "./filter-chip-examples.component.html",
  standalone: true,
  imports: [
    FilterChipTypingExampleComponent,
    FilterDataInTableExampleComponent
  ]
})
export class FilterChipExamplesComponent {}

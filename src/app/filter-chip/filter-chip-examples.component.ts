import {Component} from "@angular/core";
import {FilterChipTypingExampleComponent} from "./filter-chip-typing-example.component";
import {FilterChipFilterDataTableComponent} from "src/app/filter-chip/filter-chip-filter-data-table.component";

@Component({
    selector: 'app-filter-chip-examples',
    templateUrl: './filter-chip-examples.component.html',
    imports: [
        FilterChipTypingExampleComponent,
        FilterChipFilterDataTableComponent
    ]
})
export class FilterChipExamplesComponent {}

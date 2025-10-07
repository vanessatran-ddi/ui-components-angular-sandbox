import {Component} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GoabCheckboxListOnChangeDetail} from "@abgov/ui-components-common";
import {GoabCheckbox, GoabCheckboxList} from "@abgov/angular-components";

@Component({
  selector: "app-checkbox-list-playground",
  standalone: true,
  templateUrl: "./checkbox-list-playground.component.html",
  imports: [
    ReactiveFormsModule,
    GoabCheckboxList,
    GoabCheckbox
  ]
})
export class CheckboxListPlaygroundComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      transportation: this.fb.control<string[] | null>([]),
    });
  }

  basicSelection: string[] = [];

  onRequiredSelectionChange(event: GoabCheckboxListOnChangeDetail) {
    console.log(event);
    this.basicSelection = event.value;
  }
}

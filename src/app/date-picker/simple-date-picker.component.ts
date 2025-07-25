import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoabButton, GoabDatePicker, GoabFormItem } from "@abgov/angular-components";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";

@Component({
  selector: "app-simple-date-picker",
  templateUrl: "./simple-date-picker.component.html",
  standalone: true,
  imports: [
    GoabDatePicker,
    GoabFormItem,
    FormsModule,
    ReactiveFormsModule,
    GoabButton
  ]
})
export class SimpleDatePickerComponent {

  item: Date|undefined = new Date();
  dateOnChange(event: GoabDatePickerOnChangeDetail) {
    // handle change
    console.log(event.value);
  }



  selectedDate: undefined|Date = new Date();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      datePicker: new FormControl()
    });

  }

  handleDateChange(event: GoabDatePickerOnChangeDetail) {
    console.log("selected date: ", event);
  }

  reset() {
    // this.form.reset();
    this.form.setValue({"datePicker": ""});
    this.item = undefined;
  }
}

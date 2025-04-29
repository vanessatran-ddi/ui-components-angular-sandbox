import { Component } from "@angular/core";
import {GoabDatePicker, GoabDatePickerOnChangeDetail, GoabFormItem} from "@abgov/angular-components";

@Component({
  selector: "app-simple-date-picker",
  templateUrl: "./simple-date-picker.component.html",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabDatePicker
  ]
})
export class SimpleDatePickerComponent {
  value: Date|undefined = new Date();
  dateOnChange(event: GoabDatePickerOnChangeDetail) {
    this.value = event.value as Date;
  }
}

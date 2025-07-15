import { Component } from "@angular/core";
import {
  GoabBlock,
  GoabDatePicker,
  GoabDatePickerOnChangeDetail,
  GoabFormItem,
  GoabText
} from "@abgov/angular-components";

@Component({
  selector: "app-simple-date-picker",
  templateUrl: "./simple-date-picker.component.html",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabDatePicker,
    GoabBlock,
    GoabText
  ]
})
export class SimpleDatePickerComponent {
  // Calculate min and max dates (one month before and after today)
  today = new Date();
  minDate = new Date(
    this.today.getFullYear(),
    this.today.getMonth() - 1,
    this.today.getDate(),
  );
  maxDate = new Date(
    this.today.getFullYear(),
    this.today.getMonth() + 1,
    this.today.getDate(),
  );

  handleDateChange(detail: GoabDatePickerOnChangeDetail): void {
    console.log("DatePicker onChange event:", detail);
  }
}

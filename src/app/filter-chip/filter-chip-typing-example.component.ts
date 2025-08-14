import {Component} from "@angular/core";
import {GoabInputOnChangeDetail, GoabInputOnKeyPressDetail} from "@abgov/ui-components-common";
import {GoabFilterChip, GoabFormItem, GoabInput} from "@abgov/angular-components";


@Component({
    selector: 'app-filter-chip-typing-example',
    templateUrl: './filter-chip-typing-example.component.html',
    imports: [
    GoabFilterChip,
    GoabInput,
    GoabFormItem
]
})
export class FilterChipTypingExampleComponent {
  typedChips: string[] = [];
  inputValue = "";

  handleInputChange(detail: GoabInputOnChangeDetail): void {
    const newValue = detail.value.trim();
    this.inputValue = newValue;
  }

  handleInputKeyPress(detail: GoabInputOnKeyPressDetail): void {
    console.log("detail ", detail);
    const newValue = detail.value.trim();
    if (detail.key === "Enter" && newValue !== "") {
      this.addChip();
    } else if (!this.inputValue && this.typedChips.length > 0 && detail.key === "Backspace") {
      this.typedChips.pop();
    }
  }

  addChip(): void {
    if (this.inputValue.trim()) {
      this.typedChips.push(this.inputValue.trim());
      this.inputValue = "";
    }
  }

  removeTypedChip(chip: string): void {
    this.typedChips = this.typedChips.filter((c) => c !== chip);
  }
}

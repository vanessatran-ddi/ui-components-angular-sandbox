import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: "app-filter-chip-typing-example",
  templateUrl: "./filter-chip-typing-example.component.html",
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterChipTypingExampleComponent {
  typedChips: string[] = [];
  inputValue = "";

  handleInputChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value.trim();
    this.inputValue = newValue;
  }

  handleInputKeyPress(event: KeyboardEvent): void {
    const newValue = (event.target as HTMLInputElement).value.trim();
    if (event.key === "Enter" && newValue !== "") {
      this.addChip();
    } else if (!this.inputValue && this.typedChips.length > 0 && event.key === "Backspace") {
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

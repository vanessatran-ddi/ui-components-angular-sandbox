import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  GoabButton,
  GoabButtonGroup,
  GoabCheckbox,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabRadioGroup, GoabRadioItem, GoabTextArea,
} from "@abgov/angular-components";

@Component({
  selector: "app-issue-3072-input",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GoabInput,
    GoabFormItem,
    GoabDropdown,
    GoabDropdownItem,
    GoabCheckbox,
    GoabRadioGroup,
    GoabRadioItem,
    GoabTextArea,
    GoabButtonGroup,
    GoabButton,
  ],
  templateUrl: "./reset-input.component.html",
})
export class ResetInputComponent {
  testForm: FormGroup;
  resetCount = 0;

  fruitOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
  ];

  colorOptions = [
    { text: "Red", value: "red" },
    { text: "Blue", value: "blue" },
    { text: "Green", value: "green" },
    { text: "Yellow", value: "yellow" },
  ];

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      textInput: [""],
      numberInput: [null],
      emailInput: [""],
      dropdown: [""],
      checkbox: [false],
      radioGroup: [""],
      textarea: [""],
    });
  }

  onReset() {
    this.resetCount++;
    this.testForm.reset();
  }

  onResetWithValues() {
    this.resetCount++;
    this.testForm.reset({
      textInput: "Default Text",
      numberInput: 42,
      emailInput: "test@example.com",
      dropdown: "banana",
      checkbox: true,
      radioGroup: "blue",
      textarea: "Default textarea content",
    });
  }

  onSetSpecificValues() {
    this.testForm.patchValue({
      textInput: "Patched Value",
      numberInput: 123,
      emailInput: "patched@example.com",
      dropdown: "grape",
      checkbox: false,
      radioGroup: "green",
      textarea: "Patched textarea text",
    });
  }

  getCurrentValues() {
    return JSON.stringify(this.testForm.value, null, 2);
  }
}

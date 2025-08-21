import {GoabFormState, PublicFormController, requiredValidator} from "@abgov/ui-components-common";
import {Component} from "@angular/core";
import {
  GoabButton,
  GoabButtonGroup,
  GoabFieldset,
  GoabFormItem, GoabModal,
  GoabPublicForm,
  GoabPublicFormPage, GoabPublicFormSummary,
  GoabRadioGroup, GoabRadioItem
} from "@abgov/angular-components";
type Page = "survey" | "summary";
@Component({
  selector: "app-public-form-radio",
  standalone: true,
  templateUrl: "./public-form-radio.component.html",
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabPublicFormSummary,
    GoabModal,
    GoabButtonGroup,
    GoabButton
  ]
})
export class PublicFormRadioComponent extends PublicFormController<Page> {
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;

  showConfirmation(state: GoabFormState) {
    console.log("Radio form completed with state:", state);
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    console.log("Radio form submitted");
    this._showConfirmationModal = false;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    switch (from) {
      case "survey":
        dest = this.validateSurvey(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  validateSurvey(e: Event): Page | undefined {
    const [satisfactionOk] = this.validate(e, "satisfaction", [
      requiredValidator("Satisfaction rating is required"),
    ]);
    const [frequencyOk] = this.validate(e, "frequency", [
      requiredValidator("Usage frequency is required"),
    ]);
    if (!satisfactionOk || !frequencyOk) {
      return;
    }
    return "summary";
  }
}

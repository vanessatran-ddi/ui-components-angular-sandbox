import {GoabFormState, PublicFormController, requiredValidator} from "@abgov/ui-components-common";
import {Component} from "@angular/core";
import {
  GoabButton,
  GoabButtonGroup,
  GoabFieldset,
  GoabFormItem, GoabModal,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabTextArea
} from "@abgov/angular-components";
type Page = "feedback" | "summary";
@Component({
  selector: "app-public-form-textarea",
  standalone: true,
  templateUrl: "./public-form-textarea.component.html",
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabTextArea,
    GoabPublicFormSummary,
    GoabModal,
    GoabButtonGroup,
    GoabButton
  ]
})
export class PublicFormTextAreaComponent extends PublicFormController<Page>  {
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;

  showConfirmation(state: GoabFormState) {
    console.log("TextArea form completed with state:", state);
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    console.log("TextArea form submitted");
    this._showConfirmationModal = false;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    switch (from) {
      case "feedback":
        dest = this.validateFeedback(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  validateFeedback(e: Event): Page | undefined {
    const [commentsOk] = this.validate(e, "comments", [
      requiredValidator("Comments are required"),
    ]);
    if (!commentsOk) {
      return;
    }
    return "summary";
  }
}

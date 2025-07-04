import { Component } from "@angular/core";
import { GoabButton, GoabIcon, GoabModal, GoabButtonGroup, GoabFormItem, GoabTextArea, GoabDropdown, GoabDropdownItem, GoabInput } from "@abgov/angular-components";
import {GoabDropdownOnChangeDetail, GoabInputOnChangeDetail, GoabTextAreaOnChangeDetail} from "@abgov/ui-components-common";
@Component({
  selector: "app-issue-2829",
  templateUrl: "./issue-2829.component.html",
  standalone: true,
  imports: [GoabIcon, GoabModal, GoabButton, GoabButton, GoabTextArea, GoabFormItem, GoabButtonGroup, GoabDropdown, GoabDropdownItem, GoabInput],
})
export class Issue2829Component {
  openAlertDialogModal = false;
  openDialogModal = false;

  openAlertDialog() {
    this.openAlertDialogModal = true;
  }

  closeAlertDialog() {
    this.openAlertDialogModal = false;
  }

  openDialog() {
    this.openDialogModal = true;
  }

  closeDialog() {
    this.openDialogModal = false;
  }

  open1 = false;
  type1: string|undefined = "";
  name1 = "";
  description1 = "";

  toggleModal1() {
    this.open1 = !this.open1;
  }

  openModal1() {
    this.open1 = true;
  }

  closeModal1() {
    this.open1 = false;
  }

  updateType1(event: GoabDropdownOnChangeDetail) {
    this.type1 = event.value;
  }

  updateName1(event: GoabInputOnChangeDetail) {
    this.name1 = event.value;
  }

  updateDescription1(event: GoabTextAreaOnChangeDetail) {
    this.description1 = event.value;
  }

  open = false;
  type: string|undefined = "";
  name = "";
  description = "";

  toggleModal() {
    this.open = !this.open;
  }

  updateType(event: GoabDropdownOnChangeDetail) {
    this.type = event.value;
  }

  updateName(event: GoabInputOnChangeDetail) {
    this.name = event.value;
  }

  updateDescription(event: GoabTextAreaOnChangeDetail) {
    this.description = event.value;
  }
}

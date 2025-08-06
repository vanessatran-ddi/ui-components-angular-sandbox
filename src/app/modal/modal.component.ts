import {
  GoabButton,
  GoabButtonGroup,
  GoabModal,
} from '@abgov/angular-components';
import { Component } from '@angular/core';
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    imports: [GoabButton, GoabModal, GoabButtonGroup]
})
export class ModalComponent {
  open = false;
  toggleModal() {
    this.open = !this.open;
  }
}

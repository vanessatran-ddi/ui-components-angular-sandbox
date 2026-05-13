import {
  GoabButton,
  GoabButtonGroup,
  GoabModal,
} from '@abgov/angular-components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [GoabButton, GoabModal, GoabButtonGroup],
})
export class ModalComponent {
  // Mirrors ui-components/apps/prs/angular/.../feat3347 Test 7 so the modal
  // running against the production @abgov/angular-components package can be
  // compared visually against the local refactored Modal V2 (scroll-panel
  // internal) in the ui-components repo.
  paragraphs = Array.from({ length: 25 }, (_, i) => i + 1);
  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}

import { Component } from "@angular/core";
import {
  GoabButton,
  GoabButtonGroup,
  GoabDrawer,
} from "@abgov/angular-components";

@Component({
  selector: "app-drawer-v2-scroll-panel",
  standalone: true,
  imports: [GoabButton, GoabButtonGroup, GoabDrawer],
  templateUrl: "./drawer-v2-scroll-panel.component.html",
})
export class DrawerV2ScrollPanelComponent {
  paragraphs = Array.from({ length: 25 }, (_, i) => i + 1);
  drawerOpen = false;

  openDrawer() {
    this.drawerOpen = true;
  }

  closeDrawer() {
    this.drawerOpen = false;
  }
}

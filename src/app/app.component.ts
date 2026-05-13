import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import {
  GoabWorkSideMenu,
  GoabWorkSideMenuGroup,
  GoabWorkSideMenuItem,
} from "@abgov/angular-components";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [
    RouterOutlet,
    GoabWorkSideMenu,
    GoabWorkSideMenuGroup,
    GoabWorkSideMenuItem,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  private router = inject(Router);

  handleNavigate(url: string): void {
    if (!url || url === "#") return;
    this.router.navigateByUrl(url);
  }
}

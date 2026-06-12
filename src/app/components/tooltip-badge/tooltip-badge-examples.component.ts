import { Component, signal } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabContainer,
  GoabSpacer,
  GoabTable,
  GoabTooltip,
} from "@abgov/angular-components";
import { GoabBadgeType } from "@abgov/ui-components-common";

interface ApplicationRow {
  id: number;
  name: string;
  status: { type: GoabBadgeType; content: string };
  // The per-row condition. When a row has a reason, we want to explain
  // the status with a tooltip. When it is undefined, the badge must look
  // and behave like a plain badge (no cursor, no focus ring, no hover box).
  reason?: string;
}

// Two snapshots simulating an API that refreshes the table.
const SNAPSHOT_A: ApplicationRow[] = [
  { id: 1, name: "Jane Doe", status: { type: "important", content: "Pending" }, reason: "Waiting on manager approval since Jun 2." },
  { id: 2, name: "John Smith", status: { type: "success", content: "Complete" } },
  { id: 3, name: "Acme Corp", status: { type: "emergency", content: "Failed" }, reason: "Payment declined: insufficient funds." },
  { id: 4, name: "Mary Major", status: { type: "information", content: "In progress" } },
];

const SNAPSHOT_B: ApplicationRow[] = [
  { id: 5, name: "Carlos Reyes", status: { type: "success", content: "Complete" } },
  { id: 6, name: "Priya Patel", status: { type: "emergency", content: "Failed" }, reason: "Document rejected: missing signature." },
  { id: 7, name: "Liu Wei", status: { type: "important", content: "Pending" }, reason: "Held for fraud review." },
  { id: 8, name: "Sam Bell", status: { type: "information", content: "In progress" } },
];

@Component({
  selector: "app-tooltip-badge-examples",
  standalone: true,
  imports: [GoabContainer, GoabBadge, GoabTooltip, GoabTable, GoabButton, GoabBlock, GoabSpacer, NgTemplateOutlet],
  template: `
    <goab-container>
      <h1>Conditionally show a Tooltip over a Badge (per table row)</h1>
      <p>
        Question: in a goa table that refreshes from an API, show a tooltip on a
        badge only when a per-row condition is true. Angular 21, design system v2.
      </p>

      <goab-block direction="row" gap="m" mb="l">
        <goab-button type="primary" (onClick)="refresh()">Refresh from "API"</goab-button>
        <goab-badge type="information" [content]="'snapshot ' + (toggle() ? 'B' : 'A')"></goab-badge>
      </goab-block>

      <goab-spacer vSpacing="l"></goab-spacer>

      <!-- ===================================================================== -->
      <h2>❌ Doesn't work: conditionally emptying the tooltip content</h2>
      <p>
        Wrapping every badge and only changing <code>content</code> does NOT hide the
        tooltip. Hover a row with no reason (John, Mary): an empty grey box still
        appears, and every badge gets a pointer cursor + focus ring + extra gap,
        because the tooltip wrapper element is always in the DOM.
      </p>

      <goab-table width="100%">
        <thead>
          <tr><th>Status</th><th>Name</th></tr>
        </thead>
        <tbody>
          @for (row of rows(); track row.id) {
            <tr>
              <td>
                <goab-tooltip [content]="row.reason ?? ''">
                  <goab-badge [type]="row.status.type" [content]="row.status.content"></goab-badge>
                </goab-tooltip>
              </td>
              <td>{{ row.name }}</td>
            </tr>
          }
        </tbody>
      </goab-table>

      <goab-spacer vSpacing="xl"></goab-spacer>

      <!-- ===================================================================== -->
      <h2>✅ Recommended: conditionally render the tooltip element with &#64;if / &#64;else</h2>
      <p>
        Render the <code>goab-tooltip</code> only when the condition is true. The badge
        markup is shared via an <code>ng-template</code> so it isn't duplicated. Hover
        John / Mary: plain badge, no box, no pointer, not focusable.
      </p>

      <goab-table width="100%">
        <thead>
          <tr><th>Status</th><th>Name</th></tr>
        </thead>
        <tbody>
          @for (row of rows(); track row.id) {
            <tr>
              <td>
                <!-- Shared badge markup, scoped to this row iteration -->
                <ng-template #badge>
                  <goab-badge [type]="row.status.type" [content]="row.status.content"></goab-badge>
                </ng-template>

                @if (row.reason) {
                  <goab-tooltip [content]="row.reason" position="top">
                    <ng-container [ngTemplateOutlet]="badge"></ng-container>
                  </goab-tooltip>
                } @else {
                  <ng-container [ngTemplateOutlet]="badge"></ng-container>
                }
              </td>
              <td>{{ row.name }}</td>
            </tr>
          }
        </tbody>
      </goab-table>
    </goab-container>
  `,
})
export class TooltipBadgeExamplesComponent {
  toggle = signal(false);
  rows = signal<ApplicationRow[]>(SNAPSHOT_A);

  refresh(): void {
    this.toggle.update((v) => !v);
    this.rows.set(this.toggle() ? SNAPSHOT_B : SNAPSHOT_A);
  }
}

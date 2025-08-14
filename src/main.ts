import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import '@abgov/web-components';
import {DatePickerExamplesComponent} from "./app/date-picker/date-picker-examples.component";
import {DropdownComponent} from "./app/components/dropdown/dropdown.component";
import {DropdownExamplesComponent} from "./app/components/dropdown/dropdown-examples.component";
import {FileUploaderExamplesComponent} from "./app/components/file-uploader/file-uploader-examples.component";
import {InputExamplesComponent} from "./app/components/input/input-examples.component";
import {DropdownAddItemDynamicallyComponent} from "./app/components/dropdown/dropdown-add-item-dynamically.component";
import {DropdownDynamicItemsComponent} from "./app/components/dropdown/dropdown-dynamic-items.component";
import {AccordionExamplesComponent} from "./app/components/accordion/accordion-examples.component";
import {CalloutExamplesComponent} from "./app/components/callout/callout-examples.component";
import {ContainerExamplesComponent} from "./app/components/container/container-examples.component";
import {DetailsExamplesComponent} from "./app/components/details/details-examples.component";
import {HeroBannerExamplesComponent} from "./app/components/hero-banner/hero-banner-examples.component";
import {ListExamplesComponent} from "./app/components/list/list-examples.component";
import {PopoverExamplesComponent} from "./app/components/popover/popover-examples.component";
import {TableExamplesComponent} from "./app/components/table/table-examples.component";
import {TextExamplesComponent} from "./app/components/text/text-examples.component";
import {BadgeExamplesComponent} from "./app/components/badge/badge-examples.component";
import {FilterChipExamplesComponent} from "./app/components/filter-chip/filter-chip-examples.component";
import {ModalExamplesComponent} from "./app/components/modal/modal-examples.component";
import {NotificationBannerExamplesComponent} from "./app/components/notification-banner/notification-banner-examples.component";
import {ProgressIndicatorExamplesComponent} from "./app/components/progress-indicator/progress-indicator-examples.component";
import {SkeletonLoaderExamplesComponent} from "./app/components/skeleton-loader/skeleton-loader-examples.component";
import {TemporaryNotificationExamplesComponent} from "./app/components/temporary-notification/temporary-notification-examples.component";
import {TooltipExamplesComponent} from "./app/components/tooltip/tooltip-examples.component";
import {ButtonExamplesComponent} from "./app/components/button/button-examples.component";
import {CheckboxExamplesComponent} from "./app/components/checkbox/checkbox-examples.component";

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: 'date-picker', component: DatePickerExamplesComponent},
  { path: 'modal', component: ModalExamplesComponent},
  { path: 'dropdown', component: DropdownExamplesComponent},
  { path: 'dropdown-old', component: DropdownComponent},
  { path: 'file-uploader', component: FileUploaderExamplesComponent},
  { path: 'input', component: InputExamplesComponent},
  { path: 'dropdown-add-item-dynamically', component: DropdownAddItemDynamicallyComponent},
  { path: 'dropdown-dynamic-items', component: DropdownDynamicItemsComponent},
  { path: 'accordion', component: AccordionExamplesComponent},
  { path: 'callout', component: CalloutExamplesComponent},
  { path: 'container', component: ContainerExamplesComponent},
  { path: 'details', component: DetailsExamplesComponent},
  { path: 'hero-banner', component: HeroBannerExamplesComponent},
  { path: 'list', component: ListExamplesComponent},
  { path: 'popover', component: PopoverExamplesComponent},
  { path: 'table', component: TableExamplesComponent},
  { path: 'text', component: TextExamplesComponent},
  { path: 'badge', component: BadgeExamplesComponent},
  { path: 'filter-chip', component: FilterChipExamplesComponent},
  { path: 'notification-banner', component: NotificationBannerExamplesComponent},
  { path: 'progress-indicator', component: ProgressIndicatorExamplesComponent},
  { path: 'skeleton-loader', component: SkeletonLoaderExamplesComponent},
  { path: 'temporary-notification', component: TemporaryNotificationExamplesComponent},
  { path: 'tooltip', component: TooltipExamplesComponent},
  { path: 'button', component: ButtonExamplesComponent},
  { path: 'checkbox', component: CheckboxExamplesComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

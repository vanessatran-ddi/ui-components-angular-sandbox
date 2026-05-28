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
import {RadioExamplesComponent} from "./app/components/radio/radio-examples.component";
import {TextAreaExamplesComponent} from "./app/components/text-area/text-area-examples.component";
import {DrawerExamplesComponent} from "./app/components/drawer/drawer-examples.component";
import {DrawerV2ScrollPanelComponent} from "./app/components/drawer/drawer-v2-scroll-panel.component";
import {FooterExamplesComponent} from "./app/components/footer/footer-examples.component";
import {HeaderExamplesComponent} from "./app/components/header/header-examples.component";
import {AppHeaderExamplesComponent} from "./app/components/app-header/app-header-examples.component";
import {MicrositeHeaderExamplesComponent} from "./app/components/microsite-header/microsite-header-examples.component";
import {PaginationExamplesComponent} from "./app/components/pagination/pagination-examples.component";
import {SideMenuExamplesComponent} from "./app/components/side-menu/side-menu-examples.component";
import {TabsExamplesComponent} from "./app/components/tabs/tabs-examples.component";
import {BlockExamplesComponent} from "./app/components/blocks/block-examples.component";
import {PublicFormFullPageComponent} from "./app/components/public-form/public-form-full-page.component";
import {PublicFormCheckboxComponent} from "./app/components/public-form/public-form-checkbox.component";
import {PublicFormDatepickerComponent} from "./app/components/public-form/public-form-datepicker.component";
import {PublicFormDropdownComponent} from "./app/components/public-form/public-form-dropdown.component";
import {PublicFormRadioComponent} from "./app/components/public-form/public-form-radio.component";
import {PublicFormTextAreaComponent} from "./app/components/public-form/public-form-textarea.component";
import {PublicFormSubformComponent} from "./app/components/public-form/public-form-subform.component";
import {MenuButtonPlaygroundComponent} from "./app/components/menu-button/menu-button-playground.component";
import {CheckboxListPlaygroundComponent} from "src/app/components/checkbox-list/checkbox-list-playground.component";
import {DataGridSandboxComponent} from "./app/components/data-grid/data-grid-sandbox.component";
import {FindYourCareComponent} from "./app/components/find-your-care/find-your-care.component";

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
  { path: 'menu-button', component: MenuButtonPlaygroundComponent},
  { path: 'checkbox', component: CheckboxExamplesComponent},
  { path: "checkbox-list", component: CheckboxListPlaygroundComponent},
  { path: 'radio', component: RadioExamplesComponent},
  { path: 'text-area', component: TextAreaExamplesComponent},
  { path: 'drawer', component: DrawerExamplesComponent},
  { path: 'drawer-v2-scroll-panel', component: DrawerV2ScrollPanelComponent},
  { path: 'footer', component: FooterExamplesComponent},
  { path: 'header', component: HeaderExamplesComponent},
  { path: 'app-header', component: AppHeaderExamplesComponent},
  { path: 'microsite-header', component: MicrositeHeaderExamplesComponent},
  { path: 'pagination', component: PaginationExamplesComponent},
  { path: "side-menu", component: SideMenuExamplesComponent},
  { path: "tabs", component: TabsExamplesComponent},
  { path: "blocks", component: BlockExamplesComponent},
  { path: "full-public-form-page", component: PublicFormFullPageComponent},
  { path: "public-form-checkbox", component: PublicFormCheckboxComponent},
  { path: "public-form-datepicker", component: PublicFormDatepickerComponent},
  { path: "public-form-dropdown", component: PublicFormDropdownComponent},
  { path: "public-form-radio", component: PublicFormRadioComponent},
  { path: "public-form-textarea", component: PublicFormTextAreaComponent},
  { path: "public-form-sub-form", component: PublicFormSubformComponent},
  { path: "data-grid", component: DataGridSandboxComponent},
  { path: "find-your-care", component: FindYourCareComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

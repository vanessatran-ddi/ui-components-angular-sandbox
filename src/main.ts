import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import '@abgov/web-components';
import { FilterChipExamplesComponent } from './app/filter-chip/filter-chip-examples.component';
import {ModalComponent} from "./app/modal/modal.component";
import {SimpleDatePickerComponent} from "./app/date-picker/simple-date-picker.component";

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: 'filter-chip', component: FilterChipExamplesComponent },
  { path: 'date-picker', component: SimpleDatePickerComponent},
  { path: 'modal', component: ModalComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

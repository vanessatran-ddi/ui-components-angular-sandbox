import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import '@abgov/web-components';
import { FilterChipExamplesComponent } from './app/filter-chip/filter-chip-examples.component';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: 'filter-chip', component: FilterChipExamplesComponent },
  { path: '', redirectTo: '/filter-chip', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

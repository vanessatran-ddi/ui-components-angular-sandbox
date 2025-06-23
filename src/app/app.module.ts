import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@abgov/web-components';
import {
  AngularComponentsModule,
  GoabAppFooter,
  GoabAppHeader, GoabBlock,
  GoabColumnLayout, GoabFormItem, GoabInput, GoabInputNumber,
  GoabMicrositeHeader, GoabButton, GoabPopover, GoabIconButton
} from '@abgov/angular-components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularComponentsModule,
    GoabColumnLayout,
    GoabMicrositeHeader,
    GoabAppHeader,
    GoabAppFooter,
    GoabBlock,
    GoabFormItem,
    GoabInput,
    GoabInputNumber,
    GoabPopover,
    GoabButton,
    GoabIconButton
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

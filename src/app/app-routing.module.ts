import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilterChipExamplesComponent} from "./filter-chip/filter-chip-examples.component";

const routes: Routes = [
  { path: "filter-chip", component: FilterChipExamplesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

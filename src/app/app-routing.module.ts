import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportOrderDetailsComponent } from './public-form/SupportOrderDetails';

const routes: Routes = [
  { path: '', component: SupportOrderDetailsComponent },
  { path: 'fsos', component: SupportOrderDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

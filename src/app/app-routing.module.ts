import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigatorComponent } from './navigator/navigator.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'navigator', component: NavigatorComponent },
  { path: '', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { UdalostListComponent } from './udalost-list/udalost-list.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'udalosti-list', component: UdalostListComponent }, //,
  // { path: 'udalosti-new', component: HeroListComponent },
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {};
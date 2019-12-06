import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  JobsListComponent,
  JobDetailComponent,
  JobUpdateComponent
} from './components';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: JobsListComponent },
  { path: 'detail/:id', component: JobDetailComponent },
  { path: 'update/:id', component: JobUpdateComponent },
  { path: 'create', component: JobUpdateComponent },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }

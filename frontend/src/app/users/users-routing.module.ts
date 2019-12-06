import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  UsersListComponent,
  UserDetailComponent,
  UserUpdateComponent
} from './components';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: UsersListComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'update/:id', component: UserUpdateComponent },
  { path: 'create', component: UserUpdateComponent },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

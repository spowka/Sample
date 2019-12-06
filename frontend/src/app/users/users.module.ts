import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { reducers, effects } from './@store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  UsersListComponent,
  UserDetailComponent,
  UserUpdateComponent,
} from './components';

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class UsersModule { }

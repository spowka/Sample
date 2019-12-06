import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { reducers, effects } from './@store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  JobsListComponent,
  JobDetailComponent,
  JobUpdateComponent,
} from './components';


@NgModule({
  declarations: [
    JobsListComponent,
    JobDetailComponent,
    JobUpdateComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('jobs', reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class JobsModule { }

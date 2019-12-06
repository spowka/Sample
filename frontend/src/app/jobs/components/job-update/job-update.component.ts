import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import * as fromRoot from 'src/app/@store';
import * as fromJobs from 'src/app/jobs/@store';

import { JobModel } from '../../models';
import { select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.scss']
})
export class JobUpdateComponent implements OnInit, OnDestroy {
  public jobs$: Observable<JobModel[]>;

  public isLoading$: Observable<boolean>;

  public selectedJob$: Observable<JobModel>;

  public jobForm: FormGroup;

  public id: number;

  public isNew = false;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.jobs$ = this.store.pipe(select(fromJobs.selectJobs));
    this.isLoading$ = this.store.pipe(select(fromJobs.selectLoading));
    this.selectedJob$ = this.store.pipe(select(fromJobs.selectSelectedJob));

    this.jobForm = this.fb.group({
      title: [{ value: '', disabled: true }, Validators.compose([Validators.required, Validators.minLength(1)])],
      description: [{ value: '', disabled: true }],
    });
  }

  ngOnInit() {
    this.jobs$.pipe(takeUntil(this.unsubscribe$)).subscribe(jobs => {
      if (!jobs) {
        return this.store.dispatch(new fromJobs.LoadJobs());
      }
    });

    if (this.route.routeConfig.path === 'create') {
      // create
      this.jobForm.enable();
      return this.isNew = true;
    }

    // update
    this.route.paramMap.pipe(take(1)).subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });

    this.selectedJob$.pipe(takeUntil(this.unsubscribe$)).subscribe(selectedJob => {
      if (!selectedJob || (selectedJob && selectedJob.id !== this.id)) {
        return this.store.dispatch(new fromJobs.LoadJob(this.id));
      }

      this.jobForm.patchValue({
        title: selectedJob.title,
        description: selectedJob.description,
      });
      this.jobForm.enable();
    });
  }

  onSave(): void {
    if (!this.jobForm.valid) {
      return;
    }

    // create
    if (this.isNew) {
      const job: JobModel = {
        title: this.jobForm.get('title').value,
        description: this.jobForm.get('description').value
      };

      return this.store.dispatch(new fromJobs.CreateJob(job));
    }

    // update
    this.store.dispatch(new fromJobs.UpdateJob({
      id: this.id,
      data: this.jobForm.value,
    }));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

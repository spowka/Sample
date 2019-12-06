import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import * as fromRoot from 'src/app/@store';
import * as fromJobs from 'src/app/jobs/@store';

import { JobModel } from '../../models';
import { select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;

  public job: JobModel;

  public id: number;

  private _selectedJob$: Observable<JobModel>;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
  ) {
    this.isLoading$ = this.store.pipe(select(fromJobs.selectLoading));
    this._selectedJob$ = this.store.pipe(select(fromJobs.selectSelectedJob));
  }

  ngOnInit() {
    this.route.paramMap.pipe(take(1)).subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });

    this._selectedJob$.pipe(takeUntil(this.unsubscribe$)).subscribe(selectedJob => {
      if (!selectedJob || (selectedJob && selectedJob.id !== this.id)) {
        return this.store.dispatch(new fromJobs.LoadJob(this.id));
      }

      this.job = selectedJob;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import * as fromRoot from 'src/app/@store';
import * as fromJobs from 'src/app/jobs/@store';
import { JobModel } from '../../models';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit, OnDestroy {
  public jobs$: Observable<JobModel[]>;

  public isLoading$: Observable<boolean>;

  public displayedColumns: string[] = ['id', 'title', 'description', 'createdAt', 'updatedAt', 'actions'];

  public dataSource: JobModel[] = [];

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private store: Store<fromRoot.State>) {
    this.jobs$ = this.store.pipe(select(fromJobs.selectJobs));
    this.isLoading$ = this.store.pipe(select(fromJobs.selectLoading));
  }

  ngOnInit() {
    this.jobs$.pipe(takeUntil(this.unsubscribe$)).subscribe(jobs => {
      if (!jobs) {
        return this.store.dispatch(new fromJobs.LoadJobs());
      }

      this.dataSource = jobs;
    });
  }

  onDelete(id: string): void {
    if (!id) {
      return;
    }

    return this.store.dispatch(new fromJobs.DeleteJob(id));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

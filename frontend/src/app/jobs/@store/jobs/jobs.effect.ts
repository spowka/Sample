import { JobsService } from '../../services/jobs.service';
import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, Observable, from } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import * as fromRoot from 'src/app/@store';
import * as fromActions from './jobs.action';
import { Store } from '@ngrx/store';

@Injectable()
export class JobsEffects {

  constructor(
    private actions$: Actions,
    private jobsService: JobsService,
    private toast: ToastrService,
    private store: Store<fromRoot.State>
  ) { }

  @Effect()
  loadJobs$: Observable<fromActions.LoadJobsSuccess | fromActions.LoadJobsFail> = this.actions$
    .pipe(
      ofType(fromActions.LOAD_JOBS),
      exhaustMap(_ => {
        return from(this.jobsService.getJobs()).pipe(
          map((res) => {
            if (res['data']) {
              return new fromActions.LoadJobsSuccess(res['data']);
            }
            return new fromActions.LoadJobsFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.LoadJobsFail(res));
          })
        );
      })
    );

  @Effect()
  loadJob$: Observable<fromActions.LoadJobSuccess | fromActions.LoadJobFail> = this.actions$
    .pipe(
      ofType(fromActions.LOAD_JOB),
      exhaustMap(action => {
        return from(this.jobsService.getJob(action['payload'])).pipe(
          map((res) => {
            if (res) {
              return new fromActions.LoadJobSuccess(res);
            }
            return new fromActions.LoadJobFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.LoadJobFail(res));
          })
        );
      })
    );

  @Effect()
  updateJob$: Observable<fromActions.UpdateJobSuccess | fromActions.UpdateJobFail> = this.actions$
    .pipe(
      ofType(fromActions.UPDATE_JOB),
      exhaustMap(action => {
        const { id, data } = action['payload'];
        return from(this.jobsService.updateJob(id, data)).pipe(
          map((res) => {
            if (res) {
              this.toast.success('Job updated successfully');
              return new fromActions.UpdateJobSuccess(res);
            }
            return new fromActions.UpdateJobFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.UpdateJobFail(res));
          })
        );
      })
    );

  @Effect()
  createJob$: Observable<fromActions.CreateJobSuccess | fromActions.CreateJobFail> = this.actions$
    .pipe(
      ofType(fromActions.CREATE_JOB),
      exhaustMap(action => {
        return from(this.jobsService.createJob(action['payload'])).pipe(
          map((res) => {
            if (res) {
              this.toast.success('Job created successfully');
              return new fromActions.CreateJobSuccess(res);
            }
            return new fromActions.CreateJobFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.CreateJobFail(res));
          })
        );
      })
    );

  @Effect()
  deleteJob$: Observable<fromActions.DeleteJobSuccess | fromActions.DeleteJobFail> = this.actions$
    .pipe(
      ofType(fromActions.DELETE_JOB),
      exhaustMap(action => {
        return from(this.jobsService.deleteJob(action['payload'])).pipe(
          map((res) => {
            if (res) {
              this.toast.success('Job deleted successfully');
              return new fromActions.DeleteJobSuccess(action['payload']);
            }
            return new fromActions.DeleteJobFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.DeleteJobFail(res));
          })
        );
      })
    );
}

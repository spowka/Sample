import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromRoot from 'src/app/@store';
import * as fromJobs from './jobs.reducer';
import * as fromJobsReducer from '../reducer';

import { JobModel } from 'src/app/jobs/models';

export const getJobsState: MemoizedSelector<fromRoot.State, fromJobs.JobsState> = createSelector(
  fromJobsReducer.getJobsFeatureState,
  (state: fromJobsReducer.JobsFeatureState) => state.jobs
);

export const selectLoading: MemoizedSelector<fromRoot.State, boolean> = createSelector(
  getJobsState,
  fromJobs.getLoading
);


export const selectJobs: MemoizedSelector<fromRoot.State, JobModel[]> = createSelector(
  getJobsState,
  fromJobs.getJobs
);

export const selectSelectedJob: MemoizedSelector<fromRoot.State, JobModel> = createSelector(
  getJobsState,
  fromJobs.getSelectedJob
);


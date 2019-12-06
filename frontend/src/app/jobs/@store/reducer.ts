import { ActionReducerMap, createFeatureSelector, State } from '@ngrx/store';

import * as jobsReducer from './jobs/jobs.reducer';

export interface JobsFeatureState {
    jobs: jobsReducer.JobsState;
}

export const reducers: ActionReducerMap<JobsFeatureState> = {
    jobs: jobsReducer.jobsReducer
};

export const getJobsFeatureState: any = createFeatureSelector('jobs');

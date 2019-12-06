import { Action } from '@ngrx/store';
import { JobModel } from 'src/app/jobs/models';

export const LOAD_JOBS = '[Jobs] Load Jobs';
export const LOAD_JOBS_SUCCESS = '[Jobs] Load Jobs Success';
export const LOAD_JOBS_FAIL = '[Jobs] Load Jobs Fail';

export class LoadJobs implements Action {
  readonly type: string = LOAD_JOBS;
}

export class LoadJobsSuccess implements Action {
  readonly type: string = LOAD_JOBS_SUCCESS;
  constructor(public payload: JobModel[]) { }
}

export class LoadJobsFail implements Action {
  readonly type: string = LOAD_JOBS_FAIL;
  constructor(public payload: any) { }
}

export const LOAD_JOB = '[Jobs] Load Job';
export const LOAD_JOB_SUCCESS = '[Jobs] Load Job Success';
export const LOAD_JOB_FAIL = '[Jobs] Load Job Fail';

export class LoadJob implements Action {
  readonly type: string = LOAD_JOB;
  constructor(public payload: number) { }
}

export class LoadJobSuccess implements Action {
  readonly type: string = LOAD_JOB_SUCCESS;
  constructor(public payload: JobModel) { }
}

export class LoadJobFail implements Action {
  readonly type: string = LOAD_JOB_FAIL;
  constructor(public payload: any) { }
}

export const UPDATE_JOB = '[Jobs] Update Job';
export const UPDATE_JOB_SUCCESS = '[Jobs] Update Job Success';
export const UPDATE_JOB_FAIL = '[Jobs] Update Job Fail';

export class UpdateJob implements Action {
  readonly type: string = UPDATE_JOB;
  constructor(public payload: { id: number, data: JobModel }) { }
}

export class UpdateJobSuccess implements Action {
  readonly type: string = UPDATE_JOB_SUCCESS;
  constructor(public payload: JobModel) { }
}

export class UpdateJobFail implements Action {
  readonly type: string = UPDATE_JOB_FAIL;
  constructor(public payload: any) { }
}

export const CREATE_JOB = '[Jobs] Create Job';
export const CREATE_JOB_SUCCESS = '[Jobs] Create Job Success';
export const CREATE_JOB_FAIL = '[Jobs] Create Job Fail';

export class CreateJob implements Action {
  readonly type: string = CREATE_JOB;
  constructor(public payload: JobModel) { }
}

export class CreateJobSuccess implements Action {
  readonly type: string = CREATE_JOB_SUCCESS;
  constructor(public payload: JobModel) { }
}

export class CreateJobFail implements Action {
  readonly type: string = CREATE_JOB_FAIL;
  constructor(public payload: any) { }
}

export const DELETE_JOB = '[Jobs] Delete Job';
export const DELETE_JOB_SUCCESS = '[Jobs] Delete Job Success';
export const DELETE_JOB_FAIL = '[Jobs] Delete Job Fail';

export class DeleteJob implements Action {
  readonly type: string = DELETE_JOB;
  constructor(public payload: string) { }
}

export class DeleteJobSuccess implements Action {
  readonly type: string = DELETE_JOB_SUCCESS;
  constructor(public payload: JobModel) { }
}

export class DeleteJobFail implements Action {
  readonly type: string = DELETE_JOB_FAIL;
  constructor(public payload: any) { }
}

export type JobsActions = LoadJobs
  | LoadJobsSuccess
  | LoadJobsFail
  | LoadJob
  | LoadJobSuccess
  | LoadJobFail
  | UpdateJob
  | UpdateJobSuccess
  | UpdateJobFail
  | CreateJob
  | CreateJobSuccess
  | CreateJobFail
  | DeleteJob
  | DeleteJobSuccess
  | DeleteJobFail;

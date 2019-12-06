import * as fromJobsActions from './jobs.action';
import { JobModel } from 'src/app/jobs/models';

export class JobsState {
  jobs: JobModel[];
  selectedJob: JobModel;
  loading: boolean;
  loaded: boolean;
  error: string;
}

const initialState: JobsState = {
  jobs: null,
  selectedJob: null,
  loading: false,
  loaded: true,
  error: '',
};

export function jobsReducer(
  state: JobsState = initialState,
  action: fromJobsActions.JobsActions
): JobsState {
  switch (action.type) {
    case fromJobsActions.LOAD_JOBS: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromJobsActions.LOAD_JOBS_SUCCESS: {
      return {
        ...state,
        jobs: action['payload'],
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromJobsActions.LOAD_JOBS_FAIL: {
      return {
        ...state,
        jobs: null,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    case fromJobsActions.LOAD_JOB: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromJobsActions.LOAD_JOB_SUCCESS: {
      return {
        ...state,
        selectedJob: action['payload'],
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromJobsActions.LOAD_JOB_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    case fromJobsActions.UPDATE_JOB: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromJobsActions.UPDATE_JOB_SUCCESS: {
      const updatedJob = action['payload'];
      const jobs = [...state.jobs].map(job => job.id === updatedJob.id ? updatedJob : job);

      return {
        ...state,
        jobs,
        selectedJob: updatedJob,
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromJobsActions.UPDATE_JOB_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    case fromJobsActions.CREATE_JOB: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromJobsActions.CREATE_JOB_SUCCESS: {
      return {
        ...state,
        jobs: [...state.jobs, action['payload']],
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromJobsActions.CREATE_JOB_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    case fromJobsActions.DELETE_JOB: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    }

    case fromJobsActions.DELETE_JOB_SUCCESS: {
      const deletedId = action['payload'];
      const jobs = [...state.jobs].filter(job => job.id !== deletedId);

      return {
        ...state,
        jobs,
        loading: false,
        loaded: true,
        error: '',
      };
    }

    case fromJobsActions.DELETE_JOB_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action['payload'],
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoading: any = (state: JobsState): boolean => state.loading;

export const getJobs: any = (state: JobsState): JobModel[] => state.jobs;
export const getSelectedJob: any = (state: JobsState): JobModel => state.selectedJob;

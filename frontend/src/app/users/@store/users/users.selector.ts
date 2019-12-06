import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromRoot from 'src/app/@store';
import * as fromUsers from './users.reducer';
import * as fromUsersReducer from '../reducer';

import { UserModel } from 'src/app/users/models';

export const getUsersState: MemoizedSelector<fromRoot.State, fromUsers.UsersState> = createSelector(
  fromUsersReducer.getUsersFeatureState,
  (state: fromUsersReducer.UsersFeatureState) => state.users
);

export const selectLoading: MemoizedSelector<fromRoot.State, boolean> = createSelector(
  getUsersState,
  fromUsers.getLoading
);


export const selectUsers: MemoizedSelector<fromRoot.State, UserModel[]> = createSelector(
  getUsersState,
  fromUsers.getUsers
);

export const selectSelectedUser: MemoizedSelector<fromRoot.State, UserModel> = createSelector(
  getUsersState,
  fromUsers.getSelectedUser
);


import { ActionReducerMap, createFeatureSelector, State } from '@ngrx/store';

import * as usersReducer from './users/users.reducer';

export interface UsersFeatureState {
    users: usersReducer.UsersState;
}

export const reducers: ActionReducerMap<UsersFeatureState> = {
    users: usersReducer.usersReducer
};

export const getUsersFeatureState: any = createFeatureSelector('users');

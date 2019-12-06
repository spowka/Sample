import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/users/models';

export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success';
export const LOAD_USERS_FAIL = '[Users] Load Users Fail';

export class LoadUsers implements Action {
  readonly type: string = LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type: string = LOAD_USERS_SUCCESS;
  constructor(public payload: UserModel[]) { }
}

export class LoadUsersFail implements Action {
  readonly type: string = LOAD_USERS_FAIL;
  constructor(public payload: any) { }
}

export const LOAD_USER = '[Users] Load User';
export const LOAD_USER_SUCCESS = '[Users] Load User Success';
export const LOAD_USER_FAIL = '[Users] Load User Fail';

export class LoadUser implements Action {
  readonly type: string = LOAD_USER;
  constructor(public payload: number) { }
}

export class LoadUserSuccess implements Action {
  readonly type: string = LOAD_USER_SUCCESS;
  constructor(public payload: UserModel) { }
}

export class LoadUserFail implements Action {
  readonly type: string = LOAD_USER_FAIL;
  constructor(public payload: any) { }
}

export const UPDATE_USER = '[Users] Update User';
export const UPDATE_USER_SUCCESS = '[Users] Update User Success';
export const UPDATE_USER_FAIL = '[Users] Update User Fail';

export class UpdateUser implements Action {
  readonly type: string = UPDATE_USER;
  constructor(public payload: { id: number, data: UserModel }) { }
}

export class UpdateUserSuccess implements Action {
  readonly type: string = UPDATE_USER_SUCCESS;
  constructor(public payload: UserModel) { }
}

export class UpdateUserFail implements Action {
  readonly type: string = UPDATE_USER_FAIL;
  constructor(public payload: any) { }
}

export const CREATE_USER = '[Users] Create User';
export const CREATE_USER_SUCCESS = '[Users] Create User Success';
export const CREATE_USER_FAIL = '[Users] Create User Fail';

export class CreateUser implements Action {
  readonly type: string = CREATE_USER;
  constructor(public payload: UserModel) { }
}

export class CreateUserSuccess implements Action {
  readonly type: string = CREATE_USER_SUCCESS;
  constructor(public payload: UserModel) { }
}

export class CreateUserFail implements Action {
  readonly type: string = CREATE_USER_FAIL;
  constructor(public payload: any) { }
}

export const DELETE_USER = '[Users] Delete User';
export const DELETE_USER_SUCCESS = '[Users] Delete User Success';
export const DELETE_USER_FAIL = '[Users] Delete User Fail';

export class DeleteUser implements Action {
  readonly type: string = DELETE_USER;
  constructor(public payload: string) { }
}

export class DeleteUserSuccess implements Action {
  readonly type: string = DELETE_USER_SUCCESS;
  constructor(public payload: UserModel) { }
}

export class DeleteUserFail implements Action {
  readonly type: string = DELETE_USER_FAIL;
  constructor(public payload: any) { }
}

export type UsersActions = LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail
  | CreateUser
  | CreateUserSuccess
  | CreateUserFail
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFail;

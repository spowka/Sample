import { UsersService } from '../../services/users.service';
import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, Observable, from } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import * as fromRoot from 'src/app/@store';
import * as fromActions from './users.action';
import { Store } from '@ngrx/store';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private toast: ToastrService,
    private store: Store<fromRoot.State>
  ) { }

  @Effect()
  loadUsers$: Observable<fromActions.LoadUsersSuccess | fromActions.LoadUsersFail> = this.actions$
    .pipe(
      ofType(fromActions.LOAD_USERS),
      exhaustMap(_ => {
        return from(this.usersService.getUsers()).pipe(
          map((res) => {
            if (res['data']) {
              return new fromActions.LoadUsersSuccess(res['data']);
            }
            return new fromActions.LoadUsersFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.LoadUsersFail(res));
          })
        );
      })
    );

  @Effect()
  loadUser$: Observable<fromActions.LoadUserSuccess | fromActions.LoadUserFail> = this.actions$
    .pipe(
      ofType(fromActions.LOAD_USER),
      exhaustMap(action => {
        return from(this.usersService.getUser(action['payload'])).pipe(
          map((res) => {
            if (res) {
              return new fromActions.LoadUserSuccess(res);
            }
            return new fromActions.LoadUserFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.LoadUserFail(res));
          })
        );
      })
    );

  @Effect()
  updateUser$: Observable<fromActions.UpdateUserSuccess | fromActions.UpdateUserFail> = this.actions$
    .pipe(
      ofType(fromActions.UPDATE_USER),
      exhaustMap(action => {
        const { id, data } = action['payload'];
        return from(this.usersService.updateUser(id, data)).pipe(
          map((res) => {
            if (res) {
              this.toast.success('User updated successfully');
              return new fromActions.UpdateUserSuccess(res);
            }
            return new fromActions.UpdateUserFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.UpdateUserFail(res));
          })
        );
      })
    );

  @Effect()
  createUser$: Observable<fromActions.CreateUserSuccess | fromActions.CreateUserFail> = this.actions$
    .pipe(
      ofType(fromActions.CREATE_USER),
      exhaustMap(action => {
        return from(this.usersService.createUser(action['payload'])).pipe(
          map((res) => {
            if (res) {
              this.toast.success('User created successfully');
              return new fromActions.CreateUserSuccess(res);
            }
            return new fromActions.CreateUserFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.CreateUserFail(res));
          })
        );
      })
    );

  @Effect()
  deleteUser$: Observable<fromActions.DeleteUserSuccess | fromActions.DeleteUserFail> = this.actions$
    .pipe(
      ofType(fromActions.DELETE_USER),
      exhaustMap(action => {
        return from(this.usersService.deleteUser(action['payload'])).pipe(
          map((res) => {
            if (res) {
              this.toast.success('User deleted successfully');
              return new fromActions.DeleteUserSuccess(action['payload']);
            }
            return new fromActions.DeleteUserFail(res);
          }),
          catchError((res: Error) => {
            this.toast.error(res.message || 'Something went wrong');
            return of(new fromActions.DeleteUserFail(res));
          })
        );
      })
    );
}

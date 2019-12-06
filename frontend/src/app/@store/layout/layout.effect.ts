import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromLayoutAction from './layout.action';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LayoutEffects {
  constructor(
    private actions$: Actions,
  ) { }

  @Effect({ dispatch: false })
  changeTheme$: Observable<fromLayoutAction.LayoutActions> = this.actions$
    .pipe(
      ofType(fromLayoutAction.CHANGE_THEME),
      tap((action) => {
        localStorage.setItem('theme', action['payload']);
      })
    );
}

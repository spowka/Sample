import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromRoot from '../reducer';
import * as fromLayout from './layout.reducer';

export const selectTheme: MemoizedSelector<fromRoot.State, string> = createSelector(
  (state: fromRoot.State) => state.layout,
  fromLayout.getTheme
);

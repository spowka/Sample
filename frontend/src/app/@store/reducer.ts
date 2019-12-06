import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromLayout from './layout/layout.reducer';

export interface State {
    layout: fromLayout.LayoutState;
}

export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.layoutReducer,
};

export const getAppState: any = createFeatureSelector<State>('root');

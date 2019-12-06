import { MetaReducer, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { State } from './reducer';

export function logger(reducer: ActionReducer<State>): any {
    return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [logger];

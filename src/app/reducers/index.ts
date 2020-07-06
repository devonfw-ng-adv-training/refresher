import { ActionReducerMap } from '@ngrx/store';
import { reducer } from '../counter/reducers';

export interface AppState {
  [K: string]: any
}

export const reducers: ActionReducerMap<AppState> = {
  counter: reducer
};

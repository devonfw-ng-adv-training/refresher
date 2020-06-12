import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from '../counter/reducers';


export interface AppState {
  [fromCounter.counterFeatureKey]: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer
};

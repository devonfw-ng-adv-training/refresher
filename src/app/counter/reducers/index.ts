import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  Action
} from '@ngrx/store';

export const counterFeatureKey = 'counter';

export interface CounterState {
  value: number
}

export const initialState: CounterState = {
  value: 0
};

const counterReducer = createReducer(
  initialState,
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}

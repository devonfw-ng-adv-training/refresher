import { createReducer, Action, on } from '@ngrx/store';
import * as  CounterActions from './counter.actions'
export const counterFeatureKey = 'counter';

export interface CounterState {
  value: number
}

export const initialState: CounterState = {
  value: 0
};

const counterReducer = createReducer(
  initialState,
  on(CounterActions.decrement, (state: CounterState, { change }) => ({ ...state, value: state.value - change })),
  on(CounterActions.reset, (state: CounterState) => ({ ...state, value: 0 })),
  on(CounterActions.increment, (state: CounterState, { change }) => ({ ...state, value: state.value + change }))
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}

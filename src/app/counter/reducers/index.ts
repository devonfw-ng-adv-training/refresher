import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  Action,
  on
} from '@ngrx/store';
import { resetCounter, incrementCounter, decrementCounter, binaryValueSuccess, binaryValueError } from '../counter/counter.actions';

export const counterFeatureKey = 'counter';

export interface CounterState {
  val: number;
  binaryValue: string;
  err: string;
}

export const initialState: CounterState = {
  val: 0,
  binaryValue: '0',
  err: null
};

export const counterReducer = createReducer(
  initialState,
  on(resetCounter, (state: CounterState) => ({ ...state, val: 0 })),
  on(incrementCounter, (state: CounterState, { changeValue }) => ({ ...state, val: state.val + changeValue, err: null })),
  on(decrementCounter, (state: CounterState, { changeValue }) => ({ ...state, val: state.val - changeValue, err: null })),
  on(binaryValueSuccess, (state: CounterState, { binaryValue }) => ({ ...state, binaryValue })),
  on(binaryValueError, (state: CounterState, { err }) => ({ ...state, val: 0, binaryValue: '0', err })),
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './index';
import { AppState } from 'src/app/reducers';
import { CounterState } from '.';

export const selectCounterFeature = createFeatureSelector<AppState, fromCounter.CounterState>(fromCounter.counterFeatureKey);

export const selectCounterValue = createSelector(
  selectCounterFeature,
  (counterState: fromCounter.CounterState) => counterState.val
);

export const selectCounterValueBinary = createSelector(selectCounterFeature, (state: CounterState) => state.binaryValue);

export const selectCounterError = createSelector(selectCounterFeature, (state: CounterState) => state.err);

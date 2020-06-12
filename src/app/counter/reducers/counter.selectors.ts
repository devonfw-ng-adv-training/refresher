import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './index';
import { AppState } from 'src/app/reducers';


export const selectCounterFeature = createFeatureSelector<AppState, fromCounter.CounterState>(fromCounter.counterFeatureKey);

export const selectCounterValue = createSelector(
  selectCounterFeature,
  (counterState: fromCounter.CounterState) => counterState.value
);

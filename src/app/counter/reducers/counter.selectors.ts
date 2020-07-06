import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { CounterState } from '.';

export const selectCounter = (state: AppState) => state.counter;

export const selectCounterValue = createSelector(selectCounter, (state: CounterState) => state.val);

export const selectCounterValueBinary = createSelector(selectCounter, (state: CounterState) => state.binaryValue);

export const selectCounterError = createSelector(selectCounter, (state: CounterState) => state.err);

import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter Component] increment counter value',
  props<{ change: number }>()
);

export const decrement = createAction(
  '[Counter Component] decrement counter value',
  props<{ change: number }>()
);

export const reset = createAction(
  '[Counter Component] reset counter value'
);

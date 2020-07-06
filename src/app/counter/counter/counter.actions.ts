import { createAction, props } from '@ngrx/store';

export const resetCounter = createAction('[Counter Component] reset counter to 0');
export const incrementCounter = createAction('[Counter Component] increment counter by value', props<{ changeValue: number }>());
export const decrementCounter = createAction('[Counter Component] decrement counter by value', props<{ changeValue: number }>());


export const binaryValueSuccess = createAction('[Counter API] success binary value', props<{ binaryValue: string }>());
export const binaryValueError = createAction('[Counter API] error binary value', props<{ err: string }>());

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectCounterValue, selectCounterValueBinary, selectCounterError } from '../reducers/counter.selectors';
import { resetCounter, incrementCounter, decrementCounter } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counterVal$ = this.counterStore.pipe(select(selectCounterValue));

  binaryVal$ = this.counterStore.pipe(select(selectCounterValueBinary));

  err$ = this.counterStore.pipe(select(selectCounterError));

  constructor(private counterStore: Store<AppState>) {

  }

  increment(change: number) {
    this.counterStore.dispatch(incrementCounter({ changeValue: change }));
  }

  decrement(change: number) {
    this.counterStore.dispatch(decrementCounter({ changeValue: change }));
  }

  reset() {
    this.counterStore.dispatch(resetCounter());
  }
}

import { Component, OnInit } from '@angular/core';
import * as CounterActions from '../reducers/counter.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { AppState } from 'src/app/reducers';
import { selectCounterValue } from '../reducers/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {


  value: number = 0;

  storeValue$: Observable<number> = this.store$.pipe(select(selectCounterValue), tap(console.log));

  constructor(private store$: Store<AppState>) {
  }

  onClicked(change?: number) {
    this.value = (change) ? this.value + change : 0;
  }

  onIncremented(change: number) {
    this.store$.dispatch(CounterActions.increment({ change }))
  }
  onDecremented(change: number) {
    this.store$.dispatch(CounterActions.decrement({ change }))
  }
  onReset() {
    this.store$.dispatch(CounterActions.reset())
  }
}

import { Component, OnInit } from '@angular/core';
import { CounterState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {


  value: number = 0;

  storeValue$: Observable<number> = this.store$.pipe(select(val => val.counter.value), tap(console.log));

  constructor(private store$: Store<AppState>) {
  }

  onClicked(change?: number) {
    this.value = (change) ? this.value + change : 0;
  }
}

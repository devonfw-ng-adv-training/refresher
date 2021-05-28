import {Component} from '@angular/core';
import {counterFeatureKey} from '../reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators'
import {AppState} from 'src/app/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {


  value: number = 0;

  storeValue$: Observable<number> = this.store$.pipe(map(appState => appState[counterFeatureKey].value), tap(console.log));

  constructor(private store$: Store<AppState>) {
  }

  onClicked(change?: number) {
    this.value = (change) ? this.value + change : 0;
  }
}

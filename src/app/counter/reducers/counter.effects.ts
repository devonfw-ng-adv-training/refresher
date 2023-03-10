import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {binaryValueError, binaryValueSuccess, decrementCounter, incrementCounter} from '../counter/counter.actions';
import {concatMap, map, withLatestFrom} from 'rxjs/operators';
import {CounterService} from '../counter.service';
import {AppState} from 'src/app/reducers';
import {Action, select, Store} from '@ngrx/store';
import {selectCounterValue} from './counter.selectors';


@Injectable()
export class CounterEffects {

  increment$ = createEffect(() => this.actions$.pipe(
    ofType(incrementCounter, decrementCounter),
    // we're not interested in the changeValue from the action, but the current value from the store, so we "join" that
    withLatestFrom(this.store.pipe(select(selectCounterValue))),
    // and then discard the action we got
    map((actionAndStoreValue: [Action, number]) => actionAndStoreValue[1]),
    // now the backend call is made
    concatMap((newValue: number) => this.counterService.getBinary(newValue)
      .pipe(map(binaryValue => {
        if (binaryValue.length > 10) {
          return binaryValueError({err: 'stack overflow'});
        }
        else {
          return binaryValueSuccess({ binaryValue });
        }
      })))));

  constructor(private actions$: Actions, private counterService: CounterService, private store: Store<AppState>) { }

}

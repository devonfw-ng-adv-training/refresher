import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { incrementCounter, binaryValueSuccess, binaryValueError, decrementCounter } from '../counter/counter.actions';
import { map, concatMap, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { of, Observable, combineLatest, throwError } from 'rxjs';
import { CounterService } from '../counter.service';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { selectCounterValue } from './counter.selectors';


@Injectable()
export class CounterEffects {

  @Effect()
  public increment$: Observable<any> = this.actions$.pipe(
    ofType(incrementCounter, decrementCounter),
    map(action => action.changeValue),
    withLatestFrom(this.store.pipe(select(selectCounterValue))),
    map((changeValues: [number, number]) => changeValues[1]),
    concatMap((newValue: number) => this.counterService.getBinary(newValue)
      .pipe(map(binaryValue => {
        if (binaryValue.length > 10) {
          return binaryValueError({err: 'stack overflow'})
        }
        else {
          return binaryValueSuccess({ binaryValue: binaryValue })
        }
      }))
    ),
  );

  constructor(private actions$: Actions, private counterService: CounterService, private store: Store<AppState>) { }

}

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CounterEffects } from './counter.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from './index';

describe('CounterEffects', () => {
  const actions$ = new Observable<any>();
  let effects: CounterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CounterEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
      imports: [HttpClientTestingModule]
    });

    effects = TestBed.inject(CounterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

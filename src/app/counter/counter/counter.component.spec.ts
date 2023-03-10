import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../reducers';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [provideMockStore({ initialState })],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

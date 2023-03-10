import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './reducers';
import { CounterComponent } from './counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './reducers/counter.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.counterReducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
  exports: [CounterComponent]
})
export class CounterModule { }

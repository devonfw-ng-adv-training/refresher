import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './reducers';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer)
  ]
})
export class CounterModule { }

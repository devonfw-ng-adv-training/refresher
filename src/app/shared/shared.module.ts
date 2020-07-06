import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationCounterComponent } from './application-counter/application-counter.component';



@NgModule({
  declarations: [ApplicationCounterComponent],
  imports: [
    CommonModule
  ],
  exports: [ApplicationCounterComponent]
})
export class SharedModule { }

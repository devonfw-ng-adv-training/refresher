import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectCounterValue } from 'src/app/counter/reducers/counter.selectors';

@Component({
  selector: 'app-application-counter',
  templateUrl: './application-counter.component.html',
  styleUrls: ['./application-counter.component.css']
})
export class ApplicationCounterComponent implements OnInit {

  counter$ = this.store.pipe(select(selectCounterValue));
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}

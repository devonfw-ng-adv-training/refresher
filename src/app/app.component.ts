import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 0;

  onClicked(change?: number) {
    this.value = (change) ? this.value + change : 0;
  }
}

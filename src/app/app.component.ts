import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CHANGE, RESET } from './ngrx/counter';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = this.store.select('counter');
  }

  add() {
    this.store.dispatch({ type: CHANGE, changeValue: 1 });
  }

  sub() {
    this.store.dispatch({ type: CHANGE, changeValue: -1 });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}

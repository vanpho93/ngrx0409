import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() word;
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  remove() {
    this.store.dispatch({ type: 'REMOVE_WORD', id: this.word.id });
  }

  toggle() {
    this.store.dispatch({ type: 'TOGGLE_IS_MEMORIZED', id: this.word.id });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() word;
  constructor(
    private store: Store<any>,
    private wordService: WordService
  ) { }

  ngOnInit() {
  }

  remove() {
    this.wordService.removeWord(this.word._id)
    .then(() => {
      this.store.dispatch({ type: 'REMOVE_WORD', id: this.word._id });
    })
    .catch(err => console.log(err));
    // this.store.dispatch({ type: 'REMOVE_WORD', id: this.word.id });
  }

  toggle() {
    const { _id, en, vn, isMemorized } = this.word;
    this.wordService.update(_id, !isMemorized, en, vn)
    .then(() => {
      this.store.dispatch({ type: 'TOGGLE_IS_MEMORIZED', id: this.word._id });
    });
    // this.store.dispatch({ type: 'TOGGLE_IS_MEMORIZED', id: this.word.id });
  }

}

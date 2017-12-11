import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Word, AppState } from '../types';
import { WordService } from '../word.service';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css'],
  providers: [WordService]
})

export class ListWordsComponent implements OnInit {
  words: Observable<Word[]>;
  constructor(
    private store: Store<AppState>,
    private wordService: WordService
  ) { }

  ngOnInit() {
    this.words = this.store.select('words');
    this.wordService.getAllWords()
    .then(data => this.store.dispatch({ type: 'SET_WORD', words: data.words }))
    .catch(err => console.log(err));
  }

}

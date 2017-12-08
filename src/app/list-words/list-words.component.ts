import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Word, AppState } from '../types';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css']
})

export class ListWordsComponent implements OnInit {
  words: Observable<Word[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.words = this.store.select('words');
  }

}

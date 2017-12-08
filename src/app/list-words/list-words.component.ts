import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css']
})
export class ListWordsComponent implements OnInit {
  words: Observable<any[]>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.words = this.store.select('words');
  }

}

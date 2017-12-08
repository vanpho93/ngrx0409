import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css']
})

export class ListWordsComponent implements OnInit {
  words = [
    { id: '1a', en: 'one', vn: 'mot', isMemorized: true },
    { id: '2a', en: 'two', vn: 'hai', isMemorized: false },
    { id: '3a', en: 'three', vn: 'ba', isMemorized: false },
    { id: '4a', en: 'four', vn: 'bon', isMemorized: true },
  ];
  constructor() { }

  ngOnInit() {
  }

}

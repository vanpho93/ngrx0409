import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, Word } from '../types';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css'],
  providers: [WordService]
})
export class WordFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private wordService: WordService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      txtEn: '',
      txtVn: ''
    });
  }
  onSubmit() {
    const { txtEn, txtVn } = this.myForm.value;
    const word = {
      en: txtEn,
      vn: txtVn,
    };
    this.wordService.addWord(word)
    .then(res => {
      this.store.dispatch({ type: 'ADD_WORD', word: res.word });
      this.myForm.reset();
    })
    .catch(err => console.log(err));
    // this.store.dispatch({ type: 'ADD_WORD', word });
  }
}

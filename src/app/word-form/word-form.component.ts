import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, Word } from '../types';
@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      txtEn: '',
      txtVn: ''
    });
  }
  onSubmit() {
    const { txtEn, txtVn } = this.myForm.value;
    const word: Word = {
      id: Math.random() + '',
      en: txtEn,
      vn: txtVn,
      isMemorized: false
    };
    this.store.dispatch({ type: 'ADD_WORD', word });
  }
}

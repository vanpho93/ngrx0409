import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { counterReducer } from './ngrx/counter';
import { wordsReducer } from './ngrx/words';
import { ListWordsComponent } from './list-words/list-words.component';

@NgModule({
  declarations: [
    AppComponent,
    ListWordsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer, words: wordsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

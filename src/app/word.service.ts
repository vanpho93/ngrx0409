import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'http://localhost:3000/word';

@Injectable()

export class WordService {
    constructor(private http: Http) {}

    getAllWords() {
        return this.http.get(URL)
        .toPromise()
        .then(res => res.json());
    }
}

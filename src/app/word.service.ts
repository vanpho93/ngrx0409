import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const URL = 'http://localhost:3000/word';

@Injectable()

export class WordService {
    constructor(private http: Http) {}

    getAllWords() {
        return this.http.get(URL)
        .toPromise()
        .then(res => res.json());
    }

    addWord(body) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(URL, JSON.stringify(body), { headers })
        .toPromise()
        .then(res => res.json());
    }
}

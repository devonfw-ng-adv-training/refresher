import { Injectable } from '@angular/core';
import { Observable, of, asyncScheduler } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

interface BinaryResponse {
  "success": {
    "total": number
  },
  "copyright": {
    "copyright": string;
  },
  "contents": {
    "number": number,
    "base": {
      "from": number
      "to": number;
    },
    "answer": string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  getBinary(value: number): Observable<string> {
    return of(value.toString(2), asyncScheduler).pipe(delay(200));
  }

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  getFruits(): Observable<any> {
    return of('apple', 'orange', 'grape');
  }

  customObservable(): Observable<any> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('apple');
      }, 3000);

      subscriber.complete();

      setTimeout(() => {
        subscriber.next('orange');
      }, 6000);

      setTimeout(() => {
        subscriber.next('grape');
      }, 9000);
    });
  }
}

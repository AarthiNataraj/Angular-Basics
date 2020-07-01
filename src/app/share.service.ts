import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  //It should be private only
  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();//create stream

  constructor() { }
  changeMessage(msg:String) {
    this.messageSource.next(msg);
  }
}

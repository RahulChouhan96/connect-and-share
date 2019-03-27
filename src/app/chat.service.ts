import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, observable } from 'rxjs';

import * as  io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = "http://localhost:5000";
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMsg(array) {
    this.socket.emit("new-message", array);
  }

  public sendTypingStatus(status) {
    return this.socket.emit("typing", status);
  }

  public getMsgs = () => {
    return Observable.create((observer) => {
      this.socket.on("new-message", (array) => {
        observer.next(array);
      });
    });
  }

  public getTypingStatus = () => {
    return Observable.create((observer) => {
      this.socket.on("typing", (typingStatus) => {
        observer.next(typingStatus);
      });
    });
  }
}
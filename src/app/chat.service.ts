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

  public sendMsg(message) {
    this.socket.emit("new-message", message);
  }

  public getMsgs = () => {
    return Observable.create((observer) => {
      this.socket.on("new-message", (message) => {
        observer.next(message);
      });
    });
  }

  // public isTyping = () => {
  //   console.log("Is typing");
  //   return Observable.create((observer) => {
  //     this.socket.on("typing", (data) => {
  //       observer.next(data);
  //     });
  //   });
  // }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, observable } from 'rxjs';

import * as  io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
// import { Socket } from 'net';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = "http://localhost:5000";
  private socket;
  private _mailUrl = this.url + "/connect_and_share/user/inbox";
  private _sentMailUrl = this.url + "/connect_and_share/user/sent";

  constructor(private http: HttpClient) {
    this.socket = io(this.url);
  }

  public getMailFromDb(userName) {
    let obj = {
      "userName": userName
    }
    console.log("In client");
    console.log(obj);
    return this.http.post<any>(this._mailUrl, obj);
  }

  public sendMail(mail) {
    this.socket.emit("new-mail", mail);
  }

  public getMail() {
    console.log("In service of getting mail");
    return Observable.create((observer) => {
      this.socket.on("new-mail", (mail => {
        observer.next(mail);
      }));
    });
  }

  public sendMsg(array, name) {
    let obj = {
      "array": array,
      "name": name
    }
    this.socket.emit("new-message", obj);
  }

  public sendMsgToOne(array, userId) {
    let obj = {
      "array": array,
      "userId": userId
    }
    this.socket.emit("message-to-one", obj);
  }

  public sendTypingStatus(status) {
    return this.socket.emit("typing", status);
  }

  public sendToServer(userId) {
    this.socket.emit("join", userId);
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

  // public getMessageFromOne = () => {
  //   return Observable.create((observer) => {
  //     console.log("In Get_message_from_one");
  //     this.socket.on("message-to-one", (data) => {
  //       observer.next(data);
  //     })
  //   });
  // }

  public getMessageFromOne = () => {
    return Observable.create((observer) => {
      console.log("In Get_message_from_one");
      this.socket.on("my-message", (data) => {
        observer.next(data);
      })
    });
  }

  public joinGroup(companyId) {
    this.socket.emit("join-group", companyId);
  }

  public sendViews(obj) {
    return this.socket.emit("group-msg", obj);
  }

  public getGrpMsgs = () => {
    return Observable.create((observer) => {
      console.log("getting group msg");
      this.socket.on("recieve-grp-msg", (obj) => {
        observer.next(obj);
      })
    });
  }

  public getSentMailFromDb(userName) {
    let obj = {
      "userName": userName
    }
    return this.http.post<any>(this._sentMailUrl, obj);
  }

  ngOnInit() {
  }
}
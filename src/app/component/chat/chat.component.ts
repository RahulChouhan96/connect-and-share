import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { UserService } from 'src/app/services/user.service';
import { UserLoginComponent } from '../user-login/user-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'connect';
  composedMail: any = {
    // to: String,
    // subject: String,
    // msg: String
  }

  receivedMail: any;

  message: String;
  messages: string[] = [];
  // arr: any = [0, this.message]
  sendingMsg: String;
  sendingTypingStatus: Number;

  recievingTypingStatus: Number;
  sendersName: String;
  name: String;
  userName: String;
  isTyping: Number;
  userId: String;

  constructor(private chatSrv: ChatService, private userSrv: UserService, private router: Router) { }

  sendMail() {
    this.composedMail.from = this.userName;
    this.chatSrv.sendMail(this.composedMail);
    // this.router.navigate(["connect_and_share/user/inbox"]);
  }

  sendMsg() {
    this.sendingTypingStatus = 0;
    this.chatSrv.sendMsg([this.sendingTypingStatus, this.sendingMsg], this.name);
    this.sendingMsg = "";
  }

  sendMsgToOne() {
    this.sendingTypingStatus = 0;
    this.chatSrv.sendMsgToOne([this.sendingTypingStatus, this.sendingMsg], this.userId);
    this.sendingMsg = "";
  }

  changeStatus() {
  }

  typing() {
    if (this.sendingMsg.length) {
      this.sendingTypingStatus = 1;
      this.chatSrv.sendTypingStatus(this.sendingTypingStatus);
    } else if (this.sendingMsg.length === 0) {
      this.sendingTypingStatus = 0;
      this.chatSrv.sendTypingStatus(this.sendingTypingStatus);
    }
  }

  getName() {
    this.name = sessionStorage.getItem("name");
  }

  getUserId() {
    this.userId = sessionStorage.getItem("userId");
  }

  getUserName() {
    this.userName = this.userSrv.userName;
  }

  ngOnInit() {
    this.chatSrv
      .getMail()
      .subscribe(
        (res) => {
          console.log("Getting mail");
          console.log(res);
          this.receivedMail = res;
        },
        (err) => {
          console.log(err);
        }
      );

    this.getUserName();

    this.chatSrv
      .getMsgs()
      .subscribe(
        (res) => {
          console.log(res);
          this.messages.push(res.array[1]);
          this.recievingTypingStatus = res.array[0];
          this.sendersName = res.name;
          console.log(this.messages.length);
          console.log(this.messages);
        },
        (err) => {
          console.log(err);
        });

    this.getName();
    this.getUserId();

    this.chatSrv
      .getTypingStatus()
      .subscribe(
        (res) => {
          this.recievingTypingStatus = res;
        },
        (err) => {
          console.log(err);
        });

    this.chatSrv
      .getMessageFromOne()
      .subscribe(
        (res) => {
          console.log("In component");
          console.log(res);
          this.messages.push(res.array[1]);
          this.recievingTypingStatus = res.array[0];
          this.sendersName = res.name;
        },
        (err) => {
          console.log(err);
        }
      );

    this.chatSrv.sendToServer(this.userName);
  }
}

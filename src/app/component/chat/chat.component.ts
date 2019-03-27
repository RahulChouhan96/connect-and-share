import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { UserService } from 'src/app/services/user.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'connect';
  message: String;
  messages: string[] = [];
  // arr: any = [0, this.message]
  sendingMsg: String;
  sendingTypingStatus: Number;

  recievingTypingStatus: Number;
  name: String;
  userName: String;
  isTyping: Number;

  constructor(private chatSrv: ChatService, private userSrv: UserService) { }

  sendMsg() {
    this.chatSrv.sendMsg(this.sendingMsg);
    this.sendingMsg = "";
  }

  typingStatus() {
    this.sendingTypingStatus = 1;
  }

  sendTypingStatus() {
    // this.chatSrv.sendTypingStatus(this.sendingTypingStatus);
    this.sendingTypingStatus = 0;
  }

  // sendStatus() {
  //   this.sendingTypingStatus = 1;
  //   // console.log(this.arr);
  //   this.chatSrv.isTypi(this.arr[0]);
  // }

  getName() {
    this.name = localStorage.getItem("name");
  }

  ngOnInit() {
    this.chatSrv
      .getMsgs()
      .subscribe(
        (res) => {
          console.log(res);
          this.messages.push(res);
          console.log(this.messages.length);
          console.log(this.messages);
        },
        (err) => {
          console.log(err);
        });

    this.getName();

    // this.sendTypingStatus();

    this.chatSrv.sendTypingStatus(this.sendingTypingStatus);

    this.chatSrv
      .getTypingStatus()
      .subscribe(
        (res) => {
          this.recievingTypingStatus = res;
        },
        (err) => {
          console.log(err);
        });
  }
}

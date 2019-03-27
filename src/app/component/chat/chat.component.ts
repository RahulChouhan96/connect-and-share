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
    this.sendingTypingStatus = 0;
    this.chatSrv.sendMsg([this.sendingTypingStatus, this.sendingMsg]);
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
    this.name = localStorage.getItem("name");
  }

  ngOnInit() {
    this.chatSrv
      .getMsgs()
      .subscribe(
        (res) => {
          console.log(res);
          this.messages.push(res[1]);
          this.recievingTypingStatus = res[0];
          console.log(this.messages.length);
          console.log(this.messages);
        },
        (err) => {
          console.log(err);
        });

    this.getName();

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

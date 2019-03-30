import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  mails = [];
  dbMails = [];
  userName: String;
  constructor(private chatSrv: ChatService) { }
  getUserName() {
    this.userName = sessionStorage.getItem("userName");
  }
  ngOnInit() {
    this.chatSrv
      .getMail()
      .subscribe(
        (res) => {
          console.log("Getting Mail");
          console.log(res);
          this.mails.push(res);
        },
        (err) => {
          console.log(err);
        }
      );
    this.getUserName();
    this.chatSrv.sendToServer(this.userName);
  }
}

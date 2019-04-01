import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  public mails: any;
  public userName: String;
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

    this.chatSrv
      .getMailFromDb(this.userName)
      .subscribe(
        (mails) => {
          console.log(mails);
          this.mails = mails;
        },
        (err) => {
          console.log(err);
        }
      );
    this.chatSrv.sendToServer(this.userName);
  }
}

import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'connect';
  message: String;
  messages: string[] = [];
  isTyping: Boolean;
  name: String;
  userName: String;

  constructor(private chatSrv: ChatService, private userSrv: UserService) {

  }

  sendMsg() {
    this.chatSrv.sendMsg(this.message);
    this.message = "";
  }

  typing() {
    return [1, this.message];
  }

  // getOneUser() {
  //   this.userSrv.getOneUser(this.userSrv.userId)
  //     .subscribe(
  //       res => {
  //         this.userName = res.user.name;
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

  ngOnInit() {
    this.chatSrv
      .getMsgs()
      .subscribe(
        (message) => {
          this.messages.push(message.message);
          console.log(this.messages.length);
          console.log(this.messages);
        },
        (err) => {
          console.log(err);
        });

    // this.chatSrv
    //   .isTyping()
    //   .subscribe(
    //     (data) => {
    //       console.log("data is:");
    //       console.log(data);
    //       // this.isTyping = data.typing;
    //       this.name = data.userName;
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
  }
}

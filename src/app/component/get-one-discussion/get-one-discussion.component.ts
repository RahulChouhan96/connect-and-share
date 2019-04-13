import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-get-one-discussion',
  templateUrl: './get-one-discussion.component.html',
  styleUrls: ['./get-one-discussion.component.css']
})
export class GetOneDiscussionComponent implements OnInit {
  discussionId: String;
  discussion: any;
  view: String;
  companyId: String;
  recieve = [];
  userName: String;
  constructor(private acRoute: ActivatedRoute, private workSpaceSrv: WorkspacesService, private chatSrv: ChatService) { }

  ngOnInit() {
    this.getUserName();
    this.getDiscussionId();
    this.getOneDiscussion();
    this.getGrpMsgs();
    this.joinGroup();
  }

  public getOneDiscussion() {
    this.workSpaceSrv.getOneDiscussion(this.discussionId)
      .subscribe(
        res => {
          console.log(res);
          this.discussion = res.response;
          this.recieve = res.response.empViews;
        },
        err => {
          console.log(err);
        }
      );
  }

  public sendViews() {
    let obj = {
      // "companyId": this.companyId,
      "discussionId": this.discussionId,
      "view": this.view,
      "userName": this.userName
    }
    this.chatSrv.sendViews(obj);
    this.view = "";
  }

  public getGrpMsgs() {
    this.chatSrv.getGrpMsgs()
      .subscribe(
        res => {
          console.log(res);
          let obj = {
            "view": res.view,
            "userName": res.userName
          }
          this.recieve.push(obj);
        },
        err => {
          console.log(err);
        }
      );
  }

  public getDiscussionId() {
    this.acRoute.paramMap.subscribe(params => {
      this.discussionId = params.get("discussionId");
    });
    this.acRoute.paramMap.subscribe(params => {
      this.companyId = params.get("companyId");
    });
  }

  public joinGroup() {
    this.chatSrv.joinGroup(this.discussionId);
  }

  public getUserName() {
    this.userName = sessionStorage.getItem("userName");
  }
}

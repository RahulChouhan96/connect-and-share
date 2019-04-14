import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { ChatService } from 'src/app/chat.service';
import { DiscussionsService } from 'src/app/services/discussions.service';

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
  name: String;
  workSpaceAdminName: String;
  constructor(private acRoute: ActivatedRoute, private workSpaceSrv: WorkspacesService, 
    private chatSrv: ChatService, private discussionsSrv: DiscussionsService) { }

  ngOnInit() {
    this.getUserName();
    this.getName();
    this.getDiscussionId();
    this.getOneDiscussion();
    this.getGrpMsgs();
    this.joinGroup();
    this.checkUser();
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
      "userName": this.userName,
      "name": this.name
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
            "userName": res.userName,
            "name": res.name,
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

  public getName() {
    this.name = sessionStorage.getItem("name");
  }

  public isUserAdmin() {
    return this.userName === this.workSpaceAdminName;
  }

  public checkUser() {
    this.workSpaceSrv.getWorkSpaceAdmin(this.companyId)
      .subscribe(
        res => {
          console.log(res);
          this.workSpaceAdminName = res.response.userAdminName;
        },
        err => {
          console.log(err);
        }
      );
  }

  public deleteView(_id){
    let body = {
      "discussionId": this.discussionId,
      "_id": _id
    }
    this.discussionsSrv.deleteView(body)
    .subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    );
  }
}

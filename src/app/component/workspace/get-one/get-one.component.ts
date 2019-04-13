import { Component, OnInit } from '@angular/core';
import { DiscussionsService } from 'src/app/services/discussions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.css']
})
export class GetOneComponent implements OnInit {
  workSpace: any;
  discussions: any;
  employees: [String];
  companyId: String;
  userEmpNames: String;
  // addDis
  constructor(private discussionsSrv: DiscussionsService, private workSpacesSrv: WorkspacesService, private router: Router,
    private acRoute: ActivatedRoute, private chatSrv: ChatService) { }

  ngOnInit() {
    this.getCompanyId();
    this.getOneWorkSpace();
    this.getAllDiscussions();
    this.getAllEmpNames();
  }

  getOneWorkSpace() {
    this.workSpacesSrv.getOneWorkspace(this.companyId)
      .subscribe(
        res => {
          console.log(res);
          this.workSpace = res.response;
        },
        err => {
          console.log(err);
        }
      );
  }

  isUserAdmin() {
    return this.workSpace.userAdminName == this.getUserName();
  }

  getAllEmpNames() {
    console.log("You in get all emps");
    this.workSpacesSrv.getAllEmpNames(this.companyId)
      .subscribe(
        res => {
          console.log(res);
          this.userEmpNames = res.userProfiles;
        },
        err => {
          console.log(err);
        }
      );
  }

  getAllDiscussions() {
    console.log(this.companyId);
    this.discussionsSrv.getAllDiscussion(this.companyId)
      .subscribe(
        res => {
          console.log(res);
          this.discussions = res.response;
        },
        err => {
          console.log(err);
        },
      );
  }

  getCompanyId() {
    this.acRoute.paramMap.subscribe(params => {
      this.companyId = params.get("companyId");
      // console.log(this.companyId);
    });
  }

  getUserId() {
    return sessionStorage.getItem("userId");
  }

  getUserName() {
    return sessionStorage.getItem("userName");
  }
}

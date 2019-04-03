import { Component, OnInit } from '@angular/core';
import { DiscussionsService } from 'src/app/services/discussions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkspacesService } from 'src/app/services/workspaces.service';

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
  // addDis
  constructor(private discussionsSrv: DiscussionsService, private workSpacesSrv: WorkspacesService, private router: Router,
    private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCompanyId();
    this.getOneWorkSpace();
    this.getAllDiscussions();
  }

  getAllEmps() {

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

  // addOneDiscussion(companyId) {
  //   this.discussionsSrv.addOneDiscussion(companyId)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

}

import { Component, OnInit } from '@angular/core';
import { DiscussionsService } from 'src/app/services/discussions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-discussion',
  templateUrl: './add-discussion.component.html',
  styleUrls: ['./add-discussion.component.css']
})
export class AddDiscussionComponent implements OnInit {
  discussion: any = {
    "companyId": "",
    "topic": "",
    "description": ""
  };
  // companyId: String;
  constructor(private discussionsSrv: DiscussionsService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCompanyId();
    this.showMsg();
  }

  data: any = {};

  onSubmit() {
    alert(JSON.stringify(this.data));
  }
  
  addDiscussion() {
    this.discussionsSrv.addOneDiscussion(this.discussion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate([`workspaces/getOneWorkspace/${this.discussion.companyId}`]);
        },
        err => {
          console.log(err);
        }
      );
  }

  showMsg() {
    console.log(this.discussion);
  }

  getCompanyId() {
    this.acRoute.paramMap.subscribe(params => {
      this.discussion.companyId = params.get("companyId");
      // console.log(this.companyId);
    });
  }
}

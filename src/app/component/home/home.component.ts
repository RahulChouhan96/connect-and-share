import { Component, OnInit } from '@angular/core';
import { DiscussionsService } from 'src/app/services/discussions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companyId: String;
  discussions: any;
  userId: String;
  constructor(private discussionsSrv: DiscussionsService) { }

  ngOnInit() {
    this.getUserId();
    this.getAllDiscussions();
  }

  getUserId() {
    this.userId = sessionStorage.getItem("userId");
  }

  getAllDiscussions() {
    this.discussionsSrv.getCurrentDiscussion(this.userId)
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
}

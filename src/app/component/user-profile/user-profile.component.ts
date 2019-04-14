import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId: String;
  userProfile: any;
  constructor(private userSrv: UserService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUserId();
    this.getOneUser();
  }
  public getUserId() {
    // this.userId = sessionStorage.getItem("userId");
    this.acRoute.paramMap.subscribe(params => {
      this.userId = params.get("userId");
    });
  }

  public getOneUser() {
    console.log(this.userId);
    this.userSrv.getOneUser(this.userId)
      .subscribe(
        res => {
          console.log(res);
          this.userProfile = res.user
        },
        err => {
          console.log(err);
        }
      );
  }

}

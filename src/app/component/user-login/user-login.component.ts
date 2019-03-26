import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  cred: any = {}
  userProfile: any = {};
  constructor(private userSrv: UserService) { }

  ngOnInit() {
  }

  userLogin() {
    this.userSrv.userLogin(this.cred)
      .subscribe(
        res => {
          if (res.auth) {
            this.userProfile = res.userProfile;
            localStorage.setItem("token", res.token);
          }
        },
        err => {
          console.log(err);
        }
      );
  }

}

import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class UserLoginComponent implements OnInit {
  cred: any = {
    "userName": "",
    "password": ""
  }
  userProfile: any = {};
  error: String;
  constructor(private userSrv: UserService, private router: Router) { }

  ngOnInit() {
  }
  data: any = {};

  onSubmit() {
    alert(JSON.stringify(this.data));
  }
  userLogin() {
    this.userSrv.userLogin(this.cred)
      .subscribe(
        res => {
          if (res.auth) {
            // this.userProfile = res.userProfile;
            console.log(res.message);
            sessionStorage.setItem("token", res.token);
            sessionStorage.setItem("name", res.userProfile.name);
            sessionStorage.setItem("userId", res.userProfile.userId);
            sessionStorage.setItem("userName", res.userProfile.userName);
            sessionStorage.setItem("companyIds", res.userProfile.companyId);
            // this.userSrv.takeUserName(res.userProfile.userName);
            this.router.navigate(["home"]);
          } else {
            console.log(res);
            this.error = res.message;
          }
        },
        err => {
          console.log("Error is:");
          console.log(err);
          this.error = err.error.message;
        }
      );
  }

}

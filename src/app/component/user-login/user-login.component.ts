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

  userLogin() {
    this.userSrv.userLogin(this.cred)
      .subscribe(
        res => {
          if (res.auth) {
            // this.userProfile = res.userProfile;
            console.log(res.message);
            localStorage.setItem("token", res.token);
            localStorage.setItem("name", res.userProfile.name);
            this.router.navigate(["connect_and_share/user/chat"]);
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

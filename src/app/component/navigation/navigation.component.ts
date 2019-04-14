import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  userId: String;
  constructor(private userSrv: UserService) { }

  ngOnInit() {
    this.getUserId();
  }
  public logOut() {
    this.userSrv.logOut();
  }

  public getUserId() {
    this.userId = sessionStorage.getItem("userId");
  }
}

import { Component, OnInit } from '@angular/core';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newWorkSpace: any = {
    "companyName": "",
    "companyAddress": "",
    "areaOfWork": "",
    "description": ""
  };
  constructor(private workSpaceSrv: WorkspacesService, private router: Router) { }

  ngOnInit() {
    this.getUserId();
  }

  createWorkSpace() {
    this.newWorkSpace.userId = this.getUserId();
    console.log(this.newWorkSpace.userId);
    this.workSpaceSrv.createWorkSpace(this.newWorkSpace)
      .subscribe(
        res => {
          console.log(res);
          // this.router.navigate(["connect_and_share/workspaces"]);
        },
        err => {
          console.log(err);
        }
      );
  }

  getUserId() {
    return sessionStorage.getItem("userId");
  }

}

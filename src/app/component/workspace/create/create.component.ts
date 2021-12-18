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
    this.getUserName();
  }

  data: any = {};

  onSubmit() {
    alert(JSON.stringify(this.data));
  }

  createWorkSpace() {
    this.newWorkSpace.userName = this.getUserName();
    console.log(this.newWorkSpace.userName);
    this.workSpaceSrv.createWorkSpace(this.newWorkSpace)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(["workspaces"]);
        },
        err => {
          console.log(err);
        }
      );
  }

  getUserName() {
    return sessionStorage.getItem("userName");
  }

}
